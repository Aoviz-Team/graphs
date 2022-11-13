import { IPoint, IRenderNode } from 'src/force';
import { getRectPointsByCenterPoint } from '../force/utils/math';
import { getEllipsisText } from './utils/ellipsis-text';
import { roundRect } from './utils/round-rect';

export function roundRectBgLabel(ctx: CanvasRenderingContext2D, point: IPoint, node: IRenderNode) {
  const { cfg } = node;
  ctx.font = `${cfg.label.fontSize}px ${cfg.label.fontWeight} ${cfg.label.fontFamily}`;
  const text = getEllipsisText(ctx, node.name, cfg.label.width);
  const textWidth = ctx.measureText(text).width + 2;
  const bgHight = cfg.label.fontSize + 2;
  const bgWidth = textWidth + bgHight;
  const points = getRectPointsByCenterPoint(point, bgWidth, bgHight);
  roundRect(ctx, points[0].x, points[0].y, bgWidth, bgHight, cfg.label.borderRadius);
  ctx.fillStyle = cfg.label.backgroundColor;
  ctx.fill();
  ctx.fillStyle = cfg.label.color;
  ctx.fillText(text, point.x, point.y, textWidth);
}
