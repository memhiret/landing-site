/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      display: ["Lora"],
      body: ["DM Sans"]
    },
    screens: {
      'mobm': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      spacing: {
        '22': '5.5rem'
      },
      fontSize: {
        '2xs': '0.6rem',
        '3xs': '0.5rem',
        '10xl': '12rem',
        '12xl': '16rem',
        '14xl': '20rem',
      },
      colors: {
        'grokBlue': {
          500: '#2D68FE',
          700: '#1b3e98'
        },
        'grokWhite': {
          500: '#F8F9F5',
        },
        'grokBlack': {
          300: '#1E1E1E',
          500: '#1E2328',
        },
        'grokYellow': {
          500: '#FED053',
        },
      }
    },
  },
  plugins: [require('tailwind-hamburgers')],
}

