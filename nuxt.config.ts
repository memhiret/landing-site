export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/global.css', '~/assets/css/button.css'],
  modules: ['nuxt-svgo'],
  svgo: {
    autoImportPath: './assets/svgs/'
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
