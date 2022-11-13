/**
 * 文本超出超度显示省略号计算，使用二分法
 */
export function getEllipsisText(context: CanvasRenderingContext2D, text: string, width: number) {
  if (context.measureText(text).width <= width) return text;
  let left = 0,
    right = text.length;
  while (left <= right) {
    const middle = left + ((right - left) >> 1);
    if (context.measureText(text.slice(0, middle + 1)).width > width) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return text.slice(0, right + 1) + '...';
}
