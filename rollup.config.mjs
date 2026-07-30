import sucrase from '@rollup/plugin-sucrase';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.ts',
  output: {
    file: 'index.js',
    format: 'iife',
    name: 'PutonghuaIPAConverter',
  },
  plugins: [
    sucrase({ transforms: ['typescript'] }),
    terser(),
  ]
};
