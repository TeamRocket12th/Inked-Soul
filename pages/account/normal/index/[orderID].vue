<template>
  <div>
    <NuxtLink to="/account/normal/orderRecords">
      <Icon name="ic:outline-keyboard-arrow-left" size="48" class="goBack" />
    </NuxtLink>
    <div class="relative flex h-auto flex-col items-center">
      <OrderArea>
        <template #orderContext>
          <Icon :name="titleInfo.icon" size="40" />
          <h4>
            {{ titleInfo.title }}
          </h4>
          <p class="text-base text-secondary">
            {{ titleInfo.content }}
          </p>
        </template>
        <template #steps>
          <!-- 📌要帶入props orderStatus -->
          <OrderStep :current-status="orderStatus" :step-date="orderDate" role="user" />
        </template>
        <template #orderDetail>
          <OrderData :order="orderInfo" role="刺青師" />
        </template>
      </OrderArea>
      <!-- 評價區 -->
      <!--評價完成改成查看評價 -->
      <PostComments v-if="orderStatus === 2" class="absolute top-0" />
    </div>
  </div>
</template>

<script setup>
import OrderArea from '~/container/order/OrderArea'
import OrderData from '~/components/order/OrderData'
import OrderStep from '~/components/order/OrderStep.vue'
import PostComments from '~/components/order/PostComments'
import { useOrderStore } from '~/stores/order'

const route = useRoute()
const authToken = useCookie('token')
const runtimeConfig = useRuntimeConfig()
const APIBASE = runtimeConfig.public.APIBASE

const store = useOrderStore()
const { isComment } = store

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
    title: '刺青師已確認，完成訂單',
    icon: 'ic:sharp-event-available',
    content: '請於預約時間內前往刺青'
  },
  3: {
    title: '刺青師已確認，完成訂單',
    icon: 'ic:sharp-event-available',
    content: '您已評價刺青師'
  }
}

onMounted(() => {
  nextTick(() => {
    getOrderInfo()
  })
})

watch(isComment, (newValue) => {
  if (newValue === true) {
    getOrderInfo()
  }
})
</script>
<style scoped></style>
