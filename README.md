### 介绍

aoviz（Art of Visualization），可视化的艺术。

数据可视化这门技术是关于数据视觉表现形式的一门科学技术研究。数据可视化技术是利用计算机图形学与图像处理技术相结合，将数据通过处理转换为图形或图像形式最后显示到屏幕上面，并进行交互处理的理论、方法和技术。它涉及计算机视觉、图像处理、计算机辅助设计、计算机图形学等多个领域，成为一项研究数据表示、数据处理、决策分析等问题的综合技术。

数据可视化是信息和数据的图形化表示方式。通过使用图表、图形和地图等可视化元素，数据可视化工具提供了一种查看和理解数据趋势、异常值和模式的可访问方式。

在大数据世界中，数据可视化工具和技术对于分析海量信息和做出数据驱动的决策至关重要。


# @aoviz/graphs

简洁，轻量，可配置的图渲染组件


### 快速上手

```ts
import { Force } from '@aoviz/graphs';
```

### 以 React 使用为例：

```ts
function Viz() {
  const wrapper = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const instance = new Force(wrapper.current!);
    instance.data(data);
  }, [wrapper]);
  return <div ref={wrapper} style={{ height: 500 }}></div>;
}
```

### 传入的渲染数据类型：

```ts
interface IData {
  nodes: INode[];
  links: ILink[];
}

interface INode {
  id: string;
  name: string;
}

interface ILink {
  id: string;
  source: string;
  target: string;
  name: string;
  cfg?: ILinkCfg;
}

interface INodeCfg {
  radius: number;
  label: ILabel;
  backgroundColor: string;
}

interface ILinkCfg {
  label: Omit<ILabel, 'borderRadius'>;
  curveOffset: number;
  shape: 'line' | 'arc' | 'self';
  stroke: string;
}
```

### 图组件配置数据类型：

```ts
interface IOption {
  node?: INodeCfg;
  link?: ILinkCfg;
  layout: Partial<ILayoutForceOption>;
}

interface ILayoutForceOption {
  chargeStrength: number; // 电荷力强度，为正模拟重力(吸引力)，为负模拟排斥力
  collideStrength: number; // 节点间碰撞强度，范围 [0,1]
  width: number; // 画布宽度，默认父元素宽度
  height: number; // 画布高度，默认传入父元素高度
  linkDistance: number; // 关系的间距
}
```

### 图组件默认配置：

```ts
const DEFAULT_FONT_STYLE = {
  fontSize: 12,
  fontWeight: 'normal',
  fontFamily: 'sans-serif',
};

export const DEFAULT_OPTION: IOption = {
  node: {
    label: {
      width: 120,
      color: 'rgba(255,255,255,1)',
      ...DEFAULT_FONT_STYLE,
      backgroundColor: 'rgba(0,0,0,.65)',
      borderRadius: 12,
    },
    backgroundColor: '#6EA3FD',
    radius: 28,
  },
  link: {
    label: {
      width: 150,
      color: 'rgba(0,0,0,.65)',
      ...DEFAULT_FONT_STYLE,
      backgroundColor: '#fff',
    },
    stroke: '#9c9b9b',
    shape: 'line',
    curveOffset: 22,
  },
  layout: {
    chargeStrength: -1600,
    collideStrength: 0.5,
    linkDistance: 300,
  },
};
```

### ForceInstance

| 名称         | 说明                                             | 类型                              |
| ------------ | ------------------------------------------------ | --------------------------------- |
| data()       | 设置渲染的数据，调用该方法后自动执行布局重绘操作 | `IForceData`                      |
| getZoom()    | 获取当前缩放比例                                 | `number`                          |
| setZoom()    | 设置缩放比例                                     | `number`                          |
| onNodeClick$ | 获取节点的 Click 事件                            | `Observable<IRenderNode>`         |
| onNodeHover$ | 获取节点的 Hover 事件                            | `Observable<IRenderNode \| null>` |
| onLinkClick$ | 获取关系的 Click 事件                            | `Observable<IRenderLink>`         |
| onLinkHover$ | 获取关系的 Hover 事件                            | `Observable<IRenderLink \| null>` |
| onNodeDrag$  | 获取节点的 Click 事件                            | `Observable<INodeDragEvent>`      |

<br/>

> 事件的监听使用了 Rxjs 。了解更多可以前往 [官方文档](https://rxjs.dev/)

> 拖拽事件暴露的类型如下所示：

```ts
interface INodeDragEvent {
  data: IRenderNode;
  type: 'dragstart' | 'dragging' | 'dragend';
}
```

### 在线体验

[简单渲染](https://codesandbox.io/s/sharp-matsumoto-t9wfsx?file=/src/App.js)

[事件支持](https://codesandbox.io/s/angry-wiles-wlvje6?file=/src/App.js:180-186)

### RoadMap

- [x] 图布局和渲染
- [x] 添加事件支持
- [ ] 支持主题和更多的样式配置
- [ ] 支持插件形式，可以自定义控制渲染内容实现
- [ ] 待定...
