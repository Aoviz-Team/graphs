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
