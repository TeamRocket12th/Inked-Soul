export const useSearchStore = defineStore('search', () => {
  const runtimeConfig = useRuntimeConfig()
  const APIBASE = runtimeConfig.public.APIBASE
  const allData = ref([])
  const cityArr = ref([])
  const styleArr = ref([])
  const elementArr = ref([])
  const filterArr = ref([])

  // 取得認領圖(含帶入篩選條件)
  const searchAllCity = async () => {
    try {
      const { data } = await useFetch(`${APIBASE}/api/artistcity`, {
        method: 'POST',
        body: {
          City: '',
          Style: '',
          Element: ''
        }
      })
      console.log('res', data)
      allData.value = data.value.Data
      console.log('allData', allData)
    } catch (error) {
      console.log(error)
    }
  }

  // 取得單一認領圖
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

  //
  return { APIBASE, allData, filterArr, cityArr, styleArr, elementArr, searchCity, searchAllCity }
})
