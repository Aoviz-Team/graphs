import { isString } from 'lodash-es';
import { select, drag, zoom, zoomIdentity, ZoomBehavior } from 'd3';
import { throttleTime } from 'rxjs/operators';
import { IForceData, ILayoutForceOption, IRenderNode, IOption, ISafeAny, IRenderData, ILink } from '../interface';
import { ForceLayout } from '../layout';
import { Renderer } from './renderer';
import { Event } from './event';
import { getNodeByPoint, updateLinkOffsetMultiple } from '../utils';
import { IPoint } from '../interface';

export class Controller {
  wrapper!: HTMLElement;
  canvas!: HTMLCanvasElement;
  layout!: ForceLayout;
  renderer!: Renderer;
  option!: IOption;
  transform = zoomIdentity;
  zoom!: ZoomBehavior<HTMLCanvasElement, unknown>;
  event!: Event;
  get tick$() {
    return this.layout.tick$;
  }

  constructor(selector: string | HTMLElement, option: IOption) {
    const wrapper = isString(selector) ? document.querySelector(selector) : selector;
    if (!wrapper) {
      console.log('[graphs]: The selector is null and void!');
      return;
    }
    this.wrapper = wrapper as HTMLElement;
    this.option = option;
    this.initCanvas();
    this.initEvent();
    this.initRenderer();
    this.initLayout();
    this.initDrag();
    this.initZoom();
    this.canvasDPI(this.canvas, option.layout.width || 0, option.layout.height || 0);
  }
  initCanvas() {
    this.wrapper.innerHTML = '';
    this.canvas = document.createElement('canvas');
    const clientRect = this.wrapper.getBoundingClientRect();
    const layoutOption = this.option.layout;
    layoutOption.width = layoutOption?.width || clientRect.width;
    layoutOption.height = layoutOption?.height || clientRect.height;
    this.canvas.width = layoutOption.width;
    this.canvas.height = layoutOption.height;
    this.wrapper.append(this.canvas);
  }

  initLayout() {
    this.layout = new ForceLayout(this.option.layout as ILayoutForceOption);
    this.tick$.pipe(throttleTime(106)).subscribe((data: IRenderData) => {
      this.renderer.draw(data);
    });
  }

  initRenderer() {
    const context = this.canvas.getContext('2d');
    if (!context) {
      console.warn('[graph]: failed to get the drawing context');
      return;
    }
    context.imageSmoothingEnabled = true;
    this.renderer = new Renderer(context, this.option, this.event);
  }

  initDrag() {
    const updateDragNodeCoordinates = (node: IRenderNode, point: IPoint) => {
      node.fx = this.transform.invertX(point.x);
      node.fy = this.transform.invertY(point.y);
    };
    select(this.canvas).call(
      (drag() as ISafeAny)
        .subject((ev) => {
          const node = getNodeByPoint(this.tick$.value.nodes, { x: this.transform.invertX(ev.x), y: this.transform.invertY(ev.y) });
          if (node) {
            node.x = this.transform.applyX(node.x || 0);
            node.y = this.transform.applyY(node.y || 0);
          }
          return node;
        })
        .on('start', (ev) => {
          if (!ev.active) {
            this.layout.simulation.alphaTarget(0.3).restart();
          }
          this.event.onNodeDrag$.next({ data: ev.subject, type: 'dragstart' });
          updateDragNodeCoordinates(ev.subject, { x: ev.x, y: ev.y });
        })
        .on('drag', (ev) => {
          this.event.onNodeDrag$.next({ data: ev.subject, type: 'dragging' });
          updateDragNodeCoordinates(ev.subject, { x: ev.x, y: ev.y });
        })
        .on('end', (ev) => {
          if (!ev.active) {
            this.layout.simulation.alphaTarget(0);
          }
          this.event.onNodeDrag$.next({ data: ev.subject, type: 'dragend' });
          ev.subject.fx = null;
          ev.subject.fy = null;
        })
    );
  }

  initZoom() {
    const zoomed = (ev) => {
      this.transform = ev.transform;
      this.renderer.setTransform(this.transform);
      this.event.setTransform(this.transform);
      this.renderer.draw(this.tick$.value);
    };
    this.zoom = (zoom() as ISafeAny).scaleExtent([1 / 6, 36]).on('zoom', zoomed);
    select(this.canvas).call(this.zoom).call(this.zoom.transform, zoomIdentity).on('dblclick', null);
  }

  initEvent() {
    this.event = new Event(this.canvas);
  }

  /**
   * 高清屏 canvas文字模糊处理
   */
  canvasDPI(canvasEl: HTMLCanvasElement, width: number, height: number) {
    // Output to Canvas, taking into account devices such as iPhone 4 with Retina Display
    const context = canvasEl?.getContext('2d');
    if (window.devicePixelRatio && context) {
      select(canvasEl).attr('width', width * window.devicePixelRatio);
      select(canvasEl).attr('height', height * window.devicePixelRatio);
      select(canvasEl).attr('style', `height: ${height}px; width: ${width}px`);
      context.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
  }

  load(data: IForceData) {
    const links = updateLinkOffsetMultiple(data.links as Required<ILink>[]);
    this.layout.load({ ...data, links });
  }
}
