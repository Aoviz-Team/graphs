/* eslint-disable no-unused-vars */
import { zoomIdentity, ZoomTransform } from 'd3-zoom';
import { IRenderData, IRenderLink, IRenderNode } from 'src/force';
import { EInternalEvent, EEventName, EEventRender } from '../force/cores/event';
import { EventEmitter } from '../force/cores/eventemitter';

type IEventArgs = [Event, ...any];
type IRenderArgs<T> = [CanvasRenderingContext2D, T, ...any];
interface IPluginConfig {
  event: EventEmitter;
  transform: ZoomTransform;
}
export class Plugin {
  transform = zoomIdentity;
  overwriteDrawNode?: (...args: IRenderArgs<IRenderNode>) => void;
  overwriteDrawLink?: (...args: IRenderArgs<IRenderLink>) => void;
  apply(config: IPluginConfig) {
    const { event, transform } = config;
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
    event.on(EEventRender.BeforeDraw, this.onBeforeDraw.bind(this));
    event.on(EEventRender.AfterDraw, this.onAfterDraw.bind(this));
    event.on(EEventRender.BeforeDrawNode, this.onBeforeDrawNode.bind(this));
    event.on(EEventRender.AfterDrawNode, this.onAfterDrawNode.bind(this));
    event.on(EEventRender.BeforeDrawLink, this.onBeforeDrawLink.bind(this));
    event.on(EEventRender.AfterDrawLink, this.onAfterDrawLink.bind(this));
    if (this.overwriteDrawLink) {
      console.log('overt1');
      event.on(EEventRender.OverwriteDrawLink, this.overwriteDrawLink.bind(this));
    }
    if (this.overwriteDrawNode) {
      console.log('overt2');
      event.on(EEventRender.OverwriteDrawNode, this.overwriteDrawNode.bind(this));
    }
  }

  onClick(...args: IEventArgs) {}
  onDblclick(...args: IEventArgs) {}
  onMousedown(...args: IEventArgs) {}
  onMousemove(...args: IEventArgs) {}
  onMouseup(...args: IEventArgs) {}
  onContextmenu(...args: IEventArgs) {}
  onKeydown(...args: IEventArgs) {}
  onKeyup(...args: IEventArgs) {}
  onWheel(...args: IEventArgs) {}

  onBeforeDrawNode(...args: IRenderArgs<IRenderNode>) {}
  onAfterDrawNode(...args: IRenderArgs<IRenderNode>) {}

  onBeforeDrawLink(...args: IRenderArgs<IRenderLink>) {}
  onAfterDrawLink(...args: IRenderArgs<IRenderLink>) {}

  onBeforeDraw(...args: IRenderArgs<IRenderData>) {}
  onAfterDraw(...args: IRenderArgs<IRenderData>) {}
}
