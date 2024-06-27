module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint-config-airbnb-base'
  ],
  plugins: ['@stylistic/js'],
  rules: {
    '@stylistic/js/semi-style': ['error', 'last'],
    'comma-dangle': 0,
    'no-shadow': 'off',
    'no-plusplus': 'off',
    'class-methods-use-this': 'off',
    'no-unused-vars': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
  },
  globals: {
    JSX: true
  }
};
