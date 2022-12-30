import tinyColor from 'tinycolor2';
import { roundRectBgLabel } from '@aoviz/graphs';
import { ECollectorShape, ECollectorType, ICollector, INode, IRenderData, IRenderNode } from '@aoviz/graphs';
import { Plugin } from '@aoviz/graphs';

function drawCircleRadialGradient(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, color: string, scale = 1) {
	const rColor = tinyColor(color);
	const isLight = rColor.isLight();
	ctx.save();
	ctx.beginPath();
	const gradient = ctx.createRadialGradient(x - r * 0.3, y - r * 0.3, r, x - r * 0.4, y - r * 0.6, 0);
	gradient.addColorStop(0, isLight ? rColor.darken(10).toString() : color); // 如果是亮色，就将颜色加深处理
	gradient.addColorStop(0.69, getColor(color, 20, 10));
	gradient.addColorStop(1, getColor(color, 20, 20));
	ctx.arc(x, y, r, 0, Math.PI * 2);
	ctx.fillStyle = gradient;
	ctx.shadowBlur = (r > 30 ? 30 : r) * scale;
	ctx.shadowColor = getColor(color, 20, 10);
	ctx.fill();
	ctx.restore();
}

function drawCircleBlurMask(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, color: string) {
	ctx.save();
	ctx.arc(x, y, r, 0, 2 * Math.PI);
	ctx.fillStyle = color;
	ctx.filter = 'blur(5px)';
	ctx.fill();
	ctx.restore();
}

// 绘制渐变圆环
export function drawCircularRingGradient(ctx: CanvasRenderingContext2D, _x: number, _y: number, r: number, w: number, rotate: number) {
	ctx.save();
	ctx.translate(_x, _y);
	ctx.rotate(rotate);
	const x = 0;
	const y = 0;
	ctx.beginPath();
	ctx.arc(x, y, r, 0, Math.PI);
	const gradient = ctx.createLinearGradient(x - r, y, x + r, y);
	gradient.addColorStop(0, 'rgba(65,200,235,0.2)');
	gradient.addColorStop(1, '#35DFF8');
	ctx.lineWidth = w;
	ctx.strokeStyle = gradient;
	ctx.stroke();
	ctx.restore();
	ctx.save();
	ctx.translate(_x, _y);
	ctx.rotate(rotate);
	ctx.beginPath();
	ctx.arc(x, y, r, Math.PI, 0);
	const gradient1 = ctx.createLinearGradient(x + r, y, x - r, y);
	gradient1.addColorStop(0, '#35DFF8');
	gradient1.addColorStop(0.3, '#436DFB');
	gradient1.addColorStop(1, 'rgba(65,200,235,0.2)');
	ctx.lineWidth = w;
	ctx.strokeStyle = gradient1;
	ctx.stroke();
	ctx.restore();
}

function drawCircleInnerShadow(
	ctx: CanvasRenderingContext2D,
	x: number,
	y: number,
	r: number,
	shadowColor = '#000',
	shadowBlur = r / 2,
	lineWidth = 1,
	scale = 1
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
	ctx.shadowBlur = shadowBlur * scale;
	// 因线是由坐标位置向两则画的，所以半径加上线宽的一半。同时又因为线有毛边，所以半径再多加1px，处理毛边。
	ctx.arc(x, y, r + lineWidth / 2 + 1, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.restore();
}

function drawCircularRingDashed(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, color: string) {
	// 绘制虚线环
	ctx.beginPath();
	ctx.save();
	ctx.arc(x, y, r, 0, 2 * Math.PI);
	ctx.strokeStyle = color;
	ctx.setLineDash([2, 2]);
	ctx.lineWidth = 1;
	ctx.stroke();
	ctx.restore();
}

// 绘制科技感节点
export function drawGorgeousNode(ctx: CanvasRenderingContext2D, node: IRenderNode, scale = 1) {
	const color = node.cfg.color || tinyColor.random().toString();
	const radius = node.cfg.radius;
	// 绘制径向渐变和 shadow 阴影层
	drawCircleRadialGradient(ctx, node.x!, node.y!, radius - 8, color, scale);
	// 绘制两层层内阴影
	drawCircleInnerShadow(ctx, node.x!, node.y!, radius - 8, getColor(color, 20, 20), radius * 0.3, radius * 0.3, scale);
	drawCircleInnerShadow(ctx, node.x!, node.y!, radius - 8, getColor(color, 30, 20), radius * 0.2, radius * 0.2, scale);
	// 绘制一层浅色阴影
	if (!isSafari()) {
		drawCircleBlurMask(ctx, node.x!, node.y!, radius, tinyColor(color).brighten(20).lighten(20).setAlpha(0.2).toRgbString());
	}
	// 绘制虚线边框
	drawCircularRingDashed(ctx, node.x!, node.y!, radius - 4, getColor(color, 12, 12));
}

function isSafari() {
	return /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
}

function getColor(color: string, brighten: number, lighten: number) {
	const rColor = tinyColor(color);
	const isLight = rColor.isLight();
	return rColor
		.brighten(isLight ? brighten / 1.5 : brighten)
		.lighten(isLight ? lighten / 1.5 : lighten)
		.toRgbString();
}

export class GorgeousNodePlugin extends Plugin {
	collectors: ICollector[] = []
	constructor() {
		super()
	}
	beforeDraw(): void {
		this.collectors = []
	}
	overwriteDrawNode(context: CanvasRenderingContext2D, node: IRenderNode) {
		drawGorgeousNode(context, node, this.transform.k)
		roundRectBgLabel(context, { x: node.x!, y: node.y! + node.cfg.radius + 10 }, node);
		this.collectors.unshift({
			type: ECollectorType.Node,
			shape: ECollectorShape.Circle,
			model: { x: node.x || 0, y: node.y || 0, r: node.cfg.radius },
			data: node
		});
	}
	afterDraw(context: CanvasRenderingContext2D, data: IRenderData): void {
		context.save();
		context.translate(this.transform.x, this.transform.y);
		context.scale(this.transform.k, this.transform.k);
		const selectedNodes = this.getSelectedNodes();
		const selectedNodeHash = selectedNodes.reduce((prev, curr) => {
			prev[curr.id] = curr;
			return prev;
		}, {} as Record<string, INode>);
		data.nodes.forEach((node) => {
			if (selectedNodeHash[node.id]) {
				drawCircularRingGradient(context, node.x!, node.y!, node.cfg.radius, node.cfg.borderWidth || 2, 0)
			}
		});
		context.restore();
		const event  = this.getEvent()
		event.collectors.unshift(...this.collectors)
	}
}