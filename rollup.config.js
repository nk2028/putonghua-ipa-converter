import ts from "@wessberg/rollup-plugin-ts";
import { uglify } from "rollup-plugin-uglify";

export default {
  input: 'src/index.ts',
  output: {
    file: 'index.js',
    format: 'iife',
    name: 'PutonghuaIPAConverter',
  },
  plugins: [
    ts(),
    uglify(),
  ]
};
