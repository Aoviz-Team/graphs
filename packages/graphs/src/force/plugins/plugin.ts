/* eslint-disable no-unused-vars */
import { zoomIdentity, ZoomTransform } from 'd3-zoom';
import { IRenderData, IRenderLink, IRenderNode } from 'packages/graphs/src/force';
import { ForceLayout } from 'packages/graphs/src/force/layout';
import { EInternalEvent, EEventName, EEventRender } from '../cores/event';
import { Event as InternalEvent } from '../cores/event';

type IEventArgs = [Event, ...any];
type IRenderArgs<T> = [CanvasRenderingContext2D, T, ...any];
interface IPluginConfig {
  event: InternalEvent;
  transform: ZoomTransform;
  layout: ForceLayout;
}

export const PLUGIN_EVENTS = [
  EEventName.Click,
  EEventName.Dblclick,
  EEventName.Mousedown,
  EEventName.Mousemove,
  EEventName.Mouseup,
  EEventName.Contextmenu,
  EEventName.Keydown,
  EEventName.Keyup,
  EEventName.Wheel,
  EInternalEvent.SetTransform,
  EEventRender.BeforeDraw,
  EEventRender.AfterDraw,
  EEventRender.BeforeDrawNode,
  EEventRender.AfterDrawNode,
  EEventRender.BeforeDrawLink,
  EEventRender.AfterDrawLink,
  EEventRender.OverwriteDrawLink,
  EEventRender.OverwriteDrawNode,
  EInternalEvent.PreprocessRenderData
];
export class Plugin {
  transform = zoomIdentity;
  apply(config: IPluginConfig) {
    const { event, transform, layout } = config;
    this.transform = transform;
    // 交互事件
    event.on(EEventName.Click, this.onClick.bind(this));
    event.on(EEventName.Dblclick, this.onDblclick.bind(this));
    event.on(EEventName.Mousedown, this.onMousedown.bind(this));
    event.on(EEventName.Mousemove, this.onMousemove.bind(this));
    event.on(EEventName.Mouseup, this.onMouseup.bind(this));
    event.on(EEventName.Contextmenu, this.onContextmenu.bind(this));
    event.on(EEventName.Keydown, this.onKeydown.bind(this));
    event.on(EEventName.Keyup, this.onKeyup.bind(this));
    event.on(EEventName.Wheel, this.onWheel.bind(this));

    // 内置事件
    event.on(EInternalEvent.SetTransform, (t) => (this.transform = t));

    // 渲染事件
    event.on(EEventRender.BeforeDraw, this.beforeDraw.bind(this));
    event.on(EEventRender.AfterDraw, this.afterDraw.bind(this));
    event.on(EEventRender.BeforeDrawNode, this.beforeDrawNode.bind(this));
    event.on(EEventRender.AfterDrawNode, this.afterDrawNode.bind(this));
    event.on(EEventRender.BeforeDrawLink, this.beforeDrawLink.bind(this));
    event.on(EEventRender.AfterDrawLink, this.afterDrawLink.bind(this));
    // 重写方法实现后，会代替内置的绘制方法
    if (this.overwriteDrawLink) {
      event.on(EEventRender.OverwriteDrawLink, this.overwriteDrawLink.bind(this));
    }
    if (this.overwriteDrawNode) {
      event.on(EEventRender.OverwriteDrawNode, this.overwriteDrawNode.bind(this));
    }

    if (this.preprocessRenderData) {
      event.on(EInternalEvent.PreprocessRenderData, this.preprocessRenderData.bind(this));
    }

    this.disableZoom = () => {
      event.emit(EInternalEvent.DisableZoom);
    };
    this.enableZoom = () => {
      event.emit(EInternalEvent.EnableZoom);
    };
    this.getData = () => {
      return layout.data;
    };
    this.getSelectedNodes = () => {
      return event.onSelectedNodes$.value;
    };
    this.getSelectedLinks = () => {
      return event.onSelectedLinks$.value;
    };
    this.setSelectedNodes = (nodes: IRenderNode[]) => {
      return event.onSelectedNodes$.next(nodes);
    };
    this.setSelectedLinks = (links: IRenderLink[]) => {
      return event.onSelectedLinks$.next(links);
    };
    this.tick = () => {
      return layout.tick$.next(layout.data);
    };
  }

  onClick(...args: IEventArgs) {}
  onDblclick(...args: IEventArgs) {}
  onMousedown(...args: [MouseEvent, ...any]) {}
  onMousemove(...args: [MouseEvent, ...any]) {}
  onMouseup(...args: [MouseEvent, ...any]) {}
  onContextmenu(...args: IEventArgs) {}
  onKeydown(...args: [KeyboardEvent, ...any]) {}
  onKeyup(...args: [KeyboardEvent, ...any]) {}
  onWheel(...args: [WheelEvent, ...any]) {}

  beforeDrawNode(...args: IRenderArgs<IRenderNode>) {}
  afterDrawNode(...args: IRenderArgs<IRenderNode>) {}

  beforeDrawLink(...args: IRenderArgs<IRenderLink>) {}
  afterDrawLink(...args: IRenderArgs<IRenderLink>) {}

  beforeDraw(...args: IRenderArgs<IRenderData>) {}
  afterDraw(...args: IRenderArgs<IRenderData>) {}

  dispose() {}
}

export interface Plugin {
  /**
   * 重写方法实现后，会代替内置的渲染方法
   * @param context
   * @param node
   */
  overwriteDrawNode(...args: IRenderArgs<IRenderNode>);
  /**
   * 重写方法实现后，会代替内置的渲染方法
   * @param context
   * @param link
   */
  overwriteDrawLink(...args: IRenderArgs<IRenderLink>);
  /**
   * 重写方法实现后，会代替内置的渲染方法
   */
  preprocessRenderData(data: IRenderData): IRenderData;
  /**
   * 禁用缩放和拖拽画布
   */
  disableZoom();
  /**
   * 启用缩放和拖拽画布
   */
  enableZoom();
  /**
   * 获取渲染数据
   */
  getData(): IRenderData;
  /**
   * 获取选中的节点
   */
  getSelectedNodes(): IRenderNode[];
  /**
   * 获取选中的关系
   */
  getSelectedLinks(): IRenderLink[];
  /**
   * 设置选中的节点
   */
  setSelectedNodes(nodes: IRenderNode[]);
  /**
   * 设置选中的关系
   */
  setSelectedLinks(links: IRenderLink[]);
  /**
   * 触发一次渲染
   */
  tick();
}