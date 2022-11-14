import { radial } from '../utils';
import { Plugin } from './plugin';

interface IFisheyeOption {
  keyCombination: Array<'alt' | 'ctrl' | 'shift'>;
}
export class FisheyePlugin extends Plugin {
  keyCombination: Array<'alt' | 'ctrl' | 'shift'> = ['ctrl'];
  fisheye;
  mousePoint = { x: 0, y: 0 };
  focus = false;
  constructor(option?: IFisheyeOption) {
    super();
    if (option?.keyCombination) this.keyCombination = option.keyCombination;
    this.fisheye = (radial() as any).radius(100).distortion(4).smoothing(0.5);
  }

  onMousemove(event: MouseEvent): void {
    if (!this.isAllow(event) && this.focus) {
      this.focus = false;
      this.tick();
    }
    if (!this.isAllow(event)) return;
    this.focus = true;
    this.fisheye.focus([event.x, event.y]);
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

  onAfterDraw(ctx: CanvasRenderingContext2D): void {
    if (!this.focus) return;
    ctx.beginPath();
    ctx.arc(this.mousePoint.x, this.mousePoint.y, 100, 0, 2 * Math.PI);
    ctx.strokeStyle = '#329485';
    ctx.fillStyle = 'rgba(23,45,67,0.1)';
    ctx.stroke();
    ctx.fill();
  }
}
