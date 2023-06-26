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

  const cookie = useCookie('token')
  const artistID = cookie.value.data.ID // 對應刺青師ID

  const uploadTattoo = async () => {
    const { data, error } = await useFetch(`http://localhost:5005/artist/design/${artistID}`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: uploadTattooData.value // 待確認
    })
    if (data.value) {
      const res = data.value
      if (res.Status === 200) {
        console.log(res.Data)
        getTattooData()
      }
    } else if (error.value) {
      console.log(error.value)
    }
  }

  const getTattooData = async () => {
    const { data, error } = await useFetch(`http://localhost:5005/artist/design/${artistID}`)
    if (data) {
      console.log('res', data.value) // data.value.Data
      return data.value
      if (res.Status === 200) {
        console.log(res.Data)
      }
    } else if (error) {
      console.log(error)
    }
  }

  // POST API
  return { uploadTattooData, uploadTattoo, getTattooData }
})
