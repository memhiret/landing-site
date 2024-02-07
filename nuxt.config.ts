export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/global.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
