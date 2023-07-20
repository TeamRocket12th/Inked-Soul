export const useGetImageStore = defineStore('getImage', () => {
  const runtimeConfig = useRuntimeConfig()
  const APIBASE = runtimeConfig.public.APIBASE

  const allData = ref()
  const allDesignData = ref([])
  const allAlbum = ref()
  const commentData = ref()
  const allAlbumNum = ref()
  const allCommentNum = ref()
  const singleAlbum = ref()
  const artistName = ref()

  const isPending = ref(false)

  const userGetTattooData = (ID, page) => {
    nextTick(async () => {
      isPending.value = true // 不知道要放在裡面還是外面，放在外面不行
      const { data } = await useFetch(`${APIBASE}/api/usergetallimg`, {
        method: 'POST',
        query: {
          artistId: ID,
          page
        }
      })
      allData.value = data.value.Data
      allDesignData.value = [...allDesignData.value, ...data.value.Data]

      isPending.value = false
    })
  }

  // 刺青師前台取得所有作品集
  const userGetAlbum = (artistId, page) => {
    nextTick(async () => {
      const { data } = await useFetch(`${APIBASE}/api/getartistallalbum`, {
        method: 'POST',
        query: {
          artistId,
          page
        }
      })
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
          artistId,
          albumId
        }
      })
      if (data.value) {
        singleAlbum.value = data.value.Data[0]
      }
    })
  }

  // 刺青師前台取得所有評價
  const getComment = (artistId, num) => {
    nextTick(async () => {
      const { data } = await useFetch(`${APIBASE}/api/getartistallcomment`, {
        method: 'POST',
        query: {
          artistId,
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
    allDesignData,
    allAlbumNum,
    singleAlbum,
    allCommentNum,
    commentData,
    artistName,
    isPending,
    userGetTattooData,
    userGetAlbum,
    userGetSingleAlbum,
    getComment
  }
})
