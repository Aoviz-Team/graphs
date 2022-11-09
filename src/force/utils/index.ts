import { cloneDeep, isNumber, merge, pick } from 'lodash-es';
import { ELinkShape, IForceData, ILink, ILinkCfg, INode, INodeCfg, IOption, IPoint, IRenderData, ISafeAny } from '../interface';
import { IRenderNode } from '../interface';
import { isPointInCircle } from './math';

export function getNodeByPoint(nodes: IRenderNode[], point: IPoint) {
  for (const node of nodes) {
    const isInside = isPointInCircle(node.x || 0, node.y || 0, node?.cfg?.radius || 20, point.x, point.y);
    if (isInside) return node;
  }
  return null;
}

export function mergeCfg<T extends { nodes: { cfg?: Partial<INodeCfg> }[]; links: { cfg?: Partial<ILinkCfg> }[] }>(data: T, option: IOption): T {
  data.nodes.forEach((node) => {
    node.cfg = merge(cloneDeep(option.node), node?.cfg) as INodeCfg;
  });
  data.links.forEach((link) => {
    link.cfg = merge(cloneDeep(option.link), link?.cfg) as ILinkCfg;
  });
  return data;
}

export function updateLinkOffsetMultiple(links: Required<ILink>[]) {
  const hash: ISafeAny = {};
  for (const link of links) {
    const hashKey1 = `${link.source}-${link.target}`;
    const hashKey2 = `${link.target}-${link.target}`;

    if (!isNumber(hash[hashKey1])) {
      hash[hashKey1] = 0;
    }

    if (!isNumber(hash[hashKey2])) {
      hash[hashKey2] = 0;
    }
    hash[hashKey1] += 1;

    const offsetMultiple = Math.ceil((hash[hashKey1] + hash[hashKey2]) / 2) * ((hash[hashKey1] & 1) === 0 ? -1 : 1);
    link._offsetMultiple = offsetMultiple;
  }

  for (const link of links) {
    const hashKey1 = `${link.source}-${link.target}`;
    const hashKey2 = `${link.target}-${link.source}`;
    const num = hash[hashKey1] + hash[hashKey2];
    if (link.source === link.target) {
      link.cfg.shape = ELinkShape.Self;
    } else {
      link.cfg.shape = num > 1 ? ELinkShape.Arc : link.cfg?.shape;
    }
  }
  return links;
}

export function mergeRenderData(data: IForceData | undefined, renderData: IRenderData) {
  // 合并渲染数据的位置信息，否则会出现闪屏抖动
  if (!data) return renderData;
  const { nodes, links } = data;
  const { nodes: renderNodes } = renderData;
  const rNodeHash = renderNodes.reduce((p, c) => {
    p[c.id] = c;
    return p;
  }, {} as Record<string, IRenderNode>);
  const _nodes = nodes.map((node) => {
    return { ...node, ...pick(rNodeHash?.[node.id], ['x', 'y', 'vx', 'vy', 'fx', 'fy']) };
  });
  const nodeHash = _nodes.reduce((p, c) => {
    p[c.id] = c;
    return p;
  }, {} as Record<string, INode>);
  const _links = links.map((link) => {
    return { ...link, source: nodeHash[link.source], target: nodeHash[link.target] };
  });
  return { nodes: _nodes, links: _links };
}
