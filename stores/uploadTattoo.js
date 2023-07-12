export const useUploadTattooStore = defineStore('UploadTattoo', () => {
  const uploadTattooData = ref({
    Image: '',
    picname: '',
    picbodypart: '',
    picsize: '',
    picidea: '',
    pichour: '',
    pictotal: '',
    picdeposit: '',
    picbalance: '',
    picstyle: '',
    picelement: ''
  })

  const runtimeConfig = useRuntimeConfig()
  const APIBASE = runtimeConfig.public.APIBASE

  const authToken = useCookie('token')
  const authCookie = useCookie('data')
  const artistID = authCookie.value.Id // 對應刺青師ID

  const formKey = {}
  // 打包成form data
  const formData = new FormData()
  const selectImage = () => {
    for (const key in uploadTattooData.value) {
      formKey[key] = uploadTattooData.value[key]
      formData.append(key, uploadTattooData.value[key])
    }
  }
  // 限制上傳次數
  const postImageLimit = () => {
    // 📌 如果上傳次數 > 5 無法再上傳 (應該在頁面中 run)
    if (authToken.uploadTattooCount > 5) {
      console.log('上傳次數超過限制')
      return false
    }
  }

  const uploadTattoo = async () => {
    selectImage()
    postImageLimit()
    try {
      const { data } = await useFetch(`${APIBASE}/api/uploadimage`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${authToken.value}`
        },
        body: formData
      })
      console.log(data)
    } catch (error) {
      console.log('上傳錯誤', error)
    }
  }

  const getTattooData = async () => {
    const { data, error } = await useFetch(`http://localhost:5005/artist/design/${artistID}`)
    if (data) {
      console.log('res', data.value) // data.value.Data
      return data.value
    } else if (error) {
      console.log(error)
    }
  }

  // POST API
  return { uploadTattooData, uploadTattoo, getTattooData }
})
