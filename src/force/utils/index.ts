import { cloneDeep, isNumber, merge } from 'lodash-es';
import { DEFAULT_OPTION } from '../config';
import { ELinkShape, IForceData, ILink, ILinkCfg, INodeCfg, IPoint, ISafeAny } from '../interface';
import { IRenderNode } from '../interface';
import { isPointInCircle } from './math';

export function getNodeByPoint(nodes: IRenderNode[], point: IPoint) {
  for (const node of nodes) {
    const isInside = isPointInCircle(node.x || 0, node.y || 0, node?.cfg?.radius || 20, point.x, point.y);
    if (isInside) return node;
  }
  return null;
}

export function mergeCfg(data: IForceData): IForceData {
  return {
    nodes: data.nodes?.map((node) => ({ ...node, cfg: merge(cloneDeep(DEFAULT_OPTION.node), node?.cfg) as INodeCfg })) || [],
    links: data.links?.map((link) => ({ ...link, cfg: merge(cloneDeep(DEFAULT_OPTION.link), link?.cfg) as ILinkCfg })) || [],
  };
}

export function updateLinkOffsetMultiple(links: Required<ILink>[]) {
  const hash: ISafeAny = {};
  for (const link of links) {
    const hashKey1 = `${link.source}-${link.target}`;
    const hashKey2 = `${link.target}-${link.source}`;

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
