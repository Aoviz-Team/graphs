import config from '../../rollup.config.js';

export default {
  ...config,
  external: [
    '@aoviz/graphs'
  ]
};
