// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Inked Soul',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      charset: 'utf-8',
      link: [{ rel: 'icon', type: 'image/png', href: '/logo-white.png' }]
    }
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@pinia/nuxt', 'dayjs-nuxt'],
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
