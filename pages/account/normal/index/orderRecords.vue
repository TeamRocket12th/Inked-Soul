<template>
  <div>
    <div class="mb-4 overflow-x-scroll rounded-lg">
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
            v-for="item in AllOrderRecord"
            :key="item.Id"
            :order="item"
            :status="item.Status"
            class="hover:cursor-pointer hover:bg-gray-300"
            @click="jump(item.Id)"
          />
        </tbody>
      </table>
    </div>
    <!-- 分頁 -->
    <PaginationBtn />
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useOrderStore } from '~/stores/order'
import PaginationBtn from '~/components/global/PaginationBtn'
import OrderBar from '~/components/order/OrderBar'
const store = useOrderStore()
const { getAllOrder } = store
const { AllOrderRecord, allNum } = storeToRefs(store)

onMounted(() => {
  getAllOrder('user', 1)
})

const jump = (input) => {
  navigateTo(`/account/normal/${input}`)
}
</script>
