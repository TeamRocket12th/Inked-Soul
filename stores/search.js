export const useSearchStore = defineStore('search', () => {
  const allData = ref([])

  const filterArr = ref([])
  return { allData, filterArr }
})
