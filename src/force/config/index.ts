import { IOption } from '../interface';

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
    chargeStrength: -1600,
    collideStrength: 0.5,
    linkDistance: 300,
  },
};
