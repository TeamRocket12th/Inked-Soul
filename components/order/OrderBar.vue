<template>
  <tr class="h-[108px] border-b">
    <td class="flex h-[108px] items-center justify-center">
      <img
        :src="`${props.order.Url}`"
        class="h-[100px] w-[100px] rounded-lg border bg-white object-cover object-center"
      />
    </td>
    <td>
      <!-- 認領圖名稱和尺寸 -->
      <div class="flex flex-col items-center">
        <p>{{ props.order.Name }}</p>
        <p>{{ props.order.size }}</p>
      </div>
    </td>
    <td>
      <!-- 購買人 -->
      {{ props.order.BuPurchaser }}
    </td>
    <td>
      <!-- 訂單編號 -->
      {{ props.order.Id[0] }}
    </td>
    <td>
      <!-- 交易日期 -->
      {{ payDate }}
    </td>
    <!-- 預約時間 -->
    <td>
      {{ bookedDate }}<br />
      {{ props.order.BookedTimeFrame }}
    </td>
    <!-- 價格(訂金) -->
    <td>$ {{ props.order.Deposit }}</td>
    <!-- 訂單狀態 -->
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
const { formattedOutput } = useFormatted()
const payDate = ref()
const bookedDate = ref()
const newPayDate = ref()
const newBookedDate = ref()

newPayDate.value = new Date(props.order.PayDate)
newBookedDate.value = new Date(props.order.BookedDate)
payDate.value = formattedOutput(newPayDate.value)
bookedDate.value = formattedOutput(newBookedDate.value)
</script>
<style scoped></style>
