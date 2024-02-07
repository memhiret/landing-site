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
    colors: {
      'grokBlue': {
        500: '#2D68FE',
      },
      'grokWhite': {
        500: '#F8F9F5',
      },
      'grokBlack': {
        500: '#1E2328',
      },
      'grokYellow': {
        500: '#FED053',
      },
    },
    fontFamily: {
      display: ["Lora"],
      body: ["DM Sans"]
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1180px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontSize: {
        '2xs': '0.6rem'
      },
    },
  },
  plugins: [require('tailwind-hamburgers')],
}

