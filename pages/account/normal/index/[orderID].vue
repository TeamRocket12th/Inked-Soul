<template>
  <div>
    <NuxtLink to="/account/normal/orderRecords">
      <Icon
        name="ic:outline-keyboard-arrow-left"
        size="48"
        class="mb-5 rounded-full border border-[#D0D0D0] text-secondary duration-200 hover:border-secondary"
      />
    </NuxtLink>
    <div class="relative">
      {{ orderInfo }}
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
          <OrderStep :step="orderStatus" step3Title="評價刺青師" />
        </template>
        <template #orderDetail>
          <OrderData :order="orderInfo" :status="order.Data.Status" role="刺青師" />
        </template>
      </OrderArea>
      <!-- 評價區 -->
      <!-- 出現時機視訂單狀態而定 -->
      <PostComments v-if="orderStatus.Step2.Status === true" class="absolute right-12 top-0" />
    </div>
  </div>
</template>

<script setup>
import OrderArea from '~/container/order/OrderArea'
import OrderData from '~/components/order/OrderData'
import OrderStep from '~/components/order/OrderStep.vue'
import PostComments from '~/components/order/PostComments'

const authToken = useCookie('token')
const runtimeConfig = useRuntimeConfig()
const APIBASE = runtimeConfig.public.APIBASE

// 取得單一訂單資訊
const imageId = 2
const orderInfo = ref('')
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

  const status = orderInfo.value.OrderStatus
  titleInfo.title = orderContext[status].title
  titleInfo.icon = orderContext[status].icon
  titleInfo.content = orderContext[status].content
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

// 📌 ＡＰＩ
const order = ref({
  Data: {
    Id: '123eqwda',
    Image: 'https://fakeimg.pl/300/?text=Design',
    Name: 'Tenetur nisi.',
    User: 'Benny.Rippin39',
    ArtistImg:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/842.jpg',
    OrderDay: '2023-06-20',
    Date: '2023-06-30',
    Time: '晚上',
    Deposit: '2000',
    Status: '取消訂單'
  }
})

// 狀態 ＡＰＩ
const orderStatus = ref({
  Step1: {
    Status: true,
    Date: '2023-06-20'
  },
  Step2: {
    Status: true,
    Date: '2023-06-20'
  },
  Step3: {
    Status: false,
    Date: null
  }
})

onMounted(() => {
  nextTick(() => {
    getOrderInfo()
  })
})
</script>
<style scoped></style>
