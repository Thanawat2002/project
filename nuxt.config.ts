// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: false,
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      titlePage: process.env.NUXT_ENV_TITLE_PAGE,
      baseUrl: process.env.NUXT_ENV_BASE_URL,
      apiUrl: process.env.NUXT_ENV_API_URL
    }
  },
  app: {
    head: {
      title: `${process.env.NUXT_ENV_TITLE_PAGE}`,
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.ico'
        },
        {
          rel: 'stylesheet',
          href: 'https://use.typekit.net/xcw2whg.css'
        }
      ]
    }
  },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', '@nuxt/eslint', '@nuxt/icon'],
})