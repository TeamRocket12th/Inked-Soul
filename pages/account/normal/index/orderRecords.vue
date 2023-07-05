<template>
  <div>
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
      <OrderBar
        v-for="item in data"
        :key="item.id"
        :order="item"
        :status="item.status"
        class="hover:cursor-pointer hover:bg-gray-300"
        @click="jump(item.id)"
      />
    </table>
  </div>
</template>

<script setup>
import OrderBar from '~/components/order/OrderBar'
const data = await $fetch('/api/getOrder/getAllOrder')
console.log('data:', data)
// 有真資料後再使用已下這段
// const order = ref([])
// order.value = data.value.OrderData
// order.value = data.value
// console.log('order:', order)

const jump = (input) => {
  navigateTo(`/account/normal/${input}`)
}
</script>
