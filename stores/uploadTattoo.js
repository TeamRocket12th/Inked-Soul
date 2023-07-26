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
    picstyle: [],
    picelement: []
  })

  const runtimeConfig = useRuntimeConfig()
  const APIBASE = runtimeConfig.public.APIBASE

  const authToken = useCookie('token')

  const allImg = ref()
  const allImgNum = ref()
  const allAlbum = ref()
  const allAlbumNum = ref()
  const formKey = {}
  // 打包成form data
  const formData = new FormData()
  const selectImage = () => {
    for (const key in uploadTattooData.value) {
      formKey[key] = uploadTattooData.value[key]
      formData.append(key, uploadTattooData.value[key])
    }
  }

  const clearFormData = () => {
    for (const key in uploadTattooData.value) {
      formData.delete(key)
      uploadTattooData.value[key] = ''
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
  const response = ref()
  const showImage = ref(false)
  const closeUpload = ref(false)
  // 上傳認領圖
  const uploadTattoo = async () => {
    selectImage()
    postImageLimit()
    try {
      const res = await $fetch(`${APIBASE}/api/uploadimage`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${authToken.value}`
        },
        body: formData
      })
      console.log('成功上傳認領圖', res)
      response.value = res.Status
      showImage.value = true
      closeUpload.value = true
      artistGetTattooData('', 1)
      clearFormData()
      uploadTattooData.picstyle = []
      uploadTattooData.picelement = []
    } catch (error) {
      clearFormData()
      console.log('上傳錯誤', error)
    }
  }

  // 刺青師後台取得認領圖
  const radio = ref()
  const artistGetTattooData = (sold, page) => {
    const bodyObject = { page }
    if (sold !== '') {
      bodyObject.IsSoldout = sold
    }

    nextTick(async () => {
      const res = await $fetch(`${APIBASE}/api/artistgetallimg`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${authToken.value}`
        },
        body: bodyObject
      })
      if (sold === '') {
        radio.value = 1
      } else if (sold === false) {
        radio.value = 2
      } else if (sold === true) {
        radio.value = 3
      }

      allImg.value = res.Data
      allImgNum.value = res.response.TotalNum
    })
  }

  // 刺青師後台取得作品集
  const getAlbumn = (artistID, page) => {
    nextTick(async () => {
      const { data } = await useFetch(`${APIBASE}/api/getartistallalbum`, {
        method: 'POST',
        query: {
          artistId: artistID,
          page
        }
      })
      console.log('取得刺青師所有作品集', data)
      allAlbum.value = data.value.Data
      allAlbumNum.value = data.value.response.TotalNum
    })
  }

  // 上傳作品集
  const res = ref(0)
  const albumUrl = ref()
  const albumIdea = ref()
  const showAlbum = ref(false)
  const uploadAlbumData = ref({
    image: '',
    picdescription: ''
  })

  const uploadAlbum = (artistID) => {
    // 組成formData
    // formData宣告為區域變數，每一次上傳都會有一個新的formData
    const albumnKey = {}
    const albumData = new FormData()

    for (const key in uploadAlbumData.value) {
      albumnKey[key] = uploadAlbumData.value[key]
      albumData.append(key, uploadAlbumData.value[key])
    }

    // 發API
    nextTick(async () => {
      const data = await $fetch(`${APIBASE}/api/uploadalbum`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${authToken.value}`
        },
        body: albumData
      })
      console.log('成功上傳作品集', data)
      res.value = data.Status
      showAlbum.value = true
      getAlbumn(artistID, 1)
      // 清空上一次上傳內容
      albumUrl.value = ''
      albumIdea.value = ''
    })
  }

  // 修改作品集(含置頂)
  const editAlbum = (albumnID, artistID, des, isTop) => {
    nextTick(async () => {
      const { data } = await useFetch(`${APIBASE}/api/editalbumlist`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${authToken.value}`
        },
        body: {
          AlbumsId: albumnID,
          Description: des,
          IsTop: isTop
        }
      })
      console.log('成功修改作品集', data)
      getAlbumn(artistID, 1)
    })
  }

  return {
    uploadTattooData,
    allImg,
    allImgNum,
    allAlbum,
    allAlbumNum,
    uploadAlbumData,
    closeUpload,
    response,
    res,
    albumUrl,
    albumIdea,
    showImage,
    showAlbum,
    radio,
    uploadTattoo,
    artistGetTattooData,
    getAlbumn,
    uploadAlbum,
    editAlbum
  }
})
