export const usePlanPaymentStore = defineStore('PlanPayment', () => {
  const runtimeConfig = useRuntimeConfig()
  const APIBASE = runtimeConfig.public.APIBASE

  const paymentInfo = reactive({
    realName: '',
    phone: '',
    email: '',
    paymentOption: ''
  })

  const postPayment = () => {
    try {
      const { data } = useFetch(`${APIBASE}/api/`, { method: 'POST', body: paymentInfo })
    } catch (error) {
      console.log(error)
    }
  }

  return { paymentInfo, postPayment }
})
