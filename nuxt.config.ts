// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Inked Soul',
      meta: [{ name: 'description', content: '找尋最適合您的刺青' }],
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      charset: 'utf-8',
      link: [{ rel: 'icon', type: 'image/png', href: '/logo-white.png' }]
    }
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@pinia/nuxt', 'dayjs-nuxt', 'nuxt-swiper'],
  css: ['~/assets/css/tailwind.css'],
  typescript: {
    // typeCheck: true
  },
  pinia: {
    autoImports: ['defineStore', ['defineStore', 'definePiniaStore']]
  },
  nitro: {
    plugins: []
  },
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:5005',
      APIBASE: 'https://inkedsoul.rocket-coding.com'
    }
  },
  plugins: [],
  imports: {
    // autoImport: false
  },
  build: { transpile: ['yup', 'lodash', '@vee-validate/rules'] }
})
