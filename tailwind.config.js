/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{astro,js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['DM Mono', ...defaultTheme.fontFamily.sans],
    },
    screens: {
      'sm': '641px',
      'md': '769px',
      'lg': '1025px',
      'xl': '1281px',
      '2xl': '1537px',
      '3xl': '1601px',
      '4xl': '1921px',
      '5xl': '2561px',
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.75rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
      '9xl': '8rem',
      '10xl': '10rem',
    },
    extend: {},
  },
  plugins: [],
}

