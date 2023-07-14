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
  const AllOrderRecord = ref()
  const allNum = ref()

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
          body: JSON.stringify(`${role.toLowerCase()}`),
          query: {
            pageNumber: pageNum
          }
        })
        console.log('成功取得所有訂單資料', data)
        // 賦值
        AllOrderRecord.value = data.value.Data
        allNum.value = data.value.TotalNum
      })
    } catch (error) {
      console.log('取得所有訂單失敗', error)
    }
  }

  // 評價區hide/show
  const stretch = ref(false)

  const stretchShow = () => {
    stretch.value = true
    console.log('show', stretch.value)
  }
  const stretchHide = () => {
    stretch.value = false
    console.log('hide', stretch.value)
  }
  return {
    id,
    orderID,
    artistID,
    designData,
    inputPaymentInfo,
    AllOrderRecord,
    allNum,
    paymentInfo,
    stretch,
    getOrder,
    getStatus,
    getAllOrder,
    stretchShow,
    stretchHide
  }
})
