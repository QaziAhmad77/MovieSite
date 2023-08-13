/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        sm: '375px',
        sml: '500px',
        md: '667px',
        mdl: '900px',
        lgl: '1024px',
        xl: '1280px',
      },
      colors: {
        bodyColor: '#212428',
        lightText: '#c4cfde',
        searchBg: '#edeffb',
      },
    },
  },
  plugins: [],
};
