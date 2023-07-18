export const useGetImageStore = defineStore('getImage', () => {
  const runtimeConfig = useRuntimeConfig()
  const APIBASE = runtimeConfig.public.APIBASE

  const allData = ref()
  const allAlbum = ref()
  const singleAlbum = ref()
  const userGetTattooData = (ID, page) => {
    nextTick(async () => {
      const { data } = await useFetch(`${APIBASE}/api/usergetallimg`, {
        method: 'POST',
        query: {
          artistId: ID,
          page: page
        }
      })
      console.log('用戶取得刺青師所有認領圖', data)
      allData.value = data.value.Data
    })
  }

  const userGetAlbum = (ID, page) => {
    nextTick(async () => {
      const { data } = await useFetch(`${APIBASE}/api/getartistallalbum`, {
        method: 'POST',
        query: {
          artistId: ID,
          page: page
        }
      })
      console.log('用戶取得刺青師所有作品集', data)
      allAlbum.value = data.value.Data
    })
  }
  const userGetSingleAlbum = (albumId, artistId) => {
    nextTick(async () => {
      const { data } = await useFetch(`${APIBASE}/api/getartistalbum`, {
        method: 'POST',
        query: {
          artistId: artistId,
          albumId: albumId
        }
      })
      console.log('取得單一作品集', data)
      singleAlbum.value = data.value.Data[0]
      console.log('singleAlbum', singleAlbum)
    })
  }
  //   params: {
  //   artistId: ID,
  //   page: page
  // }
  return { allData, allAlbum, singleAlbum, userGetTattooData, userGetAlbum, userGetSingleAlbum }
})
