export const FORCE_INSTANCE_DATA = [
    [{ label: 'data', content: '设置渲染的数据，调用该方法后自动执行布局重绘操作' }, '(d: IForceData) => void', null],
    [{ label: 'setOption', content: '设置配置' }, '(o: IOption) => void', null],
    [{ label: 'setPlugins', content: '注入启用的插件' }, '(p: Plugin[]) => void', null],
    [{ label: 'getZoom', content: '获取当前缩放比例' }, 'number', null],
    [{ label: 'setZoom', content: '设置缩放比例' }, '( z: number) => void', null],
    [{ label: 'resize', content: '调整视图尺寸' }, {label:'(s?: { width: number, height: number } => void)',content: '参数为空时根据当前元素的大小变化'}, null],
    [{ label: 'dispose', content: '销毁所有监听和绘制方法' }, '() => void', null],
    [{ label: 'onNodeClick$', content: '获取节点的 Click 事件' }, 'Observable<IRenderNode>', null],
    [{ label: 'onNodeHover$', content: '获取节点的 Hover 事件' }, 'Observable<IRenderNode | null>', null],
    [{ label: 'onLinkClick$', content: '获取关系的 Click 事件' }, 'Observable<IRenderLink>', null],
    [{ label: 'onLinkHover$', content: '获取关系的 Hover 事件' }, 'Observable<IRenderLink | null>', null],
    [{ label: 'onNodeDrag$', content: '获取节点的 drag 事件' }, 'Observable<INodeDragEvent>', null],
]


export const FORCE_LAYOUT_DATA = [
    [{ label: 'static', content: '生成的布局类型，静态布局或者正常力布局' }, 'boolean', 'false'],
    [{ label: 'alpha', content: '生成的布局类型，静态布局或者正常力布局' }, 'number', '1'],
    [{ label: 'alphaMin', content: '在每次模拟迭代中降低 alpha 值的最小限制' }, 'number', '0.001'],
    [{ label: 'alphaTarget', content: '模拟收敛到的目标 alpha 值' }, 'number', '0'],
    [{ label: 'velocityDecay', content: '在迭代期间施加任何力后，每个节点的速度乘以 1 - velocityDecay' }, 'number', '0.4'],
    [{ label: 'forces', content: '定义要包含在模拟中的力的对象数组，更多配置请看 forces 配置' }, 'IForce[]', '[]'],
]

export const FORCE_LAYOUT_CENTER_DATA = [
    [{ label: 'force', content: '值为 `center`' }, '`center`', '`center`'],
    [{ label: 'x', content: 'x 轴坐标点，默认画布中心（width / 2）' }, 'number', null],
    [{ label: 'y', content: 'y 轴坐标点，默认画布中心（height / 2）' }, 'number', null],
]

export const FORCE_LAYOUT_COLLIDE_DATA = [
    [{ label: 'force', content: '值为 `collide`' }, '`collide`', '`collide`'],
    [{ label: 'radius', content: '节点的 radius 大小' }, 'number | Function', null],
    [{ label: 'strength', content: '力的相对强度' }, 'number', '0.7'],
    [{ label: 'iterations', content: '运行碰撞检测的迭代次数' }, 'number', '1'],
]

export const FORCE_LAYOUT_N_BODY_DATA = [
    [{ label: 'force', content: '值为 n-body' }, '`n-body`', '`n-body`'],
    [{ label: 'theta', content: '用于聚合更多距离力的近似参数' }, 'number', '0.9'],
    [{ label: 'strength', content: '力的相对强度，负值排斥，正值吸引' }, 'number', '-30'],
    [{ label: 'distanceMin', content: '该力作用的最小距离' }, 'number', '1'],
    [{ label: 'distanceMax', content: '该力作用的最大距离' }, 'number', null],
]

export const FORCE_LAYOUT_LINK_DATA = [
    [{ label: 'force', content: '值为 link' }, '`link`', '`link`'],
    [{ label: 'id', content: '' }, 'number | string', null],
    [{ label: 'distance', content: '链接约束应分隔节点的距离' }, 'number | Function', '30'],
    [{ label: 'strength', content: '链接约束的相对强度' }, 'number | Function', null],
    [{ label: 'iterations', content: '运行链接约束的迭代次数' }, 'number', '1'],
]   

export const FORCE_LAYOUT_X_DATA = [
    [{ label: 'force', content: '值为 x' }, '`x`', '`x`'],
    [{ label: 'x', content: '吸引节点的 x 轴坐标' }, 'number | Function', null],
    [{ label: 'strength', content: '力的相对强度' }, 'number', '0.1'],
]

