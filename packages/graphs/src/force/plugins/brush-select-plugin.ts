import { uniqBy } from 'lodash-es';
import { IPoint } from '../interface';
import { isPointInRect } from '../utils/math';
import { Plugin } from './plugin';

const SVG_NS = 'http://www.w3.org/2000/svg';

export interface IBrushSelectOption {
  keyCombination: Array<'alt' | 'ctrl' | 'shift'>;
}
export class BrushSelectPlugin extends Plugin {
  container?: HTMLElement;
  shapeMask!: SVGElement;
  shape!: SVGRectElement;
  style?: HTMLStyleElement;
  mousePoint = { x: 0, y: 0, wrapperX: 0, wrapperY: 0, wrapperWidth: 0, wrapperHeight: 0 };
  keyCombination: Array<'alt' | 'ctrl' | 'shift'> = ['shift'];

  constructor(option?: IBrushSelectOption) {
    super();
    if (option?.keyCombination) this.keyCombination = option.keyCombination;
  }

  initShape() {
    this.style = this.getStyleElement();
    this.container?.append(this.style);
    const svg = document.createElementNS(SVG_NS, 'svg');
    const g = document.createElementNS(SVG_NS, 'g');
    const rect = document.createElementNS(SVG_NS, 'rect');
    g.appendChild(rect);
    svg.append(g);
    svg.classList.add('aoviz-graph-shape-mask');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.style.position = 'absolute';
    svg.style.top = '0';
    svg.style.left = '0';
    svg.style.display = 'none';
    svg.style.zIndex = '9';
    rect.setAttribute('stroke-dasharray', '5');
    rect.setAttribute('stroke-dashoffset', '1');
    rect.setAttribute('fill', 'rgba(106, 161, 255, 0.3)');
    rect.setAttribute('stroke', '#6AA1FF');
    rect.classList.add('aoviz-graph-shape-rect');
    this.shapeMask = svg;
    this.shape = rect;
    this.container?.append(this.shapeMask);
  }

  getStyleElement() {
    const style = document.createElement('style');
    style.innerHTML = `
        .aoviz-graph-shape-rect {
            animation: shape-stroke 2s infinite linear;
        }
    
        .aoviz-graph-shape-mask {
            cursor: crosshair;
        }
    
        @keyframes shape-stroke {
            0% {
                stroke-dashoffset: 100px;
            }
    
            100% {
                stroke-dashoffset: 0;
            }
        }
      
    `;
    return style;
  }

  getRectPosition(event: MouseEvent) {
    const offsetX = event.clientX - this.mousePoint.wrapperX;
    const offsetY = event.clientY - this.mousePoint.wrapperY;
    const realOffsetX = offsetX < 0 ? 0 : offsetX;
    const realOffsetY = offsetY < 0 ? 0 : offsetY;
    // 开始位置
    const x = realOffsetX > this.mousePoint.x ? this.mousePoint.x : realOffsetX;
    const y = realOffsetY > this.mousePoint.y ? this.mousePoint.y : realOffsetY;
    const width = Math.abs(realOffsetX - this.mousePoint.x);
    const height = Math.abs(realOffsetY - this.mousePoint.y);

    const realWidth = width + x > this.mousePoint.wrapperWidth ? this.mousePoint.wrapperWidth - x : width;
    const realHeight = height + y > this.mousePoint.wrapperHeight ? this.mousePoint.wrapperHeight - y : height;
    return {
      x,
      y,
      width: realWidth,
      height: realHeight
    };
  }

  getNodes(area: { x: number; y: number; width: number; height: number }) {
    const { x, y, width, height } = area;
    const invertPoint = (p: { x: number; y: number }) => ({ x: this.transform.invertX(p.x), y: this.transform.invertY(p.y) });
    const pointA = invertPoint({ x, y });
    const pointB = invertPoint({ x: x + width, y });
    const pointC = invertPoint({ x: x + width, y: y + height });
    const pointD = invertPoint({ x, y: y + height });
    const nodes = this.getData()?.nodes.filter((node) => isPointInRect([pointD, pointA, pointB, pointC], node as IPoint)) || [];
    return uniqBy([...this.getSelectedNodes(), ...nodes], 'id');
  }

  onMousedown(event: MouseEvent): void {
    this.container = (event.target as HTMLElement).parentElement!;
    if (!this.container) return;
    if (!this.isAllow(event)) return;
    this.disableZoom();
    this.initShape();
    this.shapeMask.style.display = 'block';
    this.mousePoint = {
      x: event.offsetX,
      y: event.offsetY,
      wrapperX: event.clientX - event.offsetX,
      wrapperY: event.clientY - event.offsetY,
      wrapperWidth: (event.target as HTMLElement).clientWidth,
      wrapperHeight: (event.target as HTMLElement).clientHeight
    };
    this.shape.setAttribute('x', `${event.offsetX}`);
    this.shape.setAttribute('y', `${event.offsetY}`);
    this.shape.setAttribute('width', '0');
    this.shape.setAttribute('height', '0');
    document.addEventListener('mousemove', this._onMousemove);
    document.addEventListener('mouseup', this._onMouseup);
  }

  _onMousemove = (event: MouseEvent) => {
    if (!this.container) return;
    const rect = this.getRectPosition(event);
    this.shape.setAttribute('x', `${rect.x}`);
    this.shape.setAttribute('y', `${rect.y}`);
    this.shape.setAttribute('width', `${rect.width}`);
    this.shape.setAttribute('height', `${rect.height}`);
  };

  _onMouseup = (event: MouseEvent) => {
    if (!this.container) return;
    this.enableZoom();
    document.removeEventListener('mousemove', this._onMousemove);
    document.removeEventListener('mouseup', this._onMouseup);
    this.remove();
    this.container = undefined;
    this.setSelectedNodes(this.getNodes(this.getRectPosition(event)));
    this.tick();
  };

  isAllow(event: MouseEvent) {
    if (!this.keyCombination.length) return true;
    for (const key of this.keyCombination) {
      if (key === 'alt' && !event.altKey) return false;
      if (key === 'shift' && !event.shiftKey) return false;
      if (key === 'ctrl' && !event.ctrlKey) return false;
    }
    return true;
  }

  remove() {
    this.style?.remove();
    this.shapeMask?.remove();
  }
}
