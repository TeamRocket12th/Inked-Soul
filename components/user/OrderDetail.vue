<template>
  <div class="w-full">
    <table class="border-[1px] border-black w-full">
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
      <tr>
        <td>
          <img :src="`${orderData.image}`" alt="" class="w-[50px]">
        </td>
        <td>{{orderData.name}}</td>
        <td>{{orderData.artist}}</td>
        <td>{{orderData.id}}</td>
        <td>{{orderData.orderDay}}</td>
        <td>{{orderData.date}}</td>
        <td>{{orderData.deposit}}</td>
        <td>{{orderData.status}}</td>
      </tr>
    </table>
  </div>
</template>
<script setup>
const props = defineProps({
  orderID: {
    type: String,
    required: true,
    default: ''
  }
})
console.log('props.orderID',props.orderID)
const { data } = await useFetch(`/api/getOrder/${props.orderID}`)
console.log(data)
const orderData=data.value.data
</script>
