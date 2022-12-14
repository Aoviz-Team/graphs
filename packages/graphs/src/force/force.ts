import { select } from 'd3-selection';
import { cloneDeep, merge } from 'lodash-es';
import { distinct, distinctUntilChanged } from 'rxjs';
import { DEFAULT_OPTION } from './config';
import { Controller } from './cores/controller';
import { IForceData, IOption } from './interface';
import { Plugin } from './plugins/plugin';

export class Force<T extends IForceData> {
  controller: Controller;
  constructor(selector: string | HTMLElement, config?: { data?: T; option?: DeepPartial<IOption> }) {
    const option = merge(cloneDeep(DEFAULT_OPTION), config?.option);
    this.controller = new Controller(selector, option);
    if (config?.data) this.controller.load(config.data);
  }

  data(data: T) {
    this.controller.load(data);
  }

  getZoom() {
    return this.controller.transform.k;
  }

  setZoom(k: number) {
    this.controller.zoom.scaleTo(select(this.controller.canvas), k);
  }

  setOption(option: IOption) {
    this.controller.setOption(merge(cloneDeep(DEFAULT_OPTION), option));
  }

  setPlugins(plugins: Plugin[]) {
    this.controller.setPlugins(plugins);
  }

  resize(size: { width: number; height: number }) {
    this.controller.resize(size);
  }

  dispose() {
    this.controller.dispose();
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

  get onSelectedNodes$() {
    return this.controller.event.onSelectedNodes$.asObservable().pipe(distinct((nodes) => nodes.map((node) => node.id).join(',')));
  }

  get onSelectedLinks$() {
    return this.controller.event.onSelectedLinks$.asObservable().pipe(distinct((links) => links.map((link) => link.id).join(',')));
  }
}
