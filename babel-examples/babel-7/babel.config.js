// https://blog.zfanw.com/babel-js/
// https://babeljs.io/docs/en/v7-migration
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        // modules: 'cjs',
      },
    ],
    // 'es2015',
    // '@babel/preset-stage-2',
    // '@babel/preset-typescript',
  ],
  plugins: [
    // '@babel/runtime',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-transform-template-literals',
    '@babel/plugin-proposal-export-default-from',
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 2,
      },
    ],
    // https://babeljs.io/docs/en/babel-plugin-proposal-export-default-from
    // '@babel/plugin-proposal-export-default-from',
    // https://babeljs.io/docs/en/babel-helper-module-imports
    // '@babel/helper-module-imports',
    // https://www.npmjs.com/package/babel-plugin-add-module-exports
    'add-module-exports',
  ],
  env: {
    production: {
      // plugins: ['transform-es2015-modules-commonjs'],
    },
  },
};
