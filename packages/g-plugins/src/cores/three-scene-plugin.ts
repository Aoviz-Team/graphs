import { IForceData, IRenderData, IRenderLink, IRenderNode, IPluginConfig, Plugin } from '@aoviz/graphs';
import {
  AmbientLight,
  BufferGeometry,
  CanvasTexture,
  DirectionalLight,
  Line,
  LineBasicMaterial,
  Mesh,
  MeshPhongMaterial,
  PerspectiveCamera,
  Scene,
  SphereGeometry,
  Sprite,
  SpriteMaterial,
  Vector3,
  WebGLRenderer
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { DragControls } from 'three/examples/jsm/controls/DragControls';
import { differenceBy, find, values } from 'lodash-es';

function generateText(value: string, size = 42) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d')!;
  ctx.font = `${size}px`;
  const textMeasured = ctx.measureText(value);
  canvas.width = textMeasured.width;
  canvas.height = size + 2;
  const centerPoint = { x: textMeasured.width / 2, y: size / 2 };
  ctx.save();
  ctx.translate(centerPoint.x, centerPoint.y);
  ctx.font = `${size}px`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#fff';
  ctx.fillText(value, 0, 0);
  ctx.restore();
  return canvas;
}
export class ThreeScenePlugin extends Plugin {
  historyData?: IRenderData;
  scene?: Scene;
  renderer?: WebGLRenderer;
  camera?: PerspectiveCamera;
  trackballControls?: OrbitControls;
  dragNode?: IRenderNode;
  nObject3DMap: Record<string, any> = {};
  lObject3DMap: Record<string, any> = {};
  constructor() {
    super();
  }

  apply(config: IPluginConfig): void {
    super.apply(config);
    this.setup();
    this.preprocessData(config.layout.data as unknown as IForceData);
  }

  setup() {
    this.scene = new Scene();
    this.renderer = new WebGLRenderer();
    const { width, height } = this.getLayoutOption();
    this.renderer.setSize(width, height);
    this.renderer.shadowMap.enabled = true;
    const wrapper = this.getWrapper();
    wrapper.querySelector('canvas')!.style.display = 'none';
    wrapper.appendChild(this.renderer.domElement);
    this.camera = new PerspectiveCamera(45, width / height, 1, 10000);
    this.camera.position.set(0, 0, -1300);
    this.camera.lookAt(0, 0, 0);

    const ambientLight = new AmbientLight(0xffffff, 0.5);
    ambientLight.position.set(0, 10, 0);
    this.scene.add(ambientLight);

    const directionalLight = new DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(100, 100, 100);
    this.scene.add(directionalLight);

    // const axesHelper = new AxesHelper(150);
    // this.scene.add(axesHelper);

    this.trackballControls = new OrbitControls(this.camera, wrapper);

    const animate = () => {
      requestAnimationFrame(animate);
      this.trackballControls?.update();
      this.renderer?.render(this.scene!, this.camera!);
    };
    animate();
  }

  preprocessData(data: IForceData): IForceData {
    const hNodes = this.historyData?.nodes || [];
    const hLinks = this.historyData?.links || [];
    const nodes = data.nodes || [];
    const links = data.links || [];
    const dNodes = differenceBy(hNodes, nodes, 'id');
    const dLinks = differenceBy(hLinks, links, 'id');
    const aNodes = differenceBy(nodes, hNodes, 'id');
    const aLinks = differenceBy(links, hLinks, 'id');
    const { width, height } = this.getLayoutOption();
    for (const node of aNodes) {
      const spriteMap = new CanvasTexture(generateText(node.name));
      const spriteMaterial = new SpriteMaterial({ map: spriteMap, color: '#fff' });
      const sprite = new Sprite(spriteMaterial);
      spriteMap.needsUpdate = true;
      sprite.scale.set(30, (30 * width) / height, 1);
      const sphereGeometry = new SphereGeometry(node.cfg?.radius, 12, 12);
      const sphereMaterial = new MeshPhongMaterial({
        color: node.cfg?.color,
        opacity: 0.8,
        transparent: true
      });
      const sphere = new Mesh(sphereGeometry, sphereMaterial);
      sphere.userData['id'] = node.id;
      this.scene?.add(sprite);
      this.scene?.add(sphere);
      this.nObject3DMap[node.id] = { sprite, sphere };
    }

    for (const link of aLinks) {

      const spriteMap = new CanvasTexture(generateText(link.name));
      const spriteMaterial = new SpriteMaterial({ map: spriteMap, color: '#fff' });
      const sprite = new Sprite(spriteMaterial);
      spriteMap.needsUpdate = true;
      sprite.scale.set(30, (30 * width) / height, 1);

      const material = new LineBasicMaterial({ color: link.cfg?.color });
      const geometry = new BufferGeometry();
      const line = new Line(geometry, material);
      line.castShadow = true;
      line.receiveShadow = true;
      this.scene?.add(line);
      this.scene?.add(sprite)
      this.lObject3DMap[link.id] = { line, sprite };
    }

    for (const node of dNodes) {
      this.scene?.remove(this.nObject3DMap[node.id].sprite)
      this.scene?.remove(this.nObject3DMap[node.id].sphere)
      delete this.nObject3DMap[node.id];
    }

    for (const link of dLinks) {
      this.scene?.remove(this.lObject3DMap[link.id].line)
      this.scene?.remove(this.lObject3DMap[link.id].sprite)
      delete this.lObject3DMap[link.id];
    }

    const dragControls = new DragControls(
      values(this.nObject3DMap).map((item) => item.sphere),
      this.camera!,
      this.renderer?.domElement
    );
    const simulation = this.getSimulation();
    dragControls.addEventListener('hoveron', () => {
      this.trackballControls!.enabled = false;
    });
    dragControls.addEventListener('hoveroff', () => {
      this.trackballControls!.enabled = true;
    });

    dragControls.addEventListener('dragstart', (event) => {
      simulation.alphaTarget(0.3).restart();
      const { nodes } = this.getData();
      this.dragNode = find(nodes, { id: event.object.userData.id });
      console.log(event);
      this.dragNode!.fx = event.object.position.x;
      this.dragNode!.fy = event.object.position.y;
    });
    dragControls.addEventListener('drag', (event) => {
      this.dragNode!.fx = event.object.position.x;
      this.dragNode!.fy = event.object.position.y;
      this.overwriteDrawNode(undefined as unknown as any, this.dragNode!);
    });
    dragControls.addEventListener('dragend', (event) => {
      simulation.alphaTarget(0);
      this.dragNode!.fx = null;
      this.dragNode!.fy = null;
    });
    return data;
  }

  overwriteDrawNode(_: CanvasRenderingContext2D, node: IRenderNode) {
    this.nObject3DMap[node.id].sphere.position.set(node.x!, node.y!, 10);
    this.nObject3DMap[node.id].sprite.position.set(node.x!, node.y!, 10);
  }
  overwriteDrawLink(_: CanvasRenderingContext2D, link: IRenderLink) {
    this.lObject3DMap[link.id].line.geometry.setFromPoints([new Vector3(link.source.x, link.source.y, 10), new Vector3(link.target.x, link.target.y, 10)]);
    this.lObject3DMap[link.id].sprite.position.set((link.source.x + link.target.x) / 2, (link.source.y + link.target.y) / 2, 10);
  }
}
