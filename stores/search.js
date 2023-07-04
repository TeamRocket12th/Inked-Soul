export const useSearchStore=defineStore('search',()=>{
  const cityChosen=ref([])
  const styleChosen=ref([])
  const elementChosen=ref([])
  
  return { cityChosen ,styleChosen,elementChosen}
})