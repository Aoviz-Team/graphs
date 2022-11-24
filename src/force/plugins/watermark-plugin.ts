import { Plugin } from './plugin';

import { isString, merge } from 'lodash-es';

const FONT_PADDING = [50, 50, 50, 50];
const FONT_SIZE = 22;
const FONT_ROTATE = -30;
const FONT_COLOR = 'rgba(179, 179, 255, 0.1)';
const FONT_FAMILY = 'Helvetica Neue';

const FONT_STYLE = {
  rotate: FONT_ROTATE,
  padding: FONT_PADDING,
  size: FONT_SIZE,
  color: FONT_COLOR,
  family: FONT_FAMILY
};

export type ICanvasFontPadding = [number, number, number, number];

export interface ICanvasFontStyle {
  rotate?: number;
  padding?: ICanvasFontPadding;
  size?: number;
  family?: string;
  color?: string;
}
export function generateText(value: string, style: Partial<ICanvasFontStyle> = {}) {
  const fontStyle = merge({ ...FONT_STYLE }, style);
  const radian = (fontStyle.rotate * Math.PI) / 180;
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d')!;
  ctx.font = `${fontStyle.size}px ${fontStyle.family}`;
  const textMeasured = ctx.measureText(value);
  const width = Math.cos(Math.abs(radian)) * textMeasured.width + fontStyle.size * Math.sin(Math.abs(radian));
  const height = Math.sin(Math.abs(radian)) * textMeasured.width + fontStyle.size * Math.cos(Math.abs(radian));
  canvas.width = width + fontStyle.padding[1] + fontStyle.padding[3];
  canvas.height = height + fontStyle.padding[0] + fontStyle.padding[2];
  const centerPoint = { x: fontStyle.padding[1] + width / 2, y: fontStyle.padding[0] + height / 2 };
  ctx.save();
  ctx.translate(centerPoint.x, centerPoint.y);
  ctx.rotate(radian);
  ctx.font = `${fontStyle.size}px ${fontStyle.family}`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = fontStyle.color;
  ctx.fillText(value, 0, 0);
  ctx.restore();
  return canvas;
}

interface IWaterMarkOption extends ICanvasFontStyle {
  value: string;
}
export class WatermarkPlugin extends Plugin {
  option: IWaterMarkOption;
  constructor(option: IWaterMarkOption) {
    super();
    this.option = option;
  }
  beforeDraw(context: CanvasRenderingContext2D): void {
    if (!isString(this.option.value)) return;
    const pattern = context.createPattern(generateText(this.option.value, this.option), 'repeat')!;
    context.fillStyle = pattern;
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  }
}
