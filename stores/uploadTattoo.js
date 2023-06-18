export const useUploadTattooStore = defineStore('UploadTattoo', () => {
  const uploadTattoo = ref({
    img_url: '',
    tatoo_name: '',
    recommend_position: [],
    tattoo_size: {
      height: '',
      width: ''
    },
    design_idea: '',
    hour: '',
    payment: {
      deposit: '',
      balance: '',
      total: ''
    },
    tattoo_style: [],
    tattoo_element: []
  })

  // POST API
  return { uploadTattoo }
})
