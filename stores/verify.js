export const useVerify = defineStore('verify', () => {
  const runtimeConfig = useRuntimeConfig()
  const APIBASE = runtimeConfig.public.APIBASE

  const formData = new FormData()
  const verifyUserData = ref({
    Photo: '',
    ArtistName: '',
    StudioName: '',
    License: '',
    Address: '',
    Tel: ''
  })

  const postVerifyData = async () => {
    for (const key in verifyUserData) {
      formData.append('key', verifyUserData.value[key])
    }

    // 發送驗證資料
    await $fetch(`${APIBASE}/api`, { method: 'POST' })
  }

  return { verifyUserData, postVerifyData }
})
