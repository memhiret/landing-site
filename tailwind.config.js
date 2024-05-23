/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "",
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
      display: ["Bauhaus"],
      body: ["AvenirNext"],
    },
    screens: {
      mobm: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      spacing: {
        22: "5.5rem",
      },
      fontSize: {
        "2xs": "0.65rem",
        "3xs": "0.55rem",
        "10xl": "12rem",
        "12xl": "16rem",
        "13xl": "18rem",
        "14xl": "20rem",
        "16xl": "24rem",
        "20xl": "32rem",
      },
      colors: {
        grokBlue: {
          500: "#153d59",
          700: "#1b3e98",
        },
        grokWhite: {
          500: "#F8F9F5",
        },
        grokBlack: {
          300: "#1E1E1E",
          500: "#1E2328",
        },
        grokYellow: {
          500: "#f2b41c",
        },
      },
    },
  },
  plugins: [require("tailwind-hamburgers"), require("tailwindcss-animate")],
};
