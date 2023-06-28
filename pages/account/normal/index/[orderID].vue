<template>
  <div class="relative">
    <OrderArea class="mb-4">
      <template #orderContext>
        <Icon :name="`${renderTxt.icon}`" size:32 class="block" />
        <p>{{ renderTxt.txt }}</p>
        <p>{{ renderTxt.subTxt }}</p>
      </template>
      <template #steps>
        <ul class="steps w-[800px]">
          <li class="step-neutral step">訂單成立</li>
          <li :class="`${renderTxt.class2}`">{{ renderTxt.step2 }}</li>
          <li :class="`${renderTxt.class3}`">{{ renderTxt.step3 }}</li>
        </ul>
      </template>
      <template #orderDetail>
        <table class="w-full">
          <tr>
            <th>認領圖</th>
            <th>名稱</th>
            <th>刺青師</th>
            <th>訂單編號</th>
            <th>交易日期</th>
            <th>預約時間</th>
            <th>價格</th>
            <th>訂單狀態</th>
          </tr>
          <OrderBar :order="data" :status="status" />
        </table>
      </template>
    </OrderArea>
    <!-- 評價區 -->
    <PostComments v-if="status !== '已評價'" class="top-76 absolute right-0" />
  </div>
</template>

<script setup>
import OrderArea from '~/container/order/OrderArea'
import OrderBar from '~/components/order/OrderBar'
import PostComments from '~/components/order/PostComments'

const route = useRoute()
console.log(route.params)

const orderID = route.params.orderID
const { data } = await useFetch(`/api/getOrder/${orderID}`)
console.log('single order', data)
// 有真資料後再使用以下
// const order = ref()
// order.value = data.value.data
// console.log('single order reassigned', order)
const status = data.value.status
console.log('satus', status)

// 訂單狀態
const renderTxt = ref({
  txt: '',
  subTxt: '',
  icon: '',
  step2: '',
  step3: '',
  class2: '',
  class3: ''
})
const statusRender = (input) => {
  if (status === '訂單成立') {
    renderTxt.value.txt = '付款成功！訂單成立'
    renderTxt.value.subTxt = '等候刺青師三個工作天確認'
    renderTxt.value.icon = 'ic:sharp-event-available'
    renderTxt.value.step2 = '完成訂單'
    renderTxt.value.step3 = '評價刺青師'
    renderTxt.value.class2 = 'step'
    renderTxt.value.class3 = 'step'
  } else if (status === '已確認') {
    renderTxt.value.txt = '刺青師已確認，完成訂單'
    renderTxt.value.subTxt = '請於預約時間內前往刺青'
    renderTxt.value.icon = 'ic:sharp-event-available'
    renderTxt.value.step2 = '完成訂單'
    renderTxt.value.step3 = '評價刺青師'
    renderTxt.value.class2 = 'step-neutral step'
    renderTxt.value.class3 = 'step'
  } else if (status === '已評價') {
    renderTxt.value.txt = '您已評價刺青師'
    renderTxt.value.subTxt = ''
    renderTxt.value.icon = 'ic:outline-stars'
    renderTxt.value.step2 = '完成訂單'
    renderTxt.value.step3 = '評價刺青師'
    renderTxt.value.class2 = 'step-neutral step'
    renderTxt.value.class3 = 'step-neutral step'
  } else if (status === '已取消') {
    renderTxt.value.txt = '刺青師已取消此筆訂單'
    renderTxt.value.subTxt = '等待7~14日退款工作天'
    renderTxt.value.icon = 'ic:baseline-backspace'
    renderTxt.value.step2 = '訂單取消'
    renderTxt.value.step3 = '完成退款'
    renderTxt.value.class2 = 'step-neutral step'
    renderTxt.value.class3 = 'step'
  } else if (status === '已退款') {
    renderTxt.value.txt = '系統已完成退款'
    renderTxt.value.subTxt = '本次交易款項已退回您的信用卡帳單'
    renderTxt.value.icon = 'ic:baseline-credit-card'
    renderTxt.value.step2 = '訂單取消'
    renderTxt.value.step3 = '完成退款'
    renderTxt.value.class2 = 'step-neutral step'
    renderTxt.value.class3 = 'step-neutral step'
  }
}

onMounted(() => {
  statusRender(status)
  console.log(renderTxt)
})
</script>

<style lang="scss" scoped></style>
