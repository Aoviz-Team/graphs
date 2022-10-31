import { forceSimulation, forceManyBody, forceCollide, Simulation, forceX, forceY, forceCenter, forceLink } from 'd3';
import { difference, isFunction } from 'lodash-es';
import { BehaviorSubject } from 'rxjs';
import { IForceData, ILayoutForceOption, IRenderData, IRenderLink, IRenderNode, ISafeAny } from '../interface';


const forces = [
  { force: 'n-body', strength: -1600 ,distanceMin: 30},
  { force: 'collide', strength: 0.5, radius: (d: ISafeAny) => d.cfg?.radius || 20, iterations: 1 },
  { force: 'link', id: d => d.id, distance: 200, strength: 200, iterations: 1 },
  { force: 'x', strength: 0.1 },
  { force: 'y', strength: 0.1 },
  { force: 'center' }
]
const forceMap = {
  center: forceCenter,
  collide: forceCollide,
  'n-body': forceManyBody,
  link: forceLink,
  x: forceX,
  y: forceY
}

const forceKeys = Object.keys(forceMap)
export class ForceLayout {
  simulation: Simulation<IRenderNode, IRenderLink> = forceSimulation();
  data: IRenderData = { nodes: [], links: [] };
  option: ILayoutForceOption;
  tick$ = new BehaviorSubject<IRenderData>({ nodes: [], links: [] });

  get nodes() {
    return this.data.nodes || [];
  }

  set nodes(nodes: IRenderNode[]) {
    this.data.nodes = nodes;
  }

  get links() {
    return this.data.links || [];
  }

  set links(links: IRenderLink[]) {
    this.data.links = links;
  }
  constructor(option: ILayoutForceOption, data?: IRenderData) {
    this.data = data || this.data;
    this.option = option;
    this.onTick();
    this.setup();
    // this.execute()
    this.load();
  }

  onTick() {
    this.simulation.on('tick', () => {
      this.tick$.next(this.data);
    });
  }

  setup() {
    const { width, height } = this.option;
    const collect: string[] = []
    for (const _ of forces) {
      if (!forceMap[_.force]) continue;
      const f = forceMap[_.force]()
      for (const p in _) {
        if (isFunction(f[p])) f[p](isFunction(_[p]) ? d => _[p](d, _, this.option) : _[p])
      }
      if (_.force === 'x' && !_['x']) f.x(width / 2)
      if (_.force === 'y' && !_['y']) f.y(height / 2)
      if (_.force === 'center') {
        if (!_['x']) f.x(width / 2)
        if (!_['y']) f.y(height / 2)
      }
      collect.push(_.force)
      this.simulation.force(_.force, f)
    }
    for (const _ of difference(forceKeys, collect) as any) {
      this.simulation.force(_.force, null)
    }
    this.simulation.velocityDecay(0.15);
  }
  execute() {
    const { chargeStrength, collideStrength, width, height } = this.option;
    this.simulation
      .force('charge', forceManyBody().strength(chargeStrength).distanceMin(30))
      .force(
        'collide',
        forceCollide()
          .strength(collideStrength)
          .radius((d: ISafeAny) => d.cfg?.radius || 20)
          .iterations(1)
      )
      .force('x', forceX(width / 2))
      .force('y', forceY(height / 2))
      .force('centers', forceCenter(width / 2, height / 2))
      .velocityDecay(0.15);
  }

  load(data?: IForceData) {
    this.data = (data || this.data) as unknown as IRenderData;
    const { linkDistance } = this.option;
    this.simulation.nodes(this.nodes).force(
      'links',
      forceLink<IRenderNode, IRenderLink>(this.links)
        .id((d: ISafeAny) => d.id)
        .distance(linkDistance)
    );
    this.simulation.alpha(0.3).stop()
    if (this.option.static) {
      for (let i = 0, n = Math.ceil(Math.log(this.simulation.alphaMin()) / Math.log(1 - this.simulation.alphaDecay())); i < n; ++i) {
        this.simulation.tick();
      }
      this.tick$.next(this.data);
    } else {
      this.simulation.restart()
    }
  }
}
