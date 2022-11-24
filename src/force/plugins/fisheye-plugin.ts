import { merge } from 'lodash-es';
import { IRenderData, IRenderLink, IRenderNode } from '../interface';
import { radial } from '../utils';
import { Plugin } from './plugin';

const DEFAULT_OPTION = {
  keyCombination: ['ctrl'],
  radius: 130,
  distortion: 5,
  smoothing: 0.1,
  borderColor: '#329485',
  borderWidth: 1,
  borderLineDash: [],
  fillColor: 'rgba(23,45,67,0.1)'
};
interface IFisheyeOption {
  keyCombination: Array<'alt' | 'ctrl' | 'shift'>;
  radius: number;
  distortion: number;
  smoothing: number;
  borderColor: string;
  borderWidth: number;
  borderLineDash: number[];
  fillColor: string;
}
export class FisheyePlugin extends Plugin {
  keyCombination: Array<'alt' | 'ctrl' | 'shift'> = ['ctrl'];
  fisheye;
  mousePoint = { x: 0, y: 0 };
  focus = false;
  option: IFisheyeOption;
  constructor(option?: Partial<IFisheyeOption>) {
    super();
    this.option = merge({ ...DEFAULT_OPTION }, option);
    if (option?.keyCombination) this.keyCombination = option.keyCombination;
    this.fisheye = (radial() as any)
      .radius(this.option.radius + 10)
      .distortion(this.option.distortion)
      .smoothing(this.option.smoothing);
  }

  onMousemove(event: MouseEvent): void {
    if (!this.isAllow(event) && this.focus) {
      this.focus = false;
      this.tick();
    }
    if (!this.isAllow(event)) return;
    this.focus = true;
    this.fisheye.focus([event.offsetX, event.offsetY]);
    this.mousePoint = { x: event.offsetX, y: event.offsetY };
    this.tick();
  }

  isAllow(event: MouseEvent) {
    if (!this.keyCombination.length) return true;
    for (const key of this.keyCombination) {
      if (key === 'alt' && !event.altKey) return false;
      if (key === 'shift' && !event.shiftKey) return false;
      if (key === 'ctrl' && !event.ctrlKey) return false;
    }
    return true;
  }

  afterDraw(ctx: CanvasRenderingContext2D): void {
    if (!this.focus) return;
    ctx.beginPath();
    ctx.arc(this.mousePoint.x, this.mousePoint.y, this.option.radius, 0, 2 * Math.PI);
    ctx.strokeStyle = this.option.borderColor;
    ctx.fillStyle = this.option.fillColor;
    ctx.stroke();
    ctx.fill();
  }

  preprocessRenderData(data: IRenderData) {
    if (!this.focus) return data;
    const { nodes, links } = data;
    const nodeHash: Record<string, IRenderNode> = {};
    for (const node of nodes) {
      const [x, y] = this.fisheye([this.transform.applyX(node.x!), this.transform.applyY(node.y!)]);
      const _node = { ...node, x: this.transform.invertX(x), y: this.transform.invertY(y) };
      nodeHash[node.id] = _node;
    }
    const _links = links.map((link) => {
      return { ...link, source: nodeHash[link.source.id], target: nodeHash[link.target.id] } as IRenderLink;
    });
    return { nodes: Object.values(nodeHash), links: _links };
  }
}
