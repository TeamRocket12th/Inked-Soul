<template>
  <NuxtLink to="/account/normal/orderRecords">
    <Icon
      name="ic:outline-keyboard-arrow-left"
      size="48"
      class="mb-5 rounded-full border border-[#D0D0D0] text-secondary duration-200 hover:border-secondary"
    />
  </NuxtLink>

  <div>
    <OrderArea>
      <template #orderContext>
        <Icon :name="orderContext[order.Data.Status].icon" size="40" />
        <h4>
          {{ orderContext[order.Data.Status].title }}
        </h4>
        <p class="text-base text-secondary">
          {{ orderContext[order.Data.Status].content }}
        </p>
      </template>
      <template #steps>
        <OrderStep :step="orderStatus" step3Title="評價刺青師" />
      </template>
      <template #orderDetail>
        <OrderData :order="order.Data" :status="order.Data.Status" role="刺青師" />
      </template>
    </OrderArea>
    <!-- 評價區 -->
    <PostComments v-if="status !== '已評價'" class=" " />
  </div>
</template>

<script setup>
import OrderArea from '~/container/order/OrderArea'
import OrderData from '~/components/order/OrderData'
import OrderStep from '~/components/order/OrderStep.vue'
import PostComments from '~/components/order/PostComments'

const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const apiBase = runtimeConfig.public.apiBase

// const data = await $fetch(`/api/getOrder/${orderID}`)
// console.log('single order', data)
// const status = data.status
// console.log('satus', status)

// 有真資料後再使用以下
// const order = ref()
// order.value = data.value.data
// console.log('single order reassigned', order)

const cookie = useCookie('token')
const orderID = route.params.orderID
const userID = cookie.value.data.ID

const orderContext = {
  訂單成立: {
    title: '付款成功！訂單成立',
    icon: 'ic:sharp-event-available',
    content: '等候刺青師三個工作日(含)內確認'
  },
  完成訂單: {
    title: '刺青師已確認，完成訂單',
    icon: 'ic:sharp-event-available',
    content: '請於預約時間內前往刺青'
  },
  評價刺青師: {
    title: '刺青師已確認，完成訂單',
    icon: 'ic:sharp-event-available',
    content: '您已評價刺青師'
  },
  取消訂單: {
    title: '訂單已取消',
    icon: 'ic:outline-backspace',
    content: '等待 7-14 日(含)退款工作日'
  }
}

// const { data } = useFetch(`${apiBase}/user/${orderID}`)

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
</script>
<style scoped></style>
