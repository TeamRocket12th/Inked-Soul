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
    <!-- 預約時間 -->
    <td>{{ bookedDate }} {{ bookedTimeFrame }}</td>
    <!-- 訂單狀態 -->
    <td>
      <span class="rounded-full bg-black px-3 py-1 text-white">
        {{ orderStatus }}
      </span>
    </td>
    <td>
      <!-- 購買人 -->
      {{ props.order.BuPurchaser }}
    </td>
    <td>
      <!-- 訂單編號 -->
      <p class="line-clamp-1 px-2">
        {{ props.order.Number }}
      </p>
    </td>
    <td>
      <!-- 交易日期 -->
      {{ payDate }}
    </td>

    <!-- 價格(訂金) -->
    <td>$ {{ props.order.Deposit }}</td>
  </tr>
</template>
<script setup>
const props = defineProps({
  order: {
    type: Object,
    required: true
  }
})

const authCookie = useCookie('data')

const { formattedOutput, transformOrderStatus } = useFormatted()
const payDate = ref()
const bookedDate = ref()
const newPayDate = ref()
const newBookedDate = ref()

const orderStatus = computed(() => {
  if (props.order) {
    const status = props.order.OrderStatus
    const role = authCookie.value.Role

    return transformOrderStatus(status, role)
  }
})
const bookedTimeFrame = computed(() => {
  if (props.order) {
    return props.order.BookedTimeFrame.slice(0, 2)
  }
})

newPayDate.value = new Date(props.order.PayDate)
newBookedDate.value = new Date(props.order.BookedDate)
payDate.value = formattedOutput(newPayDate.value)
bookedDate.value = formattedOutput(newBookedDate.value)
</script>
<style scoped></style>
