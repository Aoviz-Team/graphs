import { isArray, isNumber } from 'lodash-es';
import { INodeStyle } from '../force';

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
    shadowColor,
    shadowBlur,
    shadowOffsetX,
    shadowOffsetY
  } = style;
  ctx.save();
  if (isNumber(shadowOffsetY)) ctx.shadowOffsetY = shadowOffsetY;
  if (isNumber(shadowOffsetX)) ctx.shadowOffsetX = shadowOffsetX;
  if (isNumber(shadowBlur)) ctx.shadowBlur = shadowBlur * scale;
  if (shadowColor) ctx.shadowColor = shadowColor;
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