export const FORCE_LAYOUT_Y_DATA = [
    [{ label: 'force', content: '值为 y' }, '`y`', '`y`'],
    [{ label: 'y', content: '吸引节点的 y 轴坐标' }, 'number | Function', null],
    [{ label: 'strength', content: '力的相对强度' }, 'number', '0.1'],
]

export const FORCE_NODE_STYLE_DATA = [
    [{ label: 'color', content: '图形的颜色' }, 'string', '#6EA3FD'],
    [{ label: 'borderColor', content: '图形的描边颜色' }, 'string', null],
    [{ label: 'borderWidth', content: '描边线宽' }, 'number', '1'],
    [{ label: 'borderType', content: '描边类型' }, '`solid` | `dashed` | Array<number>', '`solid`'],
    [{ label: 'borderDashOffset', content: '用于设置虚线的偏移量' }, 'number', null],
    [{ label: 'borderCap', content: '用于指定线段末端的绘制方式' }, '`butt` | `round` | `square`', 'butt'],
    [{ label: 'borderJoin', content: '用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性' }, '`bevel` | `round` | `miter`', '`bevel`'],
    [{ label: 'borderMiterLimit', content: '用于设置斜接面限制比例。只有当 join 为 miter 时， miterLimit 才有效' }, 'number', '10'],
    [{ label: 'shadowBlur', content: '图形阴影的模糊大小' }, 'number', null],
    [{ label: 'shadowColor', content: '阴影颜色' }, 'string', null],
    [{ label: 'shadowOffsetX', content: '阴影水平方向上的偏移距离' }, 'number', null],
    [{ label: 'shadowOffsetY', content: '阴影垂直方向上的偏移距离' }, 'number', null],
]

export const FORCE_LINK_STYLE_DATA = [
    [{ label: 'color', content: '线的颜色' }, 'string', '#9c9b9b'],
    [{ label: 'width', content: '线宽' }, 'number', '1'],
    [{ label: 'type', content: '线的类型' }, '`solid` | `dashed` | Array<number>', 'solid'],
    [{ label: 'dashOffset', content: '用于设置虚线的偏移量' }, 'number', null],
    [{ label: 'cap', content: '用于指定线段末端的绘制方式' }, '`butt` | `round` | `square`', 'butt'],
    [{ label: 'join', content: '用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性' }, '`bevel` | `round` | `miter`', '`bevel`'],
    [{ label: 'miterLimit', content: '用于设置斜接面限制比例。只有当 join 为 miter 时， miterLimit 才有效' }, 'number', '10'],
    [{ label: 'shadowBlur', content: '图形阴影的模糊大小' }, 'number', null],
    [{ label: 'shadowColor', content: '阴影颜色' }, 'string', null],
    [{ label: 'shadowOffsetX', content: '阴影水平方向上的偏移距离' }, 'number', null],
    [{ label: 'shadowOffsetY', content: '阴影垂直方向上的偏移距离' }, 'number', null],
]
  
export const FORCE_LABEL_STYLE_DATA = [
    [{ label: 'width', content: '文本的最大长度，超出会截取' }, 'number', '100'],
    [{ label: 'fontSize', content: '文本的字体大小' }, 'number', '12'],
    [{ label: 'fontWeight', content: '文本的粗细' }, 'string | number', '`normal`'],
    [{ label: 'fontFamily', content: '文本采用的字体' }, 'string', 'sans-serif'],
    [{ label: 'color', content: '文本的颜色' }, 'string', null],
    [{ label: 'backgroundColor', content: '文本的背景颜色' }, 'string', null],
    [{ label: 'borderRadius', content: '背景的圆角大小' }, 'number', '12'],
]

export const FORCE_FISHEYE_PLUGIN_DATA = [
    [{ label: 'keyCombination', content: '触发鱼眼效果的快捷键' }, '`alt` | `ctrl` | `shift`', '[`ctrl`]'],
    [{ label: 'radius', content: '鱼眼的半径大小' }, 'number', '130'],
    [{ label: 'distortion' }, 'number', '5'],
    [{ label: 'smoothing' }, 'number', '0.001']
]

export const FORCE_WATERMARK_PLUGIN_DATA = [
    [{ label: 'value', content: '文本内容' }, 'string', null],
    [{ label: 'rotate', content: '旋转角度' }, 'number', '30'],
    [{ label: 'padding', content: '文本四周的边距' }, '[number, number, number, number]', '[50, 50, 50, 50]'],
    [{ label: 'size', content: '文本的大小' }, 'number', '22'],
    [{ label: 'color', content: '文本的颜色' }, 'string', 'rgba(179, 179, 255, 0.1)'],
    [{ label: 'family', content: '文本的字体' }, 'string', '`Helvetica Neue`'],
]