import { SimulationNodeDatum } from 'd3';
export type ISafeAny = any;

export type IRenderNode = SimulationNodeDatum & Omit<Required<INode>, 'cfg'> & { cfg: INodeCfg };

export interface IRenderLink extends Omit<IRenderNode, 'cfg'> {
  source: Required<IRenderNode>;
  target: Required<IRenderNode>;
  _offsetMultiple: number;
  cfg: ILinkCfg;
}

export interface IRenderData {
  nodes: IRenderNode[];
  links: IRenderLink[];
}
export interface ILayoutForceOption {
  chargeStrength: number;
  collideStrength: number;
  width: number;
  height: number;
  linkDistance: number;
  static?: boolean;
}

// 坐标点
export interface IPoint {
  x: number;
  y: number;
}

// 传入的 Node 类型
export interface INode {
  id: string;
  name: string;
  cfg?: Partial<INodeCfg>;
}

// 传入的 Link 类型
export interface ILink {
  id: string;
  source: string;
  target: string;
  name: string;
  _offsetMultiple?: number;
  cfg?: Partial<ILinkCfg>;
}

export interface IForceData {
  nodes: INode[];
  links: ILink[];
}

export interface INodeCfg {
  radius: number;
  label: ILabel;
  backgroundColor: string;
}

export interface ILinkCfg {
  label: Omit<ILabel, 'borderRadius'>;
  curveOffset: number;
  shape: 'line' | 'arc' | 'self';
  stroke: string;
}

export interface ILabel {
  width: number;
  fontSize: number;
  fontWeight: string;
  fontFamily: string;
  color: string;
  backgroundColor: string;
  borderRadius: number;
}

export interface IOption {
  node?: INodeCfg;
  link?: ILinkCfg;
  layout: Partial<ILayoutForceOption>;
}

// self 表示指向自己的特殊连线
export enum ELinkShape {
  Line = 'line',
  Arc = 'arc',
  Self = 'self',
}

export type ICollector = IArcCollector | IPolygonCollector;

export interface IArcCollector {
  shape: ECollectorShape.Arc | ECollectorShape.Circle;
  type: ECollectorType;
  model: { x: number; y: number; r: number; startAngle?: number; endAngle?: number };
  data: IRenderNode | IRenderLink;
}

export interface IPolygonCollector {
  shape: ECollectorShape.Polygon | ECollectorShape.Rect;
  type: ECollectorType;
  model: { points: IPoint[] };
  data: IRenderNode | IRenderLink;
}

export enum ECollectorType {
  LinkLabel = 'linkLabel',
  NodeLabel = 'nodeLabel',
  Node = 'node',
  Link = 'link',
}

export enum ECollectorShape {
  Arc = 'arc',
  Circle = 'circle',
  Rect = 'rect',
  Polygon = 'polygon',
}

export interface INodeDragEvent {
  data: IRenderNode;
  type: 'dragstart' | 'dragging' | 'dragend';
}
