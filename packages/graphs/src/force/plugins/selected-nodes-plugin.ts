import { merge } from 'lodash-es';
import { drawNodeStyle } from '../../draws';
import { INode, INodeStyle, IRenderData } from '../interface';
import { Plugin } from './plugin';

const DEFAULT_OPTION: ISelectedNodesOption = {
  space: 5,
  borderColor: '#70F0F9',
  borderWidth: 2,
  shadowBlur: 3,
  shadowColor: '#31DBFE'
};

export interface ISelectedNodesOption extends Omit<INodeStyle, 'color'> {
  space: number;
}
export class SelectedNodesPlugin extends Plugin {
  option: ISelectedNodesOption;
  constructor(option?: Partial<ISelectedNodesOption>) {
    super();
    this.option = merge({ ...DEFAULT_OPTION }, option);
  }

  onClick() {
    this.tick();
  }

  afterDraw(context: CanvasRenderingContext2D, data: IRenderData): void {
    context.save();
    context.translate(this.transform.x, this.transform.y);
    context.scale(this.transform.k, this.transform.k);
    const selectedNodes = this.getSelectedNodes();
    const selectedNodeHash = selectedNodes.reduce((prev, curr) => {
      prev[curr.id] = curr;
      return prev;
    }, {} as Record<string, INode>);
    data.nodes.forEach((node) => {
      if (selectedNodeHash[node.id]) {
        context.beginPath();
        context.arc(node.x!, node.y!, node.cfg.radius + (node.cfg.borderWidth || 0) + this.option.space, 0, 2 * Math.PI);
        drawNodeStyle(context, this.option, this.transform.k);
      }
    });
    context.restore();
  }
}
