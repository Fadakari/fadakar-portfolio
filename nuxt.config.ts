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

  site: {
    url: 'https://fadakar.dev', // Replace with the actual domain if different
    name: 'FADAKAR',
    defaultLocale: 'fa'
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
