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
    arrToString
  }
})
