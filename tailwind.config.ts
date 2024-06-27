import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/utils/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'border-dark': '#344861',
        'border-light': '#bfc6d4',
        'cell-non-editable': '#344861',
        'cell-error': '#ed6e67',
        'cell-dark-non-editable': '#2F60C9',
        'cell-editable': '#365db0',
        'selected-cell': '#bbdefb',
        'blue-button-hover': '#D9F0FF',
        'red-button-hover': '#D0D0D0',
        'cell-selected': '#b3dffc',
        overlay: 'rgba(0,0,0,0.5)'
      },
      transformOrigin: {
        'top-left-1/2-1/2': '-50% -50%'
      }
    },
  },
  plugins: [],
};
export default config;
