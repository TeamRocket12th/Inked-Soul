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
          <!-- <OrderBar
            v-for="item in data"
            :key="item.Id"
            :order="item"
            :status="item.Status"
            class="hover:cursor-pointer hover:bg-gray-300"
            @click="jump(item.Id)"
          /> -->
        </tbody>
      </table>
    </div>
    <!-- 分頁 -->
    <div class="join">
      <button class="join-item join-item btn btn"></button>
      <!-- @click="searchAllOrder('user',`${}`)" -->
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useOrderStore } from '~/stores/order'
import OrderBar from '~/components/order/OrderBar'
const store = useOrderStore()
const { getAllOrder } = store
const { AllOrderRecord } = storeToRefs(store)
const authToken = useCookie('token')
const runtimeConfig = useRuntimeConfig()
const APIBASE = runtimeConfig.public.APIBASE

// 資料庫建置完成後改用store.js的getAllOrder
// const data = await $fetch('/api/getOrder/getAllOrder')
const { data } = await useFetch(`${APIBASE}/api/getimage/imgorder`, {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer ${authToken.value}`
  },
  body: {
    role: 'user'
  },
  query: {
    pageNumber: 1,
    pageSize: 10
  }
})
console.log('取得訂單資料:', data)
// 有真資料後再使用已下這段
// const order = ref([])
// order.value = data.value.OrderData
// order.value = data.value
// console.log('order:', order)

const jump = (input) => {
  navigateTo(`/account/normal/${input}`)
}

// 分頁
const pageNum = ref()
pageNum.value = Math.ceil(AllOrderRecord.value.length / 10)
</script>
