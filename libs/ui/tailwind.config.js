const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  safelist: [
    'animation-delay-0.2',
    'animation-delay-0.3',
    'animation-delay-0.4',
    'animation-delay-0.5',
    'animation-delay-0.6',
    'animation-delay-0.7',
    'animation-delay-0.8',
    'animation-delay-0.9',
    'animation-delay-1',
    'animation-delay-1.1',
    'animation-delay-1.2',
  ],
  theme: {
    container: {
      screens: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        '2xl': '1250px',
      },
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '1rem',
        lg: '2rem',
        xl: '2rem',
        '2xl': '2rem',
      },
    },
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    animationDelay: {
      0.2: '0.2s',
      0.3: '0.3s',
      0.4: '0.4s',
      0.5: '0.5s',
      0.6: '0.6s',
      0.7: '0.7s',
      0.8: '0.8s',
      0.9: '0.9s',
      1.0: '1.0s',
      1.1: '1.1s',
      1.2: '1.2s',
    },
    animation: {
      'slide-in-fade-right': 'slide-in-fade-right 1s ease both',
      'slide-in-fade-top': 'slide-in-fade-top 1s ease both',
      'slide-in-fade-left': 'slide-in-fade-left 1s ease both',
      'slide-top':
        'slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
    },
    keyframes: {
      'slide-in-fade-right': {
        '0%': {
          transform: 'translateX(20px)',
          opacity: '0',
        },
        to: {
          transform: 'translateX(0)',
          opacity: '1',
        },
      },
      'slide-in-fade-left': {
        '0%': {
          transform: 'translateX(-20px)',
          opacity: '0',
        },
        to: {
          transform: 'translateX(0)',
          opacity: '1',
        },
      },
      'slide-in-fade-top': {
        '0%': {
          transform: 'translateY(20px)',
          opacity: '0',
        },
        to: {
          transform: 'translateY(0)',
          opacity: '1',
        },
      },
      'slide-top': {
        '0%': {
          transform: 'translateY(0)',
        },
        to: {
          transform: 'translateY(-100px)',
        },
      },
    },
  },
  daisyui: {
    themes: [
      'light',
      'corporate',
      'dark',
      'forest',
      'aqua',
      'luxury',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      {
        default: {
          primary: '#104cba',
          'primary-content': '#ffffff',
          secondary: '#222f5a',
          accent: '#104cba', // ??
          neutral: '#222f5a', // ??
          'neutral-content': '#ffffff',
          'base-100': '#FFFFFF', // ??
          'base-200': '#e5eef6', // ??
          info: '#0095ff',
          'info-focus': '#42aaff',
          success: '#00d68f',
          warning: '#ffaa00',
          error: '#ff3d71',
          // design decisions
          // '--rounded-box': '0.33rem', // border radius rounded-box utility class, used in card and other large boxes
          // '--rounded-btn': '0.33rem', // border radius rounded-btn utility class, used in buttons and similar element
          // '--rounded-badge': '1.9rem', // border radius rounded-badge utility class, used in badges and similar
          // "--animation-btn": "0.25s", // duration of animation when you click on button
          // "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          '--btn-text-case': 'uppercase', // set default text transform for buttons
          // '--btn-focus-scale': '0.95', // scale transform of button when you focus on it
          // '--btn-hover-scale': '0.95', // scale transform of button when you focus on it
          // '--border-btn': '1px', // border width of buttons
          // "--tab-border": "1px", // border width of tabs
          // "--tab-radius": "0.5rem", // border radius of tabs
        },
      },
    ],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
    require('tailwindcss-animation-delay'),
  ],
};
