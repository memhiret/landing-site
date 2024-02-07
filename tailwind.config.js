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
    extend: {},
  },
  plugins: [],
}

