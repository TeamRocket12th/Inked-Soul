<template>
  <!-- 訂單列表 -->
  <div>
    <div class="overflow-x-scroll rounded-lg">
      <div>
        <table class="w-full">
          <thead class="h-12 border-b border-[#D0D0D0] bg-primary">
            <tr>
              <th>認領圖</th>
              <th>名稱</th>
              <th>預約時間</th>
              <th>訂單狀態</th>
              <th>訂購人</th>
              <th>訂單編號</th>
              <th>交易日期</th>
              <th>價格</th>
            </tr>
          </thead>
          <tbody v-if="!AllOrderRecord">
            <tr class="h-[108px] border-b border-[#D0D0D0] text-center">
              <td colspan="10">您尚無任何訂單</td>
            </tr>
          </tbody>
          <tbody>
            <OrderBar
              v-for="item in AllOrderRecord"
              :key="item.Id"
              :order="item"
              :status="item.Status"
              class="hover:cursor-pointer hover:bg-primary active:bg-[#D0D0D0]"
              @click="toPage(item.Id)"
            />
          </tbody>
        </table>
      </div>
    </div>
    <!-- 分頁 -->
    <!-- <PageBtn
      :current-page="emitNewPage"
      :total-page="totalPage"
      @update-current-page="getEmitPage"
    /> -->
    <div v-if="allOrderNum">
      <PaginationBtn :num="allOrderNum" state="back" />
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useOrderStore } from '~/stores/order'
import OrderBar from '~/components/order/OrderBar.vue'
const store = useOrderStore()
const { getAllOrder } = store
const { AllOrderRecord, totalPage, allOrderNum } = storeToRefs(store)

onMounted(() => {
  nextTick(() => {
    getAllOrder('artist', emitNewPage)
  })
})

const emitNewPage = ref(1)
const getEmitPage = (newPage) => {
  emitNewPage.value = newPage
}

const router = useRouter()
const toPage = (orderId) => {
  router.push(`/account/artist/orderinfo/${orderId}`)
}
</script>
<style scoped></style>
