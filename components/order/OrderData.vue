<template>
  <div class="overflow-x-auto rounded-lg border">
    <div>
      <table class="w-full">
        <thead class="h-12 bg-primary">
          <tr>
            <th>認領圖</th>
            <th>名稱</th>
            <th>{{ props.role }}</th>
            <th>訂單編號</th>
            <th>交易日期</th>
            <th>預約時段</th>
            <th>訂金</th>
            <th>訂單狀態</th>
          </tr>
        </thead>
        <tbody>
          <tr class="h-[108px]">
            <td class="flex h-[108px] items-center justify-center">
              <img
                :src="`${props.order.Url}`"
                class="h-[100px] w-[100px] rounded-lg border bg-white object-cover object-center"
              />
            </td>
            <td>
              <div class="flex flex-col items-center">
                <p>{{ props.order.Name }}</p>
                <p>{{ props.order.Size }}</p>
              </div>
            </td>
            <td>
              <!-- 購買人 -->
              <p v-if="props.role === '訂購人'">{{ props.order.BuPurchaser }}</p>
              <p v-if="props.role === '刺青師'">{{ props.order.ArtistName }}</p>
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
            <td>{{ bookedDate }} {{ bookedTimeFrame }}</td>
            <td>$ {{ props.order.Deposit }}</td>
            <td>{{ orderStatus }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  order: {
    type: null,
    required: true
  },
  role: {
    type: String,
    default: '訂購人'
  }
})

const { transformDate, transformOrderStatus } = useFormatted()

const payDate = computed(() => {
  if (props.order) {
    return props.order.PayDate.slice(0, 10)
  }
})
const bookedDate = computed(() => {
  if (props.order) {
    return transformDate(props.order.BookedDate)
  }
})
const bookedTimeFrame = computed(() => {
  if (props.order) {
    return props.order.BookedTimeFrame.slice(0, 2)
  }
})
const orderStatus = computed(() => {
  if (props.order) {
    const status = props.order.OrderStatus
    return transformOrderStatus(status)
  }
})

const starAmount = props.order.star
const starArr = []
for (let i = 0; i < starAmount; i++) {
  starArr.push('ic:baseline-star')
}
</script>
