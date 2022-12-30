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
  FisheyePlugin,
  SelectedNodesPlugin,

} from '../packages/graphs/src';
import { ThreeScenePlugin } from  '../packages/g-plugins/src/cores/three-scene-plugin'
import { GorgeousNodePlugin } from  '../packages/g-plugins/src/cores/gorgeous-node-plugin'
import { randomRadial, DEFAULT_DATA, ONE_DEGREE_BANK_DATA, TWO_DEGREE_BANK_DATA, THREE_DEGREE_BANK_DATA, GORGEOUS_DATA } from '../packages/mock/src/index.ts';
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
      { force: 'n-body', strength: -1600, distanceMin: 30, distanceMax: 800 },
      { force: 'collide', strength: 0.5, radius: (d: any) => d.cfg?.radius || 20, iterations: 1 },
      { force: 'link', id: (d) => d.id, distance: 200 },
      { force: 'x',  strength: 0.1 },
      { force: 'y', strength: 0.1  },
      { force: 'center', strength: 0.1 }
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
    c.beginPath();
    circleInnerShadow(c, n.x!, n.y!, n.cfg.radius, n.cfg.color, 20, 20);
    roundRectBgLabel(c, { x: n.x!, y: n.y! + n.cfg.radius + 10 }, n);
  }
}
function Viz({ watermark, custom, brushSelect, fisheye, three, gorgeous }: Record<string, boolean>) {
  const wrapper = useRef<HTMLDivElement>(null);
  const [option, setOption] = useState(OPTION);
  const instanceRef = useRef<Force<IForceData>>(null);

  useEffect(() => {
    const D = randomRadial();
    instanceRef.current = new Force(wrapper.current!, { data: GORGEOUS_DATA, option });
    const plugins: any[] = [];
    if (watermark) {
      plugins.push(new WatermarkPlugin({ value: 'aoviz' }));
    }
    if (custom) {
      plugins.push(new CustomPlugin());
    }
    if (brushSelect) {
      plugins.push(new SelectedNodesPlugin(), new BrushSelectPlugin());
    }
    if (fisheye) {
      plugins.push(new FisheyePlugin());
    }
    if (three) {
      plugins.push(new ThreeScenePlugin());
    }

    if (gorgeous) {
      plugins.push(new GorgeousNodePlugin())
    }
    instanceRef.current.setPlugins(plugins);
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

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: '基础使用/插件配置',
  component: Viz
};

export const Default = () => <Viz />;
export const Custom = () => <Viz custom />;
export const Watermark = () => <Viz watermark />;
export const BrushSelect = () => <Viz brushSelect />;
export const Fisheye = () => <Viz fisheye />;
export const Three = () => <Viz three />;
export const Gorgeous = ()=> <Viz gorgeous/>
