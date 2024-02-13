export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  css: ['~/assets/css/global.css', '~/assets/css/button.css', '~/assets/css/mytabs.css'],
  modules: ['nuxt-svgo', "@nuxt/content"],
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