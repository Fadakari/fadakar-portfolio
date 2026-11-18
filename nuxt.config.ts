// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  
  modules: [
    '@unocss/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  build: {
    transpile: ['vue-i18n', '@vue/devtools-api']
  },

  site: {
    url: 'https://fadakar-dev.ir', // Replace with the actual domain if different
    name: 'FADAKAR',
    defaultLocale: 'fa'
  },

  runtimeConfig: {
    cockpitApiUrl: process.env.COCKPIT_API_URL || 'https://cms.fadakar-dev.ir/api',
    cockpitApiKey: process.env.COCKPIT_API_KEY || process.env.NUXT_COCKPIT_API_KEY || 'API-aa941dd9ef4b8aca5e553b883725951729be5dd5',
    public: {
      cockpitBaseUrl: process.env.COCKPIT_BASE_URL || 'https://cms.fadakar-dev.ir'
    }
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'fa',
        dir: 'rtl'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'theme-color', content: '#050507' }
      ]
    }
  }
})
