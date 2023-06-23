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

  const uploadTattoo = async () => {
    const artistID = '123'
    const { data, error } = await useFetch(`http://localhost:5005/artist/design/${artistID}`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: uploadTattooData.value // 待確認
    })
    if (data.value) {
      const res = data.value
      if (res.Status === 200) {
        console.log(res.Data)
      }
    } else if (error.value) {
      console.log(error.value)
    }
  }

  // POST API
  return { uploadTattooData, uploadTattoo }
})
