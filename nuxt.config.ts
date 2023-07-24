// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Inked Soul',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      charset: 'utf-8',
      link: [{ rel: 'icon', type: 'image/png', href: '/logo-white.png' }],
      meta: [
        { name: 'keywords', content: 'designs,tattoo' },
        {
          property: 'og:title',
          content: 'Inked Soul 刺青媒合平台'
        },
        {
          property: 'og:image',
          content: '/logo.png'
        },
        {
          property: 'og:description',
          content: '找到最適合你的刺青'
        }
      ]
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
