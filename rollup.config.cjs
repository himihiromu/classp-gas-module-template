const babel = require('@rollup/plugin-babel');
const gas = require('rollup-plugin-gas');
const nodeResolve = require('@rollup/plugin-node-resolve');
const typescript = require("@rollup/plugin-typescript");
const path = require("path");

module.exports = () => {
  return {
    input: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
      file: path.resolve(__dirname, 'dist', 'index.js'),
      format: 'cjs',
      sourcemap: true,
    },
    plugins: [
      nodeResolve({ jsnext: true }), // node_modulesにあるのもくっつけてくれる
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled'
      }),
      gas(),
      typescript(),
    ],
  }
}