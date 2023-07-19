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
  const allImg = ref()
  const allAlbum = ref()
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
  // 上傳認領圖
  const response = ref()
  const show = ref(false)
  const uploadTattoo = async () => {
    show.value = true
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
      response.value = data.value.Status
      artistGetTattooData()
    } catch (error) {
      console.log('上傳錯誤', error)
    }
  }

  // 刺青師後台取得認領圖
  const artistGetTattooData = (sold, page) => {
    const bodyObject = {
      page: page
    }
    if (sold !== '') {
      bodyObject.IsSoldout = sold
    }

    nextTick(async () => {
      const { data, error } = await useFetch(`${APIBASE}/api/artistgetallimg`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${authToken.value}`
        },
        body: bodyObject
      })

      if (data) {
        console.log('刺青師取得認領圖資料', data.value)
        allImg.value = data.value.Data
        console.log('allImg', allImg)
      } else if (error) {
        console.log(error)
      }
    })
  }

  // 刺青師後台取得作品集
  const getAlbumn = (ID, page) => {
    nextTick(async () => {
      const { data } = await useFetch(`${APIBASE}/api/getartistallalbum`, {
        method: 'POST',
        query: {
          artistId: ID,
          page: page
        }
      })
      console.log('取得刺青師所有作品集', data)
      allAlbum.value = data.value.Data
    })
  }

  // 上傳作品集
  const uploadAlbumData = ref({
    image: '',
    picdescription: ''
  })
  const albumnKey = {}
  const albumData = new FormData()
  const res = ref()
  const selectAlbum = () => {
    for (const key in uploadAlbumData.value) {
      albumnKey[key] = uploadAlbumData.value[key]
      albumData.append(key, uploadAlbumData.value[key])
    }
  }
  const uploadAlbum = () => {
    selectAlbum()
    nextTick(async () => {
      const { data } = await useFetch(`${APIBASE}/api/uploadalbum`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${authToken.value}`
        },
        body: albumData
      })
      console.log('成功上傳作品集', data)
      res.value = data.value.Status
    })
  }
  return {
    uploadTattooData,
    allImg,
    allAlbum,
    uploadAlbumData,
    response,
    res,
    show,
    uploadTattoo,
    artistGetTattooData,
    getAlbumn,
    uploadAlbum
  }
})
