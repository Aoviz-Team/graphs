import { IOption } from '../interface';
export * from './layout';
const DEFAULT_FONT_STYLE = {
  fontSize: 12,
  fontWeight: 'normal',
  fontFamily: 'sans-serif'
};

export const DEFAULT_OPTION: IOption = {
  node: {
    label: {
      width: 120,
      color: 'rgba(255,255,255,1)',
      ...DEFAULT_FONT_STYLE,
      backgroundColor: 'rgba(0,0,0,.65)',
      borderRadius: 12
    },
    color: '#6EA3FD',
    radius: 28
  },
  link: {
    label: {
      width: 100,
      color: 'rgba(0,0,0,.65)',
      ...DEFAULT_FONT_STYLE,
      backgroundColor: '#fff'
    },
    color: '#9c9b9b',
    shape: 'line',
    curveOffset: 22
  },
  layout: {
    static: false,
    alpha: 0.3,
    velocityDecay: 0.15
  }
};
