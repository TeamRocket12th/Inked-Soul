export const useOrderStore = defineStore('order', () => {
  const id = ref()
  const designData = ref({
    ID: 0,
    name: '',
    deposit: 0
  })
  const userData = ref({
    name: '',
    tel: '',
    email: '',
    date: '',
    time: ''
  })

  const postOrder = async () => {
    // 送出訂單
    const orderData = {
      designData: designData.value,
      userData: userData.value
    }
    const { data, error } = await useFetch('http://localhost:5005/order', {
      method: 'post',
      body: orderData
    })
    console.log(data)
    console.log(error)
    if (data.value.status === 200) {
      await navigateTo('/')
    }
  }

  return {
    id,
    designData,
    userData,
    postOrder
  }
})
