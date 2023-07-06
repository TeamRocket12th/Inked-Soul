<template>
  <!-- <div
    v-if="props.status === '已評價'"
    class="absolute right-0 top-16 hidden w-[300px] border-[1px] border-black p-4 group-hover:block"
  >
    <div class="flex justify-between">
      <div class="flex">
        <img :src="`${props.order.ArtistImg}`" alt="" class="rounede-full w-[20%]" />
        <span>{{ props.order.Artist }}</span>
      </div>
      <p>{{ props.order.CommentDate }}</p>
    </div>
    <div class="flex">
      <Icon :name="`${item}`" size:24 v-for="(item, index) in starArr" :key="index" />
    </div>
    <div class="">
      <p>{{ props.order.Comment }}</p>
    </div>
  </div> -->

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
            <td>{{ props.order.Date }} {{ props.order.Time }}</td>
            <td>$ {{ props.order.Deposit }}</td>
            <td>{{ props.order.Status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  order: {
    type: Object,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  role: {
    default: '訂購人'
  }
})

const starAmount = props.order.star
const starArr = []
for (let i = 0; i < starAmount; i++) {
  starArr.push('ic:baseline-star')
}
</script>
