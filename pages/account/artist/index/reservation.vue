<template>
  <div class="grid grid-cols-7 items-end gap-10">
    <!-- <div class="col-span-3"> -->
    <VDatePicker
      v-model="date"
      :attributes="haveOrder"
      :disabled-dates="disabledDates"
      title-position="left"
      color="gray"
      class="col-span-3 py-8"
      expanded
    />
    <!-- </div> -->
    <div class="col-span-4">
      <p class="mb-10 text-xl font-bold">{{ selectDate }} 的預約</p>
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
                <td class="px-20">
                  <div
                    v-if="dateDetail[0]"
                    class="flex h-[108px] items-center justify-center gap-3"
                  >
                    <img
                      :src="dateDetail[0].ImgUrl"
                      class="h-[100px] w-[100px] rounded-lg border bg-white object-cover object-center"
                    />
                    <div class="flex flex-col items-start justify-center">
                      <p>{{ dateDetail[0].ImgName }}</p>
                      <p>{{ dateDetail[0].ImgSize }}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div v-if="dateDetail[0]" class="flex items-center justify-center gap-2">
                    <img
                      :src="dateDetail[0].BuPurchaserPhoto"
                      alt=""
                      class="h-6 w-6 rounded-full bg-white object-cover object-center"
                    />
                    <p>{{ dateDetail[0].BuPurchaser }}</p>
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
                      :src="dateDetail[1].ImgUrl"
                      class="h-[100px] w-[100px] rounded-lg border bg-white object-cover object-center"
                    />
                    <div class="flex flex-col items-start justify-center">
                      <p>{{ dateDetail[1].ImgName }}</p>
                      <p>{{ dateDetail[1].ImgSize }}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div v-if="dateDetail[1]" class="flex items-center justify-center gap-2">
                    <img
                      :src="dateDetail[1].BuPurchaserPhoto"
                      class="h-6 w-6 rounded-full bg-white object-cover object-center"
                    />
                    <p>{{ dateDetail[1].BuPurchaser }}</p>
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
                      :src="dateDetail[2].ImgUrl"
                      class="h-[100px] w-[100px] rounded-lg border bg-white object-cover object-center"
                    />
                    <div class="flex flex-col items-start justify-center">
                      <p>{{ dateDetail[2].ImgName }}</p>
                      <p>{{ dateDetail[2].ImgSize }}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div v-if="dateDetail[2]" class="flex items-center justify-center gap-2">
                    <img
                      :src="dateDetail[2].BuPurchaserPhoto"
                      class="h-6 w-6 rounded-full bg-white object-fill object-center"
                    />
                    <p>{{ dateDetail[2].BuPurchaser }}</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const authToken = useCookie('token')
const authCookie = useCookie('data')

const artistID = authCookie.value.Id // 對應刺青師ID
const runtimeConfig = useRuntimeConfig()
const APIBASE = runtimeConfig.public.APIBASE

const { formattedOutput, transformWeek } = useFormatted()

const date = ref(new Date())
const selectDate = ref('')

const closeDate = ref('')
const dayOff = ref('')
const scheduleData = ref('')
const dateDetail = ref('')

const disabledDates = computed(() => [
  {
    repeat: {
      weekdays: closeDate.value // 📌 放入公休日 1~7
    }
  },
  ...dayOff.value
])
const haveOrder = computed(() => [
  {
    key: 'haveOrder',
    dates: scheduleData.value, // 需要轉換成 Array
    highlight: {
      color: 'black',
      fillMode: 'outline'
    }
  }
])

// 先取得沒開的時間
const getSchedule = async () => {
  const { data: scheduleResponse } = await useFetch(`${APIBASE}/api/artistbooking`, {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${authToken.value}`
    },
    method: 'POST',
    body: artistID
  })
  closeDate.value = transformWeek(scheduleResponse.value.response.ClosedDays)

  dayOff.value = scheduleResponse.value.response.DayOff
  scheduleData.value = scheduleResponse.value.Data.map((item) => {
    return item.BookedDate
  })
}

watch(
  date,
  async () => {
    selectDate.value = formattedOutput(date.value)

    const { data: dateResponse } = await useFetch(`${APIBASE}/api/orderday`, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${authToken.value}`
      },
      method: 'POST',
      body: {
        BookedDate: selectDate.value
      }
    })
    if (dateResponse.value && dateResponse.value !== '此日期無訂單') {
      dateDetail.value = dateResponse.value.Data
    } else {
      dateDetail.value = { Data: [] }
    }
  },
  {
    immediate: true
  }
)

onMounted(() => {
  nextTick(() => {
    getSchedule()
  })
})
</script>
<style scoped>
th {
  font-weight: 700;
}
</style>
