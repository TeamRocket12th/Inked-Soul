<template>
  <div class="overflow-x-auto">
    <div>
      <table class="w-full">
        <thead class="h-12 bg-primary">
          <tr>
            <th>認領圖</th>
            <th>名稱</th>
            <th>刺青師</th>
            <th>訂單編號</th>
            <th>交易日期</th>
            <th>預約時段</th>
            <th>訂金</th>
            <th>訂單狀態</th>
          </tr>
        </thead>
        <tbody>
          <OrderBar
            v-for="item in data"
            :key="item.id"
            :order="item"
            :status="item.status"
            class="hover:cursor-pointer hover:bg-gray-300"
            @click="jump(item.id)"
          />
        </tbody>
      </table>
    </div>
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
