/* eslint-disable import/no-commonjs */
module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base', // airbnb without react
    'prettier', // prettier, make sure to put it last, to override other configs
  ],
  overrides: [
    {
      env: { node: true },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: { sourceType: 'script' },
    },
  ],
  parser: '@babel/eslint-parser', // babel parser
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/prefer-default-export': 'off', // don't force default exports
    'import/no-commonjs': 2, // avoid commonjs
    'import/no-default-export': 1, // prefer named exports
  },
};
