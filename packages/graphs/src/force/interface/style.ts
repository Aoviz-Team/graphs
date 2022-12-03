export interface ILinkStyle {
  color: string;
  width?: number;
  type?: 'solid' | 'dashed' | Array<number>;
  dashOffset?: number;
  cap?: 'butt' | 'round' | 'square';
  join?: 'bevel' | 'round' | 'miter';
  miterLimit?: number;
  shadowBlur?: number;
  shadowColor?: string;
  shadowOffsetX: number;
  shadowOffsetY: number;
  curve?: number;
}

export interface INodeStyle {
  color?: string;
  borderColor?: string;
  borderWidth?: number;
  borderType?: 'solid' | 'dashed' | Array<number>;
  borderDashOffset?: number;
  borderCap?: 'butt' | 'round' | 'square';
  borderJoin?: 'bevel' | 'round' | 'miter';
  borderMiterLimit?: number;
  shadowBlur?: number;
  shadowColor?: string;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  //   opacity?: number;
}

export interface ILabelStyle {
  width: number;
  fontSize: number;
  fontWeight: string;
  fontFamily: string;
  color: string;
  backgroundColor: string;
  borderRadius: number;
}
