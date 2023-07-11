export const useSearchStore = defineStore('search', () => {
  const runtimeConfig = useRuntimeConfig()
  const APIBASE = runtimeConfig.public.APIBASE
  const allData = ref([])
  const cityArr = ref([])
  const styleArr = ref([])
  const elementArr = ref([])

  const filterArr = ref([])
  const searchCity = async () => {
    // 組字串
    let str = ''
    for (let i = 0; i < cityArr.value.length; i++) {
      str += `${cityArr.value[i]}、`
    }
    let newStr = ''
    newStr = str.slice(0, str.length - 1)
    // 發API
    // 放路徑或放body
    try {
      const { data } = await useFetch(`${APIBASE}/api/getImage/artistcity/${newStr}`, {
        body: newStr
      })
      console.log('成功取得地區', data)
    } catch (error) {}
  }
  return { allData, filterArr, cityArr, styleArr, elementArr, searchCity }
})
