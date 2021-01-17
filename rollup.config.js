import ts from "@wessberg/rollup-plugin-ts";
import { terser } from "rollup-plugin-terser";

export default {
  input: 'src/index.ts',
  output: {
    file: 'index.js',
    format: 'iife',
    name: 'PutonghuaIPAConverter',
  },
  plugins: [
    ts(),
    terser(),
  ]
};
