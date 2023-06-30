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
  }
})
