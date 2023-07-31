<template>
  <div>
    <button class="btn-basic btn-large" onclick="my_modal_3.showModal()">確認付款</button>
    <dialog id="my_modal_3" class="modal">
      <form method="dialog" class="modal-box text-center">
        <button class="btn-ghost btn-sm btn-circle btn absolute right-2 top-2">
          <Icon name="ic:outline-clear" size="24" />
        </button>
        <div v-if="!authToken">
          <h3 class="text-lg font-bold">尚未登入</h3>
          <p class="py-4">請先登入，才能夠下訂哦！</p>
          <NuxtLink to="/account/login">
            <button class="btn-basic btn-small">前往登入</button>
          </NuxtLink>
        </div>
        <div v-if="authToken">
          <h3 class="text-lg font-bold">確認無誤，撥款刺青師 ${{ deposit }}元</h3>
          <p class="py-4">
            提醒您，請再次確認完整訂單。 <br />
            訂單成立後，平台將會協助把訂金撥款給賣家。
          </p>
          <button class="btn-basic btn-small" @click="postOrder">確認付款</button>
        </div>
      </form>
    </dialog>
    <form
      ref="form"
      name="Newebpay"
      method="post"
      action="https://ccore.newebpay.com/MPG/mpg_gateway"
    >
      <!-- 設定 hidden 可以隱藏不用給使用者看的資訊 -->
      <!-- 藍新金流商店代號 -->
      <input id="MerchantID" type="hidden" name="MerchantID" :value="paymentData.MerchantID" />
      <!-- 交易資料透過 Key 及 IV 進行 AES 加密 -->
      <input id="TradeInfo" type="hidden" name="TradeInfo" :value="paymentData.TradeInfo" />
      <!-- 經過上述 AES 加密過的字串，透過商店 Key 及 IV 進行 SHA256 加密 -->
      <input id="TradeSha" type="hidden" name="TradeSha" :value="paymentData.TradeSha" />
      <!-- 串接程式版本 -->
      <input id="Version" type="hidden" name="Version" :value="paymentData.Version" />
    </form>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useOrderStore } from '~/stores/order'

const props = defineProps({
  designId: {
    type: String,
    required: true
  },
  designName: {
    type: String,
    required: true
  },
  deposit: {
    type: Number,
    required: true
  }
})

const runtimeConfig = useRuntimeConfig()
const APIBASE = runtimeConfig.public.APIBASE
const authToken = useCookie('token')

const store = useOrderStore()
const { inputPaymentInfo, paymentInfo } = storeToRefs(store)

const deposit = ref(props.deposit.toLocaleString())

// 發送用戶下單資料
const form = ref(null)
const paymentData = ref({})
const postOrder = async () => {
  inputPaymentInfo.value.ImagesId = props.designId
  const tempBookedTimeFrame = paymentInfo.value.BookedTimeFrame
  Object.assign(paymentInfo.value, inputPaymentInfo.value)
  paymentInfo.value.BookedTimeFrame = tempBookedTimeFrame

  if (!authToken.value) {
    return ''
  } else {
    const { data: orderResponse } = await useFetch(`${APIBASE}/api/artistbookingpay`, {
      headers: { 'Content-type': 'application/json', Authorization: `Bearer ${authToken.value}` },
      method: 'POST',
      body: {
        itemDesc: props.designName,
        itemDescid: paymentInfo.value.ImagesId,
        amt: props.deposit,
        Name: paymentInfo.value.Realname,
        Phone: paymentInfo.value.Phone,
        Email: paymentInfo.value.Email,
        BookedDate: paymentInfo.value.BookedDate,
        BookedTimeFrame: paymentInfo.value.BookedTimeFrame
      }
    })
    if (!orderResponse.value) {
      // console.log(orderResponse.value)
    } else {
      // console.log('orderRes', orderResponse)
      paymentData.value = orderResponse.value.PaymentData
      await nextTick()
      form.value.submit() // 發送藍新回傳的資料
    }
  }
}
</script>
