<template>
  <div class="overflow-x-scroll rounded-lg">
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
            :key="item.Id"
            :order="item"
            :status="item.Status"
            class="hover:cursor-pointer hover:bg-gray-300"
            @click="jump(item.Id)"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { useOrderStore } from '~/stores/order'
const store = useOrderStore()
const { getAllOrder } = store
import OrderBar from '~/components/order/OrderBar'

// 資料庫建置完成後改用store.js的getAllOrder
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

// onMounted(()=>{
//   getAllOrder()
// })
</script>
