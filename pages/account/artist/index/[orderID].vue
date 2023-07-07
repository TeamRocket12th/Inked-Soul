<template>
  <NuxtLink to="/account/artist/orderinfo">
    <Icon
      name="ic:outline-keyboard-arrow-left"
      size="48"
      class="mb-5 rounded-full border border-[#D0D0D0] text-secondary duration-200 hover:border-secondary"
    />
  </NuxtLink>

  <div>
    <OrderArea>
      <template #orderContext>
        <div class="flex flex-col items-center gap-5">
          <Icon :name="orderContext[order.Data.Status].icon" size="40" />
          <h4>
            {{ orderContext[order.Data.Status].title }}
          </h4>
          <p class="text-base text-secondary">
            {{ orderContext[order.Data.Status].content }}
          </p>
        </div>
      </template>
      <template #steps>
        <OrderStep :step="orderStatus" />
      </template>
      <template #orderDetail>
        <OrderData :order="order.Data" :status="order.Data.Status" />
      </template>
    </OrderArea>
    <div
      v-if="order.Data.Status !== '訂單成立'"
      class="flex flex-row items-center justify-center gap-3"
    >
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
            <button @click="confirmOrder('reject')" class="btn-neutral btn bg-black text-white">
              確認取消
            </button>
          </div>
        </form>
      </dialog>
      <button @click="confirmOrder('accept')" class="btn-neutral btn bg-black text-white">
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
const apiBase = runtimeConfig.public.apiBase

const cookie = useCookie('token')
const orderID = route.params.orderID
const artistID = cookie.value.data.ID

// 透過 API 最後一個
const orderContext = {
  訂單成立: {
    title: '付款成功！訂單成立',
    icon: 'ic:sharp-event-available',
    content: '請您於三日內確認本筆訂單。若未於三日內(含)回覆，系統將自動取消訂單。'
  },
  完成訂單: {
    title: '付款成功！訂單成立',
    icon: 'ic:sharp-event-available',
    content: '系統將於14日後自動撥款到您的帳戶'
  },
  獲得評價: {
    title: '您已獲得評價',
    icon: 'ic:sharp-event-available',
    content: ''
  },
  取消訂單: {
    title: '訂單已取消',
    icon: 'ic:outline-backspace',
    content: '請重新上架認領圖'
  }
}

// 總共會有 ３支 API
// 取得訂單資訊
// 取得訂單狀態
// 發送是否接收訂單

const { data, error } = await useFetch(`${apiBase}/artist/${artistID}/${orderID}`)
// order.value = data.value

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
    Status: '完成訂單'
  }
})

// 取得訂單狀態 API
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

// 確認訂單 API (待完成)
const confirmOrder = (status) => {
  // const { data } = useFetch('', {
  //   headers: { 'Content-type': 'application/json' },
  //   method: 'POST',
  //   body: status // reject|accept
  // })
}
</script>
<style scoped></style>
