/**
 * AnointedCoder ESLint config for Next.js apps.
 * Layered on top of the base config plus Next core-web-vitals.
 */
module.exports = {
  extends: ['./index.js', 'next/core-web-vitals', 'plugin:@typescript-eslint/recommended'],
  settings: {
    'import/core-modules': ['server-only', 'client-only'],
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/no-unresolved': ['error', { ignore: ['^server-only$', '^client-only$', '^next/.*$'] }],
  },
};
