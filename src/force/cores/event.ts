/* eslint-disable no-unused-vars */
import { zoomIdentity, ZoomTransform } from 'd3';
import { BehaviorSubject, fromEvent, Subject, tap, throttleTime } from 'rxjs';
import { ECollectorShape, ECollectorType, ICollector, INodeDragEvent, IPoint, IRenderLink, IRenderNode, ISafeAny } from '../interface';
import { isPointInCircle, isPointInPolygon, isPointInRect } from '../utils/math';
import { EventEmitter } from './eventemitter';

export enum EEventName {
  Click = 'click',
  Hover = 'hover',
  Dblclick = 'dblclick',
  Mousedown = 'mousedown',
  Mousemove = 'mousemove',
  Mouseup = 'mouseup',
  Contextmenu = 'contextmenu',
  Keydown = 'keydown',
  Keyup = 'keyup',
  Wheel = 'wheel'
}

export enum EInternalEvent {
  SetTransform = 'setTransform'
}

export enum EEventRender {
  BeforeDrawNode = 'beforeDrawNode',
  AfterDrawNode = 'afterDrawNode',
  BeforeDrawLink = 'beforeDrawLink',
  AfterDrawLink = 'afterDrawLink',
  BeforeDraw = 'beforeDraw',
  AfterDraw = 'afterDraw',
  OverwriteDrawNode = 'overwriteDrawNode',
  OverwriteDrawLink = 'overwriteDrawLink'
}

export class Event extends EventEmitter {
  element: HTMLCanvasElement;
  collectors: ICollector[] = [];
  transform = zoomIdentity;
  onNodeClick$ = new Subject<IRenderNode>();
  onLinkClick$ = new Subject<IRenderLink>();
  onNodeHover$ = new BehaviorSubject<IRenderNode | null>(null);
  onLinkHover$ = new BehaviorSubject<IRenderLink | null>(null);
  onNodeDrag$ = new Subject<INodeDragEvent>();

  constructor(element: HTMLCanvasElement) {
    super();
    this.element = element;
    this.initListener();
  }

  initListener() {
    fromEvent(this.element, EEventName.Mousemove)
      .pipe(
        tap((e) => this.emit(EEventName.Mousemove, e)),
        throttleTime(16)
      )
      .subscribe((ev) => this.processCollectors(ev, EEventName.Hover));
    fromEvent(this.element, EEventName.Click)
      .pipe(tap((e) => this.emit(EEventName.Click, e)))
      .subscribe((ev) => this.processCollectors(ev, EEventName.Click));
    fromEvent(this.element, EEventName.Dblclick).subscribe((e) => this.emit(EEventName.Dblclick, e));
    fromEvent(this.element, EEventName.Mousedown).subscribe((e) => this.emit(EEventName.Mousedown, e));
    fromEvent(this.element, EEventName.Mouseup).subscribe((e) => this.emit(EEventName.Mouseup, e));
    fromEvent(this.element, EEventName.Contextmenu).subscribe((e) => this.emit(EEventName.Contextmenu, e));
    fromEvent(this.element, EEventName.Keydown).subscribe((e) => this.emit(EEventName.Keydown, e));
    fromEvent(this.element, EEventName.Keyup).subscribe((e) => this.emit(EEventName.Keyup, e));
    fromEvent(this.element, EEventName.Wheel).subscribe((e) => this.emit(EEventName.Wheel, e));
  }

  setTransform(transform: ZoomTransform) {
    this.transform = transform;
    this.emit(EInternalEvent.SetTransform, transform);
  }

  dispatch(item: ICollector, eventName: EEventName) {
    switch (item.type) {
      case ECollectorType.NodeLabel:
      case ECollectorType.Node:
        this.dispatchNode(item, eventName);
        break;
      case ECollectorType.LinkLabel:
      case ECollectorType.Link:
        this.dispatchLink(item, eventName);
        break;
      default:
        break;
    }
  }

  dispatchNode(item: ICollector, eventName: EEventName) {
    switch (eventName) {
      case EEventName.Click:
        this.onNodeClick$.next(item.data as IRenderNode);
        break;
      case EEventName.Hover:
        this.onNodeHover$.next(item.data as IRenderNode);
        break;
      default:
        break;
    }
  }

  dispatchLink(item: ICollector, eventName: EEventName) {
    switch (eventName) {
      case EEventName.Click:
        this.onLinkClick$.next(item.data as IRenderLink);
        break;
      case EEventName.Hover:
        this.onLinkHover$.next(item.data as IRenderLink);
        break;
      default:
        break;
    }
  }
  isPointInItem(item: ICollector, point: IPoint) {
    switch (item.shape) {
      case ECollectorShape.Circle:
        return isPointInCircle(item.model.x, item.model.y, item.model.r, point.x, point.y);
      case ECollectorShape.Rect:
        return isPointInRect(item.model.points, point);
      case ECollectorShape.Polygon:
        return isPointInPolygon(item.model.points, point);
      default:
        return false;
    }
  }

  processCollectors(ev: ISafeAny, eventName: EEventName) {
    const x = this.transform.invertX(ev.offsetX);
    const y = this.transform.invertY(ev.offsetY);
    let isIn = false;
    for (const collector of this.collectors) {
      isIn = this.isPointInItem(collector, { x, y });
      if (isIn) {
        this.dispatch(collector, eventName);
        break;
      }
    }
    if (EEventName.Hover === eventName && !isIn) {
      this.onLinkHover$.next(null);
      this.onNodeHover$.next(null);
    }
  }
}
