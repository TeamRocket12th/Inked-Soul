export const useSearchStore = defineStore('search', () => {
  const runtimeConfig = useRuntimeConfig()
  const APIBASE = runtimeConfig.public.APIBASE
  const allDesignData = ref([])
  const allArtistsData = ref([])
  const cityArr = ref([])
  const styleArr = ref([])
  const elementArr = ref([])
  const filterArr = ref([])
  const cityStr = ref()
  const styleStr = ref()
  const elementStr = ref()
  const showResult = ref(false)
  const allNum = ref()
  // 重組字串
  const arrToString = () => {
    cityStr.value = cityArr.value.join()
    styleStr.value = styleArr.value.join()
    elementStr.value = elementArr.value.join()
  }

  // 取得認領圖
  const getDesigns = (num) => {
    arrToString()

    try {
      nextTick(async () => {
        const { data } = await useFetch(`${APIBASE}/api/artistcity`, {
          method: 'POST',
          body: {
            City: cityStr.value,
            Style: styleStr.value,
            Element: elementStr.value
          },
          query: {
            page: num
          }
        })
        showResult.value = true
        if (data.value.Data) {
          allDesignData.value = data.value.Data
          allNum.value = allDesignData.value.length
          console.log('allNum y', allNum)
        } else {
          allDesignData.value = []
          allNum.value = 0
          console.log('allNum = 0', allNum)
          // alert('認領圖中無相對刺青師在此縣市')
        }
      })
    } catch (error) {
      console.log('取得認領圖資料失敗', error)
    }
  }
  // 取得刺青師
  const getArtists = (num) => {
    arrToString()
    try {
      nextTick(async () => {
        const { data } = await useFetch(`${APIBASE}/api/searchartist`, {
          method: 'POST',
          body: {
            City: cityStr.value,
            Style: styleStr.value,
            Element: elementStr.value
          },
          query: {
            page: num
          }
        })
        showResult.value = true
        console.log('成功取得所有刺青師', data)
        if (data.value.Data !== null) {
          allArtistsData.value = data.value.Data
          allNum.value = data.value.response.TotalNum
        } else {
          allNum.value = 0
          alert('認領圖中無相對刺青師在此縣市')
        }
      })
    } catch (error) {
      console.log('取得刺青師資料失敗', error)
      alert(error)
    }
  }

  return {
    APIBASE,
    allDesignData,
    allArtistsData,
    filterArr,
    cityArr,
    styleArr,
    elementArr,
    cityStr,
    styleStr,
    elementStr,
    showResult,
    allNum,
    arrToString,
    getDesigns,
    getArtists
  }
})
