<template>
  <NuxtLink to="/account/artist/orderinfo">
    <Icon name="ic:outline-keyboard-arrow-left" size="48" class="goBack" />
  </NuxtLink>

  <div>
    <OrderArea class="mb-20">
      <template #orderContext>
        <div class="flex flex-col items-center gap-5">
          <Icon :name="titleInfo.icon" size="40" />
          <h4>
            {{ titleInfo.title }}
          </h4>
          <p class="text-base text-secondary">
            {{ titleInfo.content }}
          </p>
        </div>
      </template>
      <template #steps>
        <OrderStep :current-status="orderStatus" :step-date="orderDate" role="artist" />
      </template>
      <template #orderDetail>
        <OrderData :order="orderInfo" role="訂購人" />
      </template>
    </OrderArea>
    <div v-if="orderStatus === 1" class="flex flex-row items-center justify-center gap-3">
      <button class="btn-outline btn" onclick="my_modal_3.showModal()">取消訂單</button>
      <dialog id="my_modal_3" class="modal">
        <form method="dialog" class="modal-box rounded-lg">
          <button class="btn-ghost btn-sm btn-circle btn absolute right-2 top-2">✕</button>
          <div class="flex flex-col items-center gap-5 text-center">
            <h4>取消訂單</h4>
            <p>
              請注意，一旦訂單取消，平台將協助退款給買家。<br />
              同時您的認領圖將被自動解除， 請您重新上架，以便其他買家繼續認領。
            </p>
            <button @click="confirmOrder('false')" class="btn-neutral btn bg-black text-white">
              確認取消
            </button>
          </div>
        </form>
      </dialog>
      <button @click="confirmOrder('true')" class="btn-neutral btn bg-black text-white">
        接受訂單
      </button>
    </div>
  </div>
</template>

<script setup>
import OrderArea from '~/container/order/OrderArea'
import OrderStep from '~/components/order/OrderStep'
import OrderData from '~/components/order/OrderData'

const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const APIBASE = runtimeConfig.public.APIBASE

const authToken = useCookie('token')
const authCookie = useCookie('data')
const artistID = authCookie.value.Id

// 取得單一訂單資訊

const imageId = route.params.orderID
const orderInfo = ref('')
const orderStatus = ref('')
const orderDate = ref('')
const titleInfo = reactive({
  title: '',
  icon: '',
  content: ''
})

const getOrderInfo = async () => {
  const { data: orderResponse, error } = await useFetch(`${APIBASE}/api/orderinfo/${imageId}`, {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${authToken.value}`
    }
  })
  orderInfo.value = orderResponse.value.Data[0]
  orderStatus.value = orderInfo.value.OrderStatus
  orderDate.value = orderResponse.value

  titleInfo.title = orderContext[orderStatus.value].title
  titleInfo.icon = orderContext[orderStatus.value].icon
  titleInfo.content = orderContext[orderStatus.value].content
}

const orderContext = {
  0: {
    title: '訂單已取消',
    icon: 'ic:outline-backspace',
    content: '等待 7-14 日(含)退款工作日'
  },
  1: {
    title: '付款成功！訂單成立',
    icon: 'ic:sharp-event-available',
    content: '等候刺青師三個工作日(含)內確認'
  },
  2: {
    title: '完成訂單！請於預約時間完成',
    icon: 'ic:sharp-event-available',
    content: '系統將於14日後自動撥款到您的帳戶'
  },
  3: {
    title: '您已獲得評價',
    icon: 'ic:sharp-event-available',
    content: ''
  }
}

// 確認訂單 API
const confirmOrder = async (status) => {
  const { data: confirmResponse, error } = await useFetch(`${APIBASE}/api/artistfinishbooking`, {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${authToken.value}`
    },
    method: 'POST',
    body: {
      imageId: imageId,
      chose: status // Boolean
    }
  })
  console.log(confirmResponse.value)
  getOrderInfo()
}

onMounted(() => {
  nextTick(() => {
    getOrderInfo()
  })
})
</script>
<style scoped></style>
