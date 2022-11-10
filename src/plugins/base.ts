/* eslint-disable no-unused-vars */
import { IOption, IRenderData } from 'src/force';

export class GraphPlugin<T extends IOption> {
  option: T;
  data?: IRenderData;
  constructor(option: T, data?: IRenderData) {
    this.option = option;
    this.data = data;
  }

  onClick?: (e: Event) => boolean;
  onDblclick?: (e: Event) => boolean;
}
