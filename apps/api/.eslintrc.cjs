module.exports = {
  root: true,
  extends: ['@anointedcoder/eslint-config/nest.js'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
