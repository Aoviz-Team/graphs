import React, { useRef, useEffect, useState } from 'react';
import {
  circleInnerShadow,
  Force,
  IForceData,
  IOption,
  IRenderNode,
  Plugin,
  BrushSelectPlugin,
  WatermarkPlugin,
  roundRectBgLabel,
  FisheyePlugin
} from '../src';
import data from './assets/data';
import './force.css';

const OPTION: DeepPartial<IOption> = {
  node: {
    radius: 28,
    label: {}
  },
  link: {
    label: {
      backgroundColor: 'rgba(51, 51, 51, 0.9)',
      color: '#fff'
    }
  },
  layout: {
    velocityDecay: 0.15,
    forces: [
      { force: 'n-body', strength: -1600, distanceMin: 30 },
      { force: 'collide', strength: 0.5, radius: (d: any) => d.cfg?.radius || 20, iterations: 1 },
      { force: 'link', id: (d) => d.id, distance: 200 },
      { force: 'x', strength: 0.1 },
      { force: 'y', strength: 0.1 },
      { force: 'center' }
    ]
  }
};
class CustomPlugin extends Plugin {
  onClick(e: Event): void {
    console.log(e, 'click');
  }
  onDblclick(e: Event): void {
    console.log(e, 'dblclick');
  }
  overwriteDrawNode(c: CanvasRenderingContext2D, n: IRenderNode) {
    circleInnerShadow(c, n.x!, n.y!, n.cfg.radius, n.cfg.backgroundColor, 20, 20);
    roundRectBgLabel(c, { x: n.x!, y: n.y! + n.cfg.radius + 10 }, n);
  }
}
export default function Viz() {
  const wrapper = useRef<HTMLDivElement>(null);
  const [option, setOption] = useState(OPTION);
  const instanceRef = useRef<Force<IForceData>>(null);

  useEffect(() => {
    instanceRef.current = new Force(wrapper.current!, { data, option });
    instanceRef.current.setPlugins([new CustomPlugin(), new BrushSelectPlugin(), new WatermarkPlugin(), new FisheyePlugin()]);
    instanceRef.current.onSelectedNodes$.subscribe((res) => console.log(res, 'res'));
  }, [wrapper]);

  useEffect(() => {
    instanceRef.current.setOption(option);
  }, [option]);

  return (
    <div className="force-base-container">
      <div className="force-base-canvas" ref={wrapper} style={{ height: 700 }} />
    </div>
  );
}
