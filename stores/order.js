export const useOrderStore = defineStore('order', () => {
  const runtimeConfig = useRuntimeConfig()
  const APIBASE = runtimeConfig.public.APIBASE
  const authToken = useCookie('token')

  const id = ref()
  const orderID = ref()
  const artistID = ref()
  const isComment = ref(false)
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
    ImagesId: designData.value.ID,
    PayWay: ''
  })
  const AllOrderRecord = ref()
  const totalPage = ref()

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
      const { status } = await useFetch(`${APIBASE}/api/`, {
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
        // 賦值
        AllOrderRecord.value = data.value.Data
        totalPage.value = Math.floor(data.value.TotalNum / 10) + 1
      })
    } catch (error) {
      console.log('取得所有訂單失敗', error)
    }
  }

  // 評價區hide/show
  const stretch = ref(false)
  // 評價區伸縮
  const stretchToggle = () => {
    stretch.value = true
  }
  // 外層容器伸縮
  const handleClickOutside = () => {
    stretch.value = false
  }

  return {
    id,
    orderID,
    artistID,
    isComment,
    designData,
    inputPaymentInfo,
    AllOrderRecord,
    totalPage,
    paymentInfo,
    stretch,
    getOrder,
    getStatus,
    getAllOrder,
    stretchToggle,
    handleClickOutside
  }
})
