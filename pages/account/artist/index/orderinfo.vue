<template>
  <!-- 訂單列表 -->
  <div>
    <div class="overflow-scroll">
      <table class="whitespace-nowraps table whitespace-nowrap text-center">
        <thead class="mb-1 border-b">
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
          <tr
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
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
const orderData = [
  {
    Image:
      'https://images.unsplash.com/photo-1597852075234-fd721ac361d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHRhdHRvb3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    Name: '墨水中的靈魂',
    Client: 'cat',
    OrderId: '12321',
    PurchesDate: '2023-12-01',
    Reservation: '2023-12-01上午',
    Payment: {
      Deposit: '3000',
      Total: '7000'
    },
    OrderStatus: '訂單成立' // '訂單成立','完成訂單'
  }
]

const router = useRouter()
const toPage = (orderId) => {
  router.push(`/account/artist/${orderId}`)
}
</script>
<style scoped></style>
