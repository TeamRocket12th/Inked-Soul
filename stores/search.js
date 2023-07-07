export const useSearchStore = defineStore('search', () => {
  const allData = ref([])
  const cityArr = ref([])
  const styleArr = ref([])
  const elementArr = ref([])

  const filterArr = ref([])

  return { allData, filterArr, cityArr, styleArr, elementArr }
})
