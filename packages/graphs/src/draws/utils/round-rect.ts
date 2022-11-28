/**
 * 绘制带圆角的矩形
 */
export function roundRect(context: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  const min_size = Math.min(w, h);
  let _r = 0;
  if (r > min_size / 2) _r = min_size / 2;
  // 开始绘制
  context.beginPath();
  context.moveTo(x + _r, y);
  context.arcTo(x + w, y, x + w, y + h, _r);
  context.arcTo(x + w, y + h, x, y + h, _r);
  context.arcTo(x, y + h, x, y, _r);
  context.arcTo(x, y, x + w, y, _r);
  context.closePath();
}
