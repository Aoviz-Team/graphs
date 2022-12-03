import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { uglify } from 'rollup-plugin-uglify';
import del from 'rollup-plugin-delete';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs'
    },
    {
      preserveModules: true,
      preserveModulesRoot: 'src',
      dir: 'es/',
      format: 'esm'
    }
  ],
  plugins: [peerDepsExternal({ useTsconfigDeclarationDir: true }), del({ targets: ['dist/*', 'es/*'] }), uglify(), typescript()]
};
