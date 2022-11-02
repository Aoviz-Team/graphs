import { forceSimulation, forceManyBody, forceCollide, Simulation, forceX, forceY, forceCenter, forceLink } from 'd3';
import { difference, find, isFunction } from 'lodash-es';
import { BehaviorSubject } from 'rxjs';
import { IForceData, IForceLink, ILayoutOption, IRenderData, IRenderLink, IRenderNode, ISafeAny } from '../interface';

const forces = [
  { force: 'n-body', strength: -1600, distanceMin: 30 },
  { force: 'collide', strength: 0.5, radius: (d: ISafeAny, c, v) => d.cfg?.radius || 20, iterations: 1 },
  { force: 'link', id: (d) => d.id, distance: 200 },
  { force: 'x', strength: 0.1 },
  { force: 'y', strength: 0.1 },
  { force: 'center' }
];
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
    const { width, height } = this.option;
    const collect: string[] = [];
    for (const p of FORCE_PARAMS) {
      if (p !== 'forces' && this.option[p]) this.simulation[p](this.option[p]);
    }
    for (const _ of forces) {
      if (!FORCE_MAP[_.force]) continue;
      const f = FORCE_MAP[_.force]();
      for (const p in _) {
        if (isFunction(f[p])) f[p](isFunction(_[p]) ? (...d) => _[p](...d, _, this.option) : _[p]);
      }
      if (_.force === 'x' && !_['x']) f.x(width / 2);
      if (_.force === 'y' && !_['y']) f.y(height / 2);
      if (_.force === 'center') {
        if (!_['x']) f.x(width / 2);
        if (!_['y']) f.y(height / 2);
      }
      collect.push(_.force);
      this.simulation.force(_.force, f);
    }
    for (const _ of difference(FORCE_KEYS, collect) as any) {
      this.simulation.force(_.force, null);
    }
  }

  load(data?: IForceData) {
    this.data = (data || this.data) as unknown as IRenderData;
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
}
