import { forceSimulation, forceManyBody, forceCollide, Simulation, forceX, forceY, forceCenter, forceLink } from 'd3';
import { BehaviorSubject } from 'rxjs';
import { IForceData, ILayoutForceOption, IRenderData, IRenderLink, IRenderNode, ISafeAny } from '../interface';


export class ForceLayout {
  simulation: Simulation<IRenderNode, IRenderLink> = forceSimulation();
  data: IRenderData = { nodes: [], links: [] };
  option: ILayoutForceOption;
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
  constructor(option: ILayoutForceOption, data?: IRenderData) {
    this.data = data || this.data;
    this.option = option;
    this.onTick();
    this.execute();
    this.load();
  }

  onTick() {
    this.simulation.on('tick', () => {
      this.tick$.next(this.data);
    });
  }

  execute() {
    const { chargeStrength, collideStrength, width, height } = this.option;
    this.simulation
      .force('charge', forceManyBody().strength(chargeStrength).distanceMin(30))
      .force(
        'collide',
        forceCollide()
          .strength(collideStrength)
          .radius((d: ISafeAny) => d.cfg?.radius || 20)
          .iterations(1)
      )
      .force('x', forceX(width / 2))
      .force('y', forceY(height / 2))
      .force('centers', forceCenter(width / 2, height / 2))
      .velocityDecay(0.15);
  }

  load(data?: IForceData) {
    this.data = (data || this.data) as unknown as IRenderData;
    const { linkDistance } = this.option;
    this.simulation.nodes(this.nodes).force(
      'links',
      forceLink<IRenderNode, IRenderLink>(this.links)
        .id((d: ISafeAny) => d.id)
        .distance(linkDistance)
    );
    this.simulation.alpha(0.3).restart();
  }
}
