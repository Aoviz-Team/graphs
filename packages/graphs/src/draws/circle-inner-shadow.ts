/**
 * 圆形内阴影（边框+阴影，再把边框和外阴影裁剪掉）
 * @param ctx
 * @param x
 * @param y
 * @param r
 * @param shadowColor  阴影颜色
 * @param shadowBlur 模糊级别，越大越模糊，阴影范围也越大。
 * @param lineWidth 边框越大，阴影越清晰
 */
export function circleInnerShadow(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number,
  shadowColor = '#000',
  shadowBlur = r / 2,
  lineWidth = 1
) {
  ctx.save();
  ctx.beginPath();

  // 裁剪区(只保留内部阴影部分)
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.clip();

  // 边框+阴影
  ctx.beginPath();
  ctx.lineWidth = lineWidth;
  ctx.shadowColor = shadowColor;
  ctx.shadowBlur = shadowBlur;
  // 因线是由坐标位置向两则画的，所以半径加上线宽的一半。同时又因为线有毛边，所以半径再多加1px，处理毛边。
  ctx.arc(x, y, r + lineWidth / 2 + 1, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.restore();
}
