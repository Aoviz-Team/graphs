import { toNumber } from 'lodash-es';
import React, { useRef, useEffect, useState } from 'react';
import { circleInnerShadow, Force, IForceData, IOption, IRenderNode, Plugin } from '../packages/graphs/src';
import data from './assets/data';
import './force.css';

const OPTION: IOption = {
  node: {
    radius: 28
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

export default function Viz() {
  const wrapper = useRef<HTMLDivElement>(null);
  const [option, setOption] = useState(OPTION);
  const instanceRef = useRef<Force<IForceData>>(null);
  useEffect(() => {
    instanceRef.current = new Force(wrapper.current!, { data, option });
  }, [wrapper]);

  const onNBodyStrength = (e) => {
    option.layout.forces.forEach((element) => {
      if (element.force === 'n-body') {
        element.strength = toNumber(e.target.value);
      }
    });
    setOption({ ...option });
  };

  const onLinkDistance = (e) => {
    option.layout.forces.forEach((element) => {
      if (element.force === 'link') {
        element.distance = toNumber(e.target.value);
      }
    });
    setOption({ ...option });
  };

  const onVelocityDecay = (e) => {
    option.layout.velocityDecay = toNumber(e.target.value);
    setOption({ ...option });
  };

  const onStatic = (e) => {
    option.layout.static = e.target.checked;
    setOption({ ...option });
  };

  const onNodeRadius = (e) => {
    option.node.radius = toNumber(e.target.value);
    setOption({ ...option });
  };

  useEffect(() => {
    instanceRef.current.setOption(option);
  }, [option]);
  const bodyStrength = option.layout.forces.filter((f) => f.force === 'n-body')[0].strength;
  const linkDistance = option.layout.forces.filter((f) => f.force === 'link')[0].distance;
  return (
    <div className="force-base-container">
      <div className="force-base-control">
        <div>1.n-body-strength: {bodyStrength}</div>
        <input onChange={onNBodyStrength} type="range" min="-2000" max="100" value={bodyStrength} />
        <div>2.node-radius: {option.node.radius}</div>
        <input onChange={onNodeRadius} type="range" min="10" max="50" value={option.node.radius} />
        <div>3.link-distance: {linkDistance}</div>
        <input onChange={onLinkDistance} type="range" min="80" max="200" value={linkDistance} />
        <div>4.velocity-decay: {option.layout.velocityDecay}</div>
        <input onChange={onVelocityDecay} type="range" min="0" step="0.01" max="1" value={option.layout.velocityDecay} />
        <div>5.static: {option.layout.static ? 'true' : 'false'}</div>
        <input onChange={onStatic} type="checkbox" checked={option.layout.static} />
      </div>
      <div className="force-base-canvas" ref={wrapper} style={{ height: 700 }} />
    </div>
  );
}
