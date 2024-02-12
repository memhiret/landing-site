export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/global.css', '~/assets/css/button.css', '~/assets/css/mytabs.css'],
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