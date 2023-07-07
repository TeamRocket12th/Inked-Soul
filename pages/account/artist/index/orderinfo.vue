<template>
  <!-- 訂單列表 -->
  <div class="overflow-x-scroll">
    <div>
      <table class="w-full">
        <thead class="h-12 bg-primary">
          <tr>
            <th>認領圖</th>
            <th>名稱</th>
            <th>訂購人</th>
            <th>訂單編號</th>
            <th>交易日期</th>
            <th>預約時間</th>
            <th>價格</th>
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
            @click="toPage(item.Id)"
          />
          <!-- <tr
            v-for="(item, key) in orderData"
            :key="key"
            @click="toPage(item.OrderId)"
            class="h-[100px] py-1 hover:bg-[#D9D9D9]"
          >
            <td><img :src="item.Image" alt="" class="w-full" /></td>
            <td class="px-12">{{ item.Name }}</td>
            <td class="px-12">{{ item.Client }}</td>
            <td class="px-12">{{ item.OrderId }}</td>
            <td class="px-12">{{ item.PurchesDate }}</td>
            <td class="px-12">{{ item.Reservation }}</td>
            <td class="px-12">$ {{ item.Payment.Deposit }}</td>
            <td class="px-12">{{ item.OrderStatus }}</td>
          </tr> -->
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import OrderBar from '~/components/order/OrderBar.vue'

const data = [
  {
    Id: '123123',
    Image:
      'https://images.unsplash.com/photo-1597852075234-fd721ac361d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHRhdHRvb3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    Name: '墨水中的靈魂',
    User: 'cat',
    OrderId: '12321',
    OrderDay: '2023-12-01',
    BookingDate: '2023-12-01',
    TimeFrame: '早上',
    Deposit: '3000',
    Total: '7000',
    OrderStatus: '訂單成立' // '訂單成立','完成訂單'
  },
  {
    Id: '123123',
    Image:
      'https://images.unsplash.com/photo-1597852075234-fd721ac361d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHRhdHRvb3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    Name: '墨水中的靈魂',
    User: 'cat',
    OrderId: '12321',
    OrderDay: '2023-12-01',
    BookingDate: '2023-12-01',
    TimeFrame: '早上',
    Deposit: '3000',
    Total: '7000',
    OrderStatus: '訂單成立' // '訂單成立','完成訂單'
  }
]

const router = useRouter()
const toPage = (orderId) => {
  router.push(`/account/artist/${orderId}`)
}
</script>
<style scoped></style>
