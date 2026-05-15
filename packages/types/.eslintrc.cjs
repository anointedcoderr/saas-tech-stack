module.exports = {
  root: true,
  extends: ['@anointedcoder/eslint-config/library.js'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
