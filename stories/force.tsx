import { toNumber } from 'lodash-es';
import React, { useRef, useEffect, useState } from 'react'
import { Force, IForceData, IOption } from '../src'
import data from './assets/data';
import './force.css'
const OPTION: IOption = {
    layout: {
        forces: [
            { force: 'n-body', strength: -1600, distanceMin: 30 },
            { force: 'collide', strength: 0.5, radius: (d: ISafeAny) => d.cfg?.radius || 20, iterations: 1 },
            { force: 'link', id: (d) => d.id, distance: 200 },
            { force: 'x', strength: 0.1 },
            { force: 'y', strength: 0.1 },
            { force: 'center' }
        ]
    }
}
export default function Viz() {
    const wrapper = useRef<HTMLDivElement>(null);
    const [option, setOption] = useState(OPTION)
    const instanceRef = useRef<Force<IForceData>>(null)
    useEffect(() => {
         instanceRef.current = new Force(wrapper.current!, { data, option });
    }, [wrapper]);

    const onNBodyStrength = (e) => {
        option.layout.forces.forEach(element => {
            if (element.force === 'n-body') {
                element.strength = toNumber(e.target.value)
            }
        });
        setOption({ ...option })
    }

    useEffect(() => {
        instanceRef.current.setOption(option)
    }, [option])

    return <div className="force-base-container">
        <div className="force-base-control">
            n-body-strength: <input onChange={onNBodyStrength} type="range" min="-2000" max="100" />
        </div>
        <div className="force-base-canvas" ref={wrapper} style={{ height: 700 }} />
    </div>;
}
