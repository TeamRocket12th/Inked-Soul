export const useSearchStore = defineStore('search', () => {
  const runtimeConfig = useRuntimeConfig()
  const APIBASE = runtimeConfig.public.APIBASE
  const allData = ref([])
  const cityArr = ref([])
  const styleArr = ref([])
  const elementArr = ref([])

  const filterArr = ref([])
  const searchCity = async () => {
    let str = cityArr.value.join(',')
    // 放路徑或放body
    try {
      const { data } = await useFetch(`${APIBASE}/api/getImage/artistcity/${str}`, {
        body: str
      })
      console.log(str)
      console.log('成功取得地區', data)
    } catch (error) {}
  }
  return { allData, filterArr, cityArr, styleArr, elementArr, searchCity }
})
