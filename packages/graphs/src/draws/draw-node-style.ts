import { isArray, isNumber } from 'lodash-es';

interface INodeStyle {
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
export function drawNodeStyle(ctx: CanvasRenderingContext2D, style: INodeStyle, scale = 1) {
  const {
    color,
    borderColor,
    borderWidth,
    borderType,
    borderDashOffset,
    borderCap = 'butt',
    borderJoin = 'bevel',
    borderMiterLimit = 10,
    shadowBlur,
    shadowOffsetX,
    shadowOffsetY
  } = style;
  ctx.save();
  if (isNumber(shadowOffsetY)) ctx.shadowOffsetY = shadowOffsetY;
  if (isNumber(shadowOffsetX)) ctx.shadowOffsetX = shadowOffsetX;
  if (isNumber(shadowBlur)) ctx.shadowBlur = shadowBlur * scale;
  ctx.miterLimit = borderMiterLimit;
  ctx.lineJoin = borderJoin;
  ctx.lineCap = borderCap;
  if (isNumber(borderDashOffset)) ctx.lineDashOffset = borderDashOffset;
  if (borderType === 'dashed') {
    const v = borderWidth || 1;
    ctx.setLineDash([v, v]);
  }
  if (isArray(borderType)) ctx.setLineDash(borderType);
  if (borderWidth) ctx.lineWidth = borderWidth;
  if (borderColor) {
    ctx.strokeStyle = borderColor;
    ctx.stroke();
  }
  if (color) {
    ctx.fillStyle = color;
    ctx.fill();
  }
  ctx.restore();
}
