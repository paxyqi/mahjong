module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vue/base',
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    semi: [
      'error',
      'always']
  }
};
