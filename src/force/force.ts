import { select } from 'd3';
import { merge } from 'lodash-es';
import { distinctUntilChanged } from 'rxjs';
import { DEFAULT_OPTION } from './config';
import { Controller } from './cores/controller';
import { IForceData, IOption } from './interface';
import { mergeCfg } from './utils';

export class Force<T extends IForceData> {
  controller: Controller;
  constructor(selector: string | HTMLElement, config?: { data?: T; option?: IOption }) {
    this.controller = new Controller(selector, merge(config?.option, DEFAULT_OPTION));
    if (config?.data) this.controller.load(mergeCfg(config?.data));
  }

  data(data: T) {
    this.controller.load(mergeCfg(data));
  }

  getZoom() {
    return this.controller.transform.k;
  }

  setZoom(k: number) {
    this.controller.zoom.scaleTo(select(this.controller.canvas), k);
  }

  get onNodeClick$() {
    return this.controller.event.onNodeClick$.asObservable();
  }

  get onNodeHover$() {
    return this.controller.event.onNodeHover$.asObservable().pipe(distinctUntilChanged());
  }

  get onLinkClick$() {
    return this.controller.event.onLinkClick$.asObservable();
  }

  get onLinkHover$() {
    return this.controller.event.onLinkHover$.asObservable().pipe(distinctUntilChanged());
  }

  get onNodeDrag$() {
    return this.controller.event.onNodeDrag$.asObservable();
  }
}
