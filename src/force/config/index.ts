import { IOption, ISafeAny } from '../interface';

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
    static: false,
    alpha: 0.3,
    velocityDecay: 0.15,
    forces: [
      { force: 'n-body', strength: -1600, distanceMin: 30 },
      { force: 'collide', strength: 0.5, radius: (d: ISafeAny) => d.cfg?.radius || 20, iterations: 1 },
      { force: 'link', id: d => d.id, distance: 200 },
      { force: 'x', strength: 0.1 },
      { force: 'y', strength: 0.1 },
      { force: 'center' }
    ]
  },
};
