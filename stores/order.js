export const useOrderStore = defineStore('order', () => {
  const runtimeConfig = useRuntimeConfig()
  const APIBASE = runtimeConfig.public.APIBASE
  const authToken = useCookie('token')

  const router = useRouter()
  const id = ref()
  const orderID = ref()
  const designData = ref({
    ID: 0,
    name: '',
    deposit: 0
  })

  const paymentInfo = reactive({
    Realname: '',
    Phone: '',
    Email: '',
    BookedDate: '',
    BookedTimeFrame: '',
    ImagesId: '',
    PayWay: ''
  })
  // const userData = ref({
  //   name: '',
  //   tel: '',
  //   email: '',
  //   date: '',
  //   time: '預約時段'
  // })

  // const postOrder = async () => {
  //   // 送出訂單
  //   const orderData = {
  //     designData: designData.value,
  //     userData: userData.value
  //   }
  //   try {
  //     const { data } = await useFetch('http://localhost:5005/order', {
  //       headers: {
  //         'Content-type': 'application/json',
  //         Authorization: `Bearer ${authToken.value}`
  //       },
  //       method: 'post',
  //       body: orderData
  //     })
  //     orderID.value = data.value.orderID
  //     if (data.value.status === 200) {
  //       console.log('送出訂單成功', data)
  //       await router.push(`/designs/${designData.value.ID}/complete`)
  //     }
  //   } catch (error) {
  //     console.log('送出訂單失敗', error)
  //   }
  // }

  // 取得訂單資料
  const getOrder = async () => {
    try {
      const { data } = await useFetch(`${APIBASE}/api/${orderID}`, {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${authToken.value}`
        }
      })
      console.log('取得訂單資料', data)
    } catch (error) {
      console.log('取得訂單資料失敗', error)
    }
  }
  // 取得訂單狀態
  const getStatus = async () => {
    try {
      const { status } = useFetch(`${APIBASE}/api/`, {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${authToken.value}`
        }
      })
      console.log('成功取得訂單狀態', status)
    } catch (error) {
      console.log('取得訂單狀態失敗', error)
    }
  }
  // 取得全部訂單
  const getAllOrder = async () => {
    try {
      const { data } = useFetch(`${APIBASE}/api/`, {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${authToken.value}`
        }
      })
      console.log('成功取得所有訂單資料', data)
    } catch (error) {
      console.log('取得所有訂單失敗', error)
    }
  }
  return {
    id,
    orderID,
    designData,
    // userData,s
    paymentInfo,
    // postOrder,
    getOrder,
    getStatus,
    getAllOrder
  }
})
