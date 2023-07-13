<template>
  <div>
    <button class="btn-neutral btn w-full bg-black text-white" onclick="my_modal_3.showModal()">
      確認付款
    </button>
    <dialog id="my_modal_3" class="modal">
      <form method="dialog" class="modal-box text-center">
        <button class="btn-ghost btn-sm btn-circle btn absolute right-2 top-2">
          <Icon name="ic:outline-clear" size="24" />
        </button>
        <div v-if="!authToken">
          <h3 class="text-lg font-bold">尚未登入</h3>
          <p class="py-4">請先登入，才能夠下訂哦！</p>
          <NuxtLink to="/account/login">
            <button class="btn-neutral btn px-5 text-white">前往登入</button>
          </NuxtLink>
        </div>
        <div v-if="authToken">
          <h3 class="text-lg font-bold">確認無誤，撥款刺青師 ${{ props.deposit }}元</h3>
          <p class="py-4">
            提醒您，請再次確認完整訂單。 <br />
            訂單成立後，平台將會協助把訂金撥款給賣家。
          </p>
          <button class="btn-neutral btn bg-black px-5 text-white" @click="postOrder">
            確認付款
          </button>
        </div>
      </form>
    </dialog>
  </div>
</template>
<script setup>
import { useOrderStore } from '~/stores/order'
import { storeToRefs } from 'pinia'

const props = defineProps({
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

// 發送用戶下單資料
const postOrder = async () => {
  const tempBookedTimeFrame = paymentInfo.value.BookedTimeFrame
  Object.assign(paymentInfo.value, inputPaymentInfo.value)
  paymentInfo.value.BookedTimeFrame = tempBookedTimeFrame

  const {
    data: orderResponse,
    error: userError,
    pending
  } = await useFetch(`${APIBASE}/api/artistbookingpay`, {
    headers: { 'Content-type': 'application/json', Authorization: `Bearer ${authToken.value}` },
    method: 'POST',
    body: paymentInfo.value
  })
  if (!orderResponse.value) {
    console.log(orderResponse.value)
  }
}
</script>
