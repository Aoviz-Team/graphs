import { forceSimulation, forceManyBody, forceCollide, Simulation, forceX, forceY, forceCenter, forceLink } from 'd3';
import { cloneDeep, difference, find, isFunction, merge } from 'lodash-es';
import { BehaviorSubject } from 'rxjs';
import { IForceData, IForceLink, ILayoutOption, IRenderData, IRenderLink, IRenderNode } from '../interface';
import { mergeRenderData } from '../utils';

const FORCE_MAP = {
  center: forceCenter,
  collide: forceCollide,
  'n-body': forceManyBody,
  link: forceLink,
  x: forceX,
  y: forceY
};

const FORCE_KEYS = Object.keys(FORCE_MAP);
const FORCE_PARAMS = ['alpha', 'alphaMin', 'alphaTarget', 'velocityDecay', 'forces'];
export class ForceLayout {
  simulation: Simulation<IRenderNode, IRenderLink> = forceSimulation();
  data: IRenderData = { nodes: [], links: [] };
  option: ILayoutOption;
  tick$ = new BehaviorSubject<IRenderData>({ nodes: [], links: [] });

  get nodes() {
    return this.data.nodes || [];
  }

  set nodes(nodes: IRenderNode[]) {
    this.data.nodes = nodes;
  }

  get links() {
    return this.data.links || [];
  }

  set links(links: IRenderLink[]) {
    this.data.links = links;
  }
  constructor(option: ILayoutOption, data?: IRenderData) {
    this.data = data || this.data;
    this.option = option;
    this.onTick();
    this.setup();
    this.load();
  }

  onTick() {
    this.simulation.on('tick', () => {
      this.tick$.next(this.data);
    });
  }

  setup() {
    const { width, height, forces = [] } = this.option;
    const collect: string[] = [];
    for (const p of FORCE_PARAMS) {
      if (p !== 'forces' && this.option[p]) this.simulation[p](this.option[p]);
    }
    for (const _ of forces) {
      if (!FORCE_MAP[_.force]) continue;
      const f = FORCE_MAP[_.force as string]();
      for (const p in _) {
        if (isFunction(f[p])) f[p](isFunction(_[p]) ? (...d) => _[p](...d, _, this.option) : _[p]);
      }
      if (_.force === 'x' && !_['x']) f.x(width! / 2);
      if (_.force === 'y' && !_['y']) f.y(height! / 2);
      if (_.force === 'center') {
        if (!_['x']) f.x(width! / 2);
        if (!_['y']) f.y(height! / 2);
      }
      collect.push(_.force);
      this.simulation.force(_.force, f);
    }
    for (const _ of difference(FORCE_KEYS, collect) as any) {
      this.simulation.force(_.force, null);
    }
  }

  load(data?: IForceData) {
    this.data = (mergeRenderData(data, this.data) || this.data) as unknown as IRenderData;
    const _ = (find(this.option.forces, { force: 'link' }) as IForceLink) || { force: 'link' };
    const f = FORCE_MAP[_.force](this.links);
    for (const p in _) {
      if (isFunction(f[p])) f[p](isFunction(_[p]) ? (...d) => _[p](...d, _, this.option) : _[p]);
    }
    this.simulation.nodes(this.nodes).force('links', f);
    this.simulation.alpha(this.option.alpha || 0.3).stop();
    if (this.option.static) {
      for (let i = 0, n = Math.ceil(Math.log(this.simulation.alphaMin()) / Math.log(1 - this.simulation.alphaDecay())); i < n; ++i) {
        this.simulation.tick();
      }
      this.tick$.next(this.data);
    } else {
      this.simulation.restart();
    }
  }

  setOption(option: ILayoutOption, data?: IForceData) {
    this.option = merge(cloneDeep(this.option), option);
    this.simulation.stop();
    this.setup();
    this.load(data);
  }
}
