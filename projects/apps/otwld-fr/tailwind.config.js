const {createGlobPatternsForDependencies} = require('@nrwl/angular/tailwind');
const {join} = require('path');
const sharedTailwindConfig = require('../../../libs/tailwind-presets/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  presets: [sharedTailwindConfig],
  theme: {
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
    },
    container: {
      screens: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        "2xl": "1200px",
      }
    },
    fontWeight: {
      normal: 400,
      bold: 800,
    },
    plugins: [],
  }
}
