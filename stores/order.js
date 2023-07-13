export const useOrderStore = defineStore('order', () => {
  const runtimeConfig = useRuntimeConfig()
  const APIBASE = runtimeConfig.public.APIBASE
  const authToken = useCookie('token')

  const router = useRouter()
  const id = ref()
  const orderID = ref()
  const artistID = ref()
  const designData = ref({
    ID: '',
    name: '',
    deposit: ''
  })

  const inputPaymentInfo = reactive({
    Realname: '',
    Phone: '',
    Email: '',
    BookedDate: '',
    BookedTimeFrame: '',
    ImagesId: designData.ID,
    PayWay: ''
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
    artistID,
    designData,
    inputPaymentInfo,
    paymentInfo,
    getOrder,
    getStatus,
    getAllOrder
  }
})
