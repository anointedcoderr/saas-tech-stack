module.exports = {
  root: true,
  extends: ['@anointedcoder/eslint-config/next.js'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  settings: {
    next: { rootDir: __dirname },
  },
};
