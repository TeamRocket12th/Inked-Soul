// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Inked Soul'
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
