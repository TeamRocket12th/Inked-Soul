<template>
  <div>
    <p>單一訂單ID{{ orderID }}</p>
    <OrderArea>
      <template #orderContext v-if="status=='已確認'">刺青師已確認，完成訂單</template>
      <template #orderContext v-if="status=='已取消'">刺青師已確認，完成訂單</template>
      <template #orderContext v-if="status=='已評價'">刺青師已確認，完成訂單</template>
      <template #steps>
        <ul class="steps">
          <li class="step-neutral step">訂單成立</li>
          <li class="step-neutral step">完成訂單</li>
          <li class="step">評價刺青師</li>
        </ul>
      </template>
      <template #orderDetail>
        <table>
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
          <OrderBar :order="order" />
        </table>
      </template>
    </OrderArea>
  </div>
</template>

<script setup>
import OrderArea from '~/container/order/OrderArea'
import OrderBar from '~/components/order/OrderBar'

const route = useRoute()
console.log(route.params)
// 等有真資料之後再撈取單筆交易紀錄，以免mockAPI隨機產生訂單狀態，導致我無法進入想要的頁面
// const orderID = route.params.orderID
// const { data } = await useFetch(`/api/getOrder/${orderID}`)
// console.log(data)
// const order = ref()
// order.value = data.value.data
// console.log(order)
// const status = order.value.status
// console.log(status)


// 在有真資料之後即把props刪除
</script>

<style lang="scss" scoped></style>
