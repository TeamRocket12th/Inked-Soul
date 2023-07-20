export const useGetImageStore = defineStore('getImage', () => {
  const runtimeConfig = useRuntimeConfig()
  const APIBASE = runtimeConfig.public.APIBASE

  const allData = ref()
  const allAlbum = ref()
  const commentData = ref()
  const allAlbumNum = ref()
  const allCommentNum = ref()
  const singleAlbum = ref()
  const artistName = ref()
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
  // 刺青師前台取得所有作品集
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
      artistName.value = data.value.Data[0].ArtistNickname
      allAlbumNum.value = data.value.response.TotalNum
    })
  }
  // 刺青師前台取得單一作品集
  const userGetSingleAlbum = (albumId, artistId) => {
    nextTick(async () => {
      const { data } = await useFetch(`${APIBASE}/api/getartistalbum`, {
        method: 'POST',
        query: {
          artistId: artistId,
          albumId: albumId
        }
      })
      if (data.value) {
        console.log('取得單一作品集', data)
        singleAlbum.value = data.value.Data[0]
        console.log('singleAlbum', singleAlbum)
      }
    })
  }
  // 刺青師前台取得所有評價
  const getComment = (artistId, num) => {
    nextTick(async () => {
      const { data } = await useFetch(`${APIBASE}/api/getartistallcomment`, {
        method: 'POST',
        query: {
          artistId: artistId,
          page: num
        }
      })
      console.log('取得所有評價', data)
      commentData.value = data.value.Data
      allCommentNum.value = data.value.response.TotalNum
    })
  }

  return {
    allData,
    allAlbum,
    allAlbumNum,
    singleAlbum,
    allCommentNum,
    artistName,
    commentData,
    userGetTattooData,
    userGetAlbum,
    userGetSingleAlbum,
    getComment
  }
})
