import { cloneDeep, isString } from 'lodash-es';
import { zoom, zoomIdentity, ZoomBehavior } from 'd3-zoom';
import { select } from 'd3-selection';
import { drag } from 'd3-drag';
import { throttleTime } from 'rxjs/operators';
import { IForceData, ILayoutOption, IRenderNode, IOption, ISafeAny, IRenderData, ILink } from '../interface';
import { ForceLayout } from '../layout';
import { Renderer } from './renderer';
import { EInternalEvent, Event } from './event';
import { getNodeByPoint, mergeCfg, updateLinkOffsetMultiple } from '../utils';
import { IPoint } from '../interface';
import { Plugin, PLUGIN_EVENTS } from '../plugins/plugin';
export class Controller {
  originData: IForceData = { nodes: [], links: [] };
  wrapper!: HTMLElement;
  canvas!: HTMLCanvasElement;
  layout!: ForceLayout;
  renderer!: Renderer;
  option!: IOption;
  transform = zoomIdentity;
  zoom!: ZoomBehavior<HTMLCanvasElement, unknown>;
  event!: Event;
  plugins: Plugin[] = [];
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
    this.setOption(option);
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
    this.wrapper.style.position = 'relative';
    this.canvas = document.createElement('canvas');
    this.updateCanvas();
    this.wrapper.append(this.canvas);
  }

  updateCanvas() {
    const clientRect = this.wrapper.getBoundingClientRect();
    const layoutOption = this.option.layout;
    layoutOption.width = layoutOption?.width || clientRect.width;
    layoutOption.height = layoutOption?.height || clientRect.height;
    this.canvas.width = layoutOption.width;
    this.canvas.height = layoutOption.height;
  }

  initLayout() {
    const clientRect = this.wrapper.getBoundingClientRect();
    this.option.layout.width = this.option.layout?.width || clientRect.width;
    this.option.layout.height = this.option.layout?.height || clientRect.height;
    this.layout = new ForceLayout(this.option.layout as ILayoutOption);
    this.tick$.pipe(throttleTime(16, undefined, { trailing: true })).subscribe((data: IRenderData) => {
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
      if (this.option.layout.static) {
        node.x = node.fx;
        node.y = node.fy;
        this.tick$.next(this.tick$.value);
      }
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
          if (!ev.active && !this.option.layout.static) {
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
          if (!ev.active && !this.option.layout.static) {
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
    this.zoom = (zoom() as ISafeAny).scaleExtent([1 / 100, 36]).on('zoom', zoomed);
    select(this.canvas).call(this.zoom).call(this.zoom.transform, zoomIdentity).on('dblclick.zoom', null);
    this.event.on(EInternalEvent.DisableZoom, () => {
      select(this.canvas).on('.zoom', null);
    });
    this.event.on(EInternalEvent.EnableZoom, () => {
      select(this.canvas).call(this.zoom).on('dblclick.zoom', null);
    });
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
    this.originData = data;
    const _data = mergeCfg(cloneDeep(data), this.option);
    const links = updateLinkOffsetMultiple(_data.links as Required<ILink>[]);
    this.layout.load({ ..._data, links });
  }

  setOption(option: IOption) {
    this.option = option;
    const data = mergeCfg(cloneDeep(this.originData), this.option);
    const links = updateLinkOffsetMultiple(data.links as Required<ILink>[]);
    this.layout?.setOption(option.layout as ILayoutOption, { ...data, links });
  }

  setPlugins(plugins: Plugin[]) {
    for (const eventName of PLUGIN_EVENTS) {
      this.event.clear(eventName);
    }
    for (const plugin of plugins) {
      plugin.apply(this);
    }
    this.plugins = plugins;
    this.reRender();
  }

  resize(opt?: { width: number; height: number }) {
    const clientRect = this.wrapper.getBoundingClientRect();
    this.option.layout.width = opt?.width || clientRect.width;
    this.option.layout.height = opt?.height || clientRect.height;
    if (this.option.layout.width !== this.canvas.width || this.option.layout.height !== this.canvas.height) {
      this.layout.setOption(this.option.layout as ILayoutOption);
    }
  }

  reRender() {
    this.tick$.next(this.tick$.value);
  }

  dispose() {
    for (const plugin of this.plugins) {
      plugin.dispose();
    }
  }

  preprocessData(data: IForceData) {
    const preprocessDataFns = this.event.get(EInternalEvent.PreprocessData);
    let { nodes, links } = data;
    if (preprocessDataFns && preprocessDataFns.size) {
      for (const preprocessData of preprocessDataFns) {
        const _data = preprocessData({ nodes, links }) as IForceData;
        nodes = _data.nodes;
        links = _data.links;
      }
    }
    return { nodes, links };
  }
}
