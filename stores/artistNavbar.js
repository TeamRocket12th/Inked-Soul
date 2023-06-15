export const useArtistNavbarStore = defineStore('navbar', () => {
  const currentTab = ref('EditSelfArea')
  return {
    currentTab
  }
})
