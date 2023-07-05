// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@pinia/nuxt'],
  css: ['~/assets/css/tailwind.css'],
  typescript: {
    typeCheck: true
  },
  pinia: {
    autoImports: ['defineStore', ['defineStore', 'definePiniaStore']]
  },
  nitro: {
    plugins: []
  },
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:5005'
    }
  },
  plugins: [],
  imports: {
    // autoImport: false
  },
  build: { transpile: ['yup', 'lodash', '@vee-validate/rules'] },
  proxy: {
    // 要捕獲的根路由
    '/api': {
      target: 'http://inkedsoul.rocket-coding.com',
      changeOrigin: true
    }
  }
})
