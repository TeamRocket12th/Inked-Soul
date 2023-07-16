<template>
  <div class="grid grid-cols-7 items-end gap-10">
    <div class="col-span-3">
      <VDatePicker
        v-model="date"
        :disabled-dates="disabledDates"
        title-position="left"
        color="gray"
        expanded
      />
    </div>

    <div class="col-span-4">
      <p class="mb-[33px]">2023年1月15日的預約 (ＡＰＩ資料)</p>
      <div class="overflow-x-auto">
        <div>
          <table>
            <thead class="h-[60px] w-full">
              <tr>
                <th>時段</th>
                <th>認領圖</th>
                <th>訂購人</th>
              </tr>
            </thead>
            <tbody>
              <tr class="h-[108px] odd:bg-primary">
                <td class="">
                  <p>上午</p>
                </td>
                <td>
                  <div
                    v-if="dateDetail[0]"
                    class="flex h-[108px] items-center justify-center gap-3"
                  >
                    <img
                      src=""
                      class="h-[100px] w-[100px] rounded-lg border bg-white object-cover object-center"
                    />
                    <div class="flex flex-col items-start justify-center">
                      <p>name</p>
                      <p>size</p>
                    </div>
                  </div>
                </td>
                <td class="">
                  <div v-if="dateDetail[0]" class="flex items-center justify-center gap-2">
                    <img
                      src=""
                      alt=""
                      class="h-6 w-6 rounded-full bg-white object-fill object-center"
                    />
                    <p>name</p>
                  </div>
                </td>
              </tr>
              <tr class="h-[108px] border-y border-[#D0D0D0] odd:bg-primary">
                <td class="">
                  <p>下午</p>
                </td>
                <td>
                  <div
                    v-if="dateDetail[1]"
                    class="flex h-[108px] items-center justify-center gap-3"
                  >
                    <img
                      class="h-[100px] w-[100px] rounded-lg border bg-white object-cover object-center"
                    />
                    <div class="flex flex-col items-start justify-center">
                      <p>name</p>
                      <p>size</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div v-if="dateDetail[1]" class="flex items-center justify-center gap-2">
                    <img
                      src=""
                      alt=""
                      class="h-6 w-6 rounded-full bg-white object-fill object-center"
                    />
                    <p>name</p>
                  </div>
                </td>
              </tr>
              <tr class="h-[108px] odd:bg-primary">
                <td class="">
                  <p>晚上</p>
                </td>
                <td>
                  <div
                    v-if="dateDetail[2]"
                    class="flex h-[108px] items-center justify-center gap-3"
                  >
                    <img
                      class="h-[100px] w-[100px] rounded-lg border bg-white object-cover object-center"
                    />
                    <div class="flex flex-col items-start justify-center">
                      <p>name</p>
                      <p>size</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div v-if="dateDetail[2]" class="flex items-center justify-center gap-2">
                    <img
                      src=""
                      alt=""
                      class="h-6 w-6 rounded-full bg-white object-fill object-center"
                    />
                    <p>name</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  {{ dateDetail }}
</template>
<script setup>
const authToken = useCookie('token')
const authCookie = useCookie('data')

const artistID = authCookie.value.Id // 對應刺青師ID
const runtimeConfig = useRuntimeConfig()
const APIBASE = runtimeConfig.public.APIBASE

const { formattedOutput } = useFormatted()

const date = ref(new Date())
const selectDate = ref('')

const isLoading = ref('')
const dateDetail = ref('')

const disabledDates = ref([
  {
    repeat: {
      weekdays: [1, 2] // 📌 放入公休日 1~7
    }
  }
])

// 先取得沒開的時間
const getCloseDay = async () => {
  const { data } = await useFetch(`${APIBASE}/api/`, {})
}

watch(
  date,
  async () => {
    selectDate.value = formattedOutput(date.value)

    // ❌ 好像不是這隻ＡＰＩ
    const { data, error } = await useFetch(`${APIBASE}/api/orderday`, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${authToken.value}`
      },
      method: 'POST',
      body: {
        BookedDate: selectDate.value
      }
    })
    isLoading.value = true

    dateDetail.value = data.value.Data
    // dateDetail.value = data.value.Data['2023-07-01'] // 日期會對照 date (因為還不確定格式，還沒轉換格式)
  },
  {
    immediate: true
  }
)
</script>
<style scoped>
th {
  font-weight: 700;
}
</style>
