export const useGetImageStore = defineStore('getImage', () => {
  const runtimeConfig = useRuntimeConfig()
  const APIBASE = runtimeConfig.public.APIBASE

  const allData = ref()
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
  //   params: {
  //   artistId: ID,
  //   page: page
  // }
  return { allData, userGetTattooData }
})
