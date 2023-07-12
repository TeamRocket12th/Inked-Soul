const runtimeConfig = useRuntimeConfig()
const APIBASE = runtimeConfig.public.APIBASE

export default defineEventHandler(async () => {
  const data = await $fetch(`${APIBASE}/api/searchartist`, {
    body: {
      City: '',
      Style: '',
      Element: ''
    }
  }).catch((error) => error.data)
  return data
})
