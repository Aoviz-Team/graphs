import { isArray, isNumber } from 'lodash-es';
import { ILinkStyle } from '../force';

export function drawLinkStyle(ctx: CanvasRenderingContext2D, style: ILinkStyle, scale = 1) {
  const {
    color,
    width,
    type,
    dashOffset,
    cap = 'butt',
    join = 'bevel',
    miterLimit = 10,
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
  ctx.miterLimit = miterLimit;
  ctx.lineJoin = join;
  ctx.lineCap = cap;
  if (isNumber(dashOffset)) ctx.lineDashOffset = dashOffset;
  if (type === 'dashed') {
    const v = width || 1;
    ctx.setLineDash([v, v]);
  }
  if (isArray(type)) ctx.setLineDash(type);
  if (width) ctx.lineWidth = width;
  if (color) {
    ctx.strokeStyle = color;
    ctx.stroke();
  }
  ctx.restore();
}
