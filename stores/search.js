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

  const isPending = ref(false)
  // 重組字串
  const arrToString = () => {
    cityStr.value = cityArr.value.join()
    styleStr.value = styleArr.value.join()
    elementStr.value = elementArr.value.join()

    if (
      (!cityStr.value || !styleStr.value || !elementStr.value) &&
      allDesignData.value.length === 0
    ) {
      allDesignData.value = []
    } else if (allNum.value) {
      allDesignData.value = []
    }
  }

  // 取得認領圖
  const getDesigns = (num) => {
    arrToString()
    isPending.value = true
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
          allDesignData.value = [...allDesignData.value, ...data.value.Data]
          allNum.value = allDesignData.value.length
        } else if (!data.value.Data && !allNum.value) {
          allNum.value = allDesignData.value.length
        } else {
          allNum.value = 0
        }
        isPending.value = false
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
    isPending,
    arrToString,
    getDesigns,
    getArtists
  }
})
