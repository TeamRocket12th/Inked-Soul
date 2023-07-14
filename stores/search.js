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
  // 重組字串
  const arrToString = () => {
    cityStr.value = cityArr.value.join()
    styleStr.value = styleArr.value.join()
    elementStr.value = elementArr.value.join()
  }

  // 取得刺青師
  const getArtists = () => {
    arrToString()
    nextTick(async () => {
      const { data } = await useFetch(`${APIBASE}/api/searchartist`, {
        method: 'POST',
        body: {
          City: '',
          Style: '',
          Element: ''
        }
      })
      allArtistsData.value = data.value.Data
      showResult.value = true
    })
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
    arrToString,
    getArtists
  }
})
