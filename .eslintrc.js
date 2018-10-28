module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    node: true,
    jest: true,
  },
  extends: 'problems',
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'warn',
  },
};
