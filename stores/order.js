export const useOrderStore = defineStore('order', () => {
  const runtimeConfig = useRuntimeConfig()
  const APIBASE = runtimeConfig.public.APIBASE
  const authToken = useCookie('token')

  const router = useRouter()
  const id = ref()
  const orderID = ref()
  const artistID = ref()
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
    time: '預約時段'
  })

  const AllOrderRecord = ref()
  const allNum = ref()
  // 送出訂單
  const postOrder = async () => {
    const orderData = {
      designData: designData.value,
      userData: userData.value
    }
    try {
      const { data } = await useFetch('http://localhost:5005/order', {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${authToken.value}`
        },
        method: 'post',
        body: orderData
      })
      orderID.value = data.value.orderID
      if (data.value.status === 200) {
        console.log('送出訂單成功', data)
        await router.push(`/designs/${designData.value.ID}/complete`)
      }
    } catch (error) {
      console.log('送出訂單失敗', error)
    }
  }

  // 取得訂單資料
  const getOrder = async () => {
    try {
      const { data } = await useFetch(`${APIBASE}/api/getimage/imgorder`, {
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
  const getAllOrder = (role, pageNum) => {
    try {
      nextTick(async () => {
        const { data } = await useFetch(`${APIBASE}/api/getimage/imgorder`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${authToken.value}`
          },
          body: JSON.stringify(`${role}`),
          query: {
            pageNumber: pageNum
          }
        })
        console.log('成功取得所有訂單資料', data)
        // 賦值
        AllOrderRecord.value = data.value.order
        allNum.value = data.value.TotalNum
      })
    } catch (error) {
      console.log('取得所有訂單失敗', error)
    }
  }
  return {
    id,
    orderID,
    artistID,
    designData,
    userData,
    AllOrderRecord,
    allNum,
    postOrder,
    getOrder,
    getStatus,
    getAllOrder
  }
})
