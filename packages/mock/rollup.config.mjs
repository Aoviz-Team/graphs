import config from '../../rollup.config.js';
import json from '@rollup/plugin-json';
const plugins = [config.plugins, json()];
export default {
  ...config,
  plugins
};
