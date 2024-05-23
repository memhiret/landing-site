export default defineNuxtConfig({
  app: {
    head: {
      title: "MemhirET",
      meta: [
        {
          name: "description",
          content: "Personalized Test-Prep Paths and Study Guides.",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { property: "og:title", content: "MemhirET" },
        {
          property: "og:description",
          content: "Personalized Test-Prep Paths and Study Guides.",
        },
        { property: "og:url", content: "https://memhiret.com" },
        { property: "og:type", content: "website" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: "/android-chrome-192x192.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "512x512",
          href: "/android-chrome-512x512.png",
        },
      ],
    },
  },
  devtools: { enabled: true },
  css: [
    "~/assets/css/global.css",
    "~/assets/css/button.css",
    "~/assets/css/mytabs.css",
  ],
  modules: ["nuxt-svgo", "@nuxt/content", "@nuxt/image"],
  svgo: {
    autoImportPath: "./assets/svgs/",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
  ssr: true,
});
