import { zoomIdentity, ZoomTransform } from 'd3';
import { BehaviorSubject, fromEvent, Subject, throttleTime } from 'rxjs';
import { ECollectorShape, ECollectorType, ICollector, INodeDragEvent, IPoint, IRenderLink, IRenderNode, ISafeAny } from '../interface';
import { isPointInCircle, isPointInPolygon, isPointInRect } from '../utils/math';

enum EEventName {
  Click = 'click',
  Hover = 'hover',
}

export class Event {
  element: HTMLCanvasElement;
  collectors: ICollector[] = [];
  transform = zoomIdentity;
  onNodeClick$ = new Subject<IRenderNode>();
  onLinkClick$ = new Subject<IRenderLink>();
  onNodeHover$ = new BehaviorSubject<IRenderNode | null>(null);
  onLinkHover$ = new BehaviorSubject<IRenderLink | null>(null);
  onNodeDrag$ = new Subject<INodeDragEvent>();

  constructor(element: HTMLCanvasElement) {
    this.element = element;
    this.initListener();
  }

  initListener() {
    fromEvent(this.element, 'mousemove')
      .pipe(throttleTime(16))
      .subscribe((ev) => this.processCollectors(ev, EEventName.Hover));
    fromEvent(this.element, 'click').subscribe((ev) => this.processCollectors(ev, EEventName.Click));
  }

  setTransform(transform: ZoomTransform) {
    this.transform = transform;
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
