import type { Config } from 'tailwindcss';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const uiPreset = require('@anointedcoder/ui/tailwind-preset');

const config: Config = {
  presets: [uiPreset],
  content: ['./src/**/*.{ts,tsx,mdx}', '../../packages/ui/src/**/*.{ts,tsx}'],
};

export default config;
