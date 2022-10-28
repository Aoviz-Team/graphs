import { IOption, IRenderData } from "../interface";

interface IItem {
    text: string;
    color: string;
    _text: string; // 渲染使用的文本
    disabled: string; // 禁用状态，为 true 时该图例对应的数据隐藏。
}
export class Legend {
    context: CanvasRenderingContext2D
    option: IOption
    data: IRenderData = { nodes: [], links: [] }
    items: IItem[] = []
    constructor(context: CanvasRenderingContext2D, option: IOption) {
        this.context = context
        this.option = option
    }

    setOption(option: IOption) {
        this.option = option
    }

    setData(data: IRenderData) {
        this.data = data;
        const itemHash = data.nodes.reduce((prev, curr) => {
            if (prev[curr.category]) {
                prev[curr.category] = { text: curr.category, color: curr.cfg.backgroundColor, disabled: false }
            }
            return prev
        }, {})
        this.items = Object.values(itemHash)
    }

    draw() {

    }
}