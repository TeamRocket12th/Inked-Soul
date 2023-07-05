<template>
  <div class="grid grid-cols-2 items-center">
    <VDatePicker
      v-model="date"
      :disabled-dates="disabledDates"
      title-position="left"
      color="gray"
    />
    <!-- <p class="mb-[33px]">2023年1月15日的預約 (ＡＰＩ資料)</p> -->
    <div class="overflow-scroll">
      <table class="orderTable">
        <thead>
          <tr>
            <th>時段</th>
            <th>認領圖</th>
            <th>訂購人</th>
          </tr>
        </thead>
        <tbody v-if="isLoading">
          <tr>
            <th>上午</th>
            <th class="flex flex-row items-center justify-center gap-3">
              <img
                :src="dateDetail['上午'].Image"
                alt=""
                class="h-[100px] w-[100px] rounded-lg border border-[#D0D0D0] bg-white object-contain object-center"
              />
              <div class="text-left">
                <p>墨水中的靈魂</p>
                <p>12cm*12cm</p>
              </div>
            </th>
            <th>{{ dateDetail['上午'].Purchaser }}</th>
          </tr>
          <tr>
            <th>下午</th>
            <th>{{ dateDetail['下午'].Image }}</th>
            <th>{{ dateDetail['下午'].Purchaser }}</th>
          </tr>
          <tr>
            <th>晚上</th>
            <th>{{ dateDetail['晚上'].Image }}</th>
            <th>{{ dateDetail['晚上'].Purchaser }}</th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
const date = ref(new Date())
const selectDate = ref('')

const isLoading = ref('')

const cookie = useCookie('token')
const artistID = cookie.value.data.ID // 對應刺青師ID
const runtimeConfig = useRuntimeConfig()
const apiBase = runtimeConfig.public.apiBase

const dateDetail = ref('')

const disabledDates = ref([
  {
    repeat: {
      weekdays: [1, 2] // 📌 放入公休日 1~7
    }
  }
])

watch(
  date,
  async () => {
    const { data, error } = await useFetch(`${apiBase}/artist/getReserve/${artistID}`)
    console.log(data.value.Data['2023-07-01'])
    isLoading.value = true

    dateDetail.value = data.value.Data['2023-07-01'] // 日期會對照 date (因為還不確定格式，還沒轉換格式)
  },
  {
    immediate: true
  }
)
</script>
<style scoped>
.orderTable {
  border-collapse: collapse;
  min-width: 300px;
}
.orderTable thead th {
  padding: 20px;
  white-space: nowrap;
}
.orderTable tbody tr {
  height: 106px;
}
.orderTable tbody tr th {
  font-size: 16px;
  font-weight: 400;
  margin: 0 50px;
  width: max-content;
}
.orderTable tbody tr:nth-of-type(odd) {
  background-color: #f0f0f0;
}
</style>
