export const useUploadTattooStore = defineStore('UploadTattoo', () => {
  const uploadTattooData = ref({
    Image: '',
    Name: '',
    BodyPart: [],
    Size: {
      Height: '',
      Width: ''
    },
    Idea: '',
    Hour: '',
    Payment: {
      Deposit: '',
      Balance: '',
      Total: ''
    },
    Style: [],
    Element: []
  })

  const runtimeConfig = useRuntimeConfig()
  const APIBASE = runtimeConfig.public.APIBASE

  const authToken = useCookie('token')
  const authCookie = useCookie('data')
  const artistID = authCookie.value.Id // 對應刺青師ID

  const uploadTattoo = async () => {
    console.log(uploadTattooData.value)
    // try {
    //   const { data, error } = await useFetch(`${APIBASE}/api/uploadimage`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-type': 'application/json',
    //       Authorization: authToken
    //     },
    //     body: uploadTattooData.value // 待確認
    //   })

    //   if (error.value) {
    //     console.log('err', error.value)
    //   } else {
    //     console.log('data', data.value)
    //   }
    // } catch (error) {
    //   console.log(error)
    // }
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
