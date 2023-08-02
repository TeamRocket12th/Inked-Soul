<template>
  <div class="grid grid-cols-7 items-end gap-5">
    <!-- <p class="mb-10 text-xl font-bold">{{ selectDate }} 的預約</p> -->

    <VDatePicker
      v-model="date"
      :attributes="haveOrder"
      :disabled-dates="disabledDates"
      color="gray"
      class="col-span-7 px-10 py-5"
      :columns="2"
      expanded
    />
    <div class="col-span-7">
      <div>
        <div>
          <table class="w-full">
            <thead class="h-[60px] w-full">
              <tr>
                <th class="w-[80px]">時段</th>
                <th>認領圖</th>
                <th class="w-[80px]">訂購人</th>
              </tr>
            </thead>
            <transition>
              <tbody v-if="dateDetail">
                <tr class="h-[108px] odd:bg-primary">
                  <td>
                    <p>上午</p>
                  </td>
                  <td class="">
                    <transition>
                      <div v-if="dateDetail['上午']" class="flex items-center justify-center gap-3">
                        <img
                          :src="dateDetail['上午'].ImgUrl"
                          class="h-[100px] w-[100px] rounded-lg border bg-white object-cover object-center"
                        />
                        <div class="flex flex-col items-start justify-center">
                          <p>{{ dateDetail['上午'].ImgName }}</p>
                          <p>{{ dateDetail['上午'].ImgSize }}</p>
                        </div>
                      </div>
                    </transition>
                  </td>
                  <td>
                    <div v-if="dateDetail['上午']" class="flex items-center justify-center gap-2">
                      <img
                        :src="dateDetail['上午'].BuPurchaserPhoto"
                        alt=""
                        class="h-6 w-6 rounded-full bg-white object-cover object-center"
                      />
                      <p>{{ dateDetail['上午'].BuPurchaser }}</p>
                    </div>
                  </td>
                </tr>
                <tr class="h-[108px] border-y border-[#D0D0D0] odd:bg-primary">
                  <td class="">
                    <p>下午</p>
                  </td>
                  <td>
                    <transition>
                      <div v-if="dateDetail['下午']" class="flex items-center justify-center gap-3">
                        <img
                          :src="dateDetail['下午'].ImgUrl"
                          class="h-[100px] w-[100px] rounded-lg border bg-white object-cover object-center"
                        />
                        <div class="flex flex-col items-start justify-center">
                          <p>{{ dateDetail['下午'].ImgName }}</p>
                          <p>{{ dateDetail['下午'].ImgSize }}</p>
                        </div>
                      </div>
                    </transition>
                  </td>
                  <td>
                    <div v-if="dateDetail['下午']" class="flex items-center justify-center gap-2">
                      <img
                        :src="dateDetail['下午'].BuPurchaserPhoto"
                        class="h-6 w-6 rounded-full bg-white object-cover object-center"
                      />
                      <p>{{ dateDetail['下午'].BuPurchaser }}</p>
                    </div>
                  </td>
                </tr>
                <tr class="h-[108px] odd:bg-primary">
                  <td class="">
                    <p>晚上</p>
                  </td>
                  <td>
                    <transition>
                      <div v-if="dateDetail['晚上']" class="flex items-center justify-center gap-3">
                        <img
                          :src="dateDetail['晚上'].ImgUrl"
                          class="h-[100px] w-[100px] rounded-lg border bg-white object-cover object-center"
                        />
                        <div class="flex flex-col items-start justify-center">
                          <p>{{ dateDetail['晚上'].ImgName }}</p>
                          <p>{{ dateDetail['晚上'].ImgSize }}</p>
                        </div>
                      </div>
                    </transition>
                  </td>
                  <td>
                    <div v-if="dateDetail['晚上']" class="flex items-center justify-center gap-2">
                      <img
                        :src="dateDetail['晚上'].BuPurchaserPhoto"
                        class="h-6 w-6 rounded-full bg-white object-fill object-center"
                      />
                      <p>{{ dateDetail['晚上'].BuPurchaser }}</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </transition>
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
const dateDetail = ref({})

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
    dateDetail.value = {}
    selectDate.value = formattedOutput(date.value)

    const res = await $fetch(`${APIBASE}/api/orderday`, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${authToken.value}`
      },
      method: 'POST',
      body: {
        BookedDate: selectDate.value
      }
    })

    const orderData = res.DataList
    if (orderData && orderData !== '此日期無訂單') {
      orderData.forEach((item) => {
        if (item.BookedTimeFrame.startsWith('上午')) {
          dateDetail.value['上午'] = item
        }
        if (item.BookedTimeFrame.startsWith('下午')) {
          dateDetail.value['下午'] = item
        }
        if (item.BookedTimeFrame.startsWith('晚上')) {
          dateDetail.value['晚上'] = item
        }
      })
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

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
}
</style>
