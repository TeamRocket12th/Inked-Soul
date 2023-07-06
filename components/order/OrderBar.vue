<template>
  <tr class="h-[108px] border-b">
    <td class="flex h-[108px] items-center justify-center">
      <img
        :src="`${props.order.Image}`"
        class="h-[100px] w-[100px] rounded-lg border bg-white object-contain object-center"
      />
    </td>
    <td>
      <div class="flex flex-col items-center">
        <p>name</p>
        <p>12cm*12cm</p>
      </div>
    </td>
    <td>
      <!-- 購買人 -->
      {{ props.order.User || props.order.Artist }}
    </td>
    <td>
      <!-- 訂單編號 -->
      {{ props.order.Id }}
    </td>
    <td>
      <!-- 交易日期 -->
      {{ props.order.OrderDay }}
    </td>
    <td>{{ props.order.BookingDate }} {{ props.order.TimeFrame }}</td>
    <td>$ {{ props.order.Deposit }}</td>
    <td>{{ props.order.OrderStatus }}</td>
  </tr>
</template>
<script setup>
const props = defineProps({
  order: {
    type: Object,
    required: true
  }
})
</script>
<style scoped></style>
