<template>
  <div class="flex flex-col gap-5">
    <h4>預約資料</h4>
    <VForm v-slot="{ errors, meta }" class="flex flex-col gap-5">
      <div class="relative flex flex-col gap-2">
        <div class="flex flex-row items-center justify-between">
          <label for="realName" class="cursor-pointer">真實姓名</label>
          <VErrorMessage name="真實姓名" class="whitespace-nowrap text-[#DC3545]" />
        </div>
        <div class="relative">
          <VField
            id="realName"
            v-model="userData.name"
            name="真實姓名"
            rules="required"
            class="formInput"
            :class="{ 'border-[#DC3545]': errors.真實姓名 }"
          />
          <Icon
            name="ic:baseline-error-outline"
            class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
            v-if="errors.真實姓名"
          />
        </div>
      </div>
      <div class="relative flex flex-col gap-2">
        <div class="flex flex-row items-center justify-between">
          <label for="phone" class="cursor-pointer">聯絡電話</label>
          <VErrorMessage name="聯絡電話" class="whitespace-nowrap text-[#DC3545]" />
        </div>
        <div class="relative">
          <VField
            id="phone"
            v-model="userData.tel"
            name="聯絡電話"
            :rules="isPhone"
            class="formInput"
            :class="{ 'border-[#DC3545]': errors.聯絡電話 }"
          />
          <Icon
            name="ic:baseline-error-outline"
            class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
            v-if="errors.聯絡電話"
          />
        </div>
      </div>
      <div class="relative flex flex-col gap-2">
        <div class="flex flex-row items-center justify-between">
          <label for="phone" class="cursor-pointer">電子信箱</label>
          <VErrorMessage name="電子信箱" class="whitespace-nowrap text-[#DC3545]" />
        </div>
        <div class="relative">
          <VField
            v-model="userData.email"
            name="電子信箱"
            rules="required|email"
            class="formInput"
            :class="{ 'border-[#DC3545]': errors.電子信箱 }"
          />
          <Icon
            name="ic:baseline-error-outline"
            class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
            v-if="errors.電子信箱"
          />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-5">
        <!-- 月曆 -->
        <div>
          <p class="mb-2">預約日期</p>
          <div>
            <ClientOnly>
              <VDatePicker
                v-model="selectDate"
                :min-date="minDate"
                :disabled-dates="disabledDates"
                color="gray"
              >
                <template #default="{ togglePopover }">
                  <button
                    class="formInput rounded-md px-3 py-2 text-sm font-semibold text-black"
                    @click="togglePopover"
                  >
                    {{ formatDate }}
                  </button>
                </template>
              </VDatePicker>
            </ClientOnly>
          </div>
        </div>
        <div>
          <p class="mb-2">預約時段</p>
          <div class="dropdown-bottom dropdown-end dropdown w-full">
            <label tabindex="0" class="btn w-full">{{ userData.time }}</label>
            <ul
              tabindex="0"
              class="dropdown-content menu rounded-box z-10 w-full flex-nowrap overflow-scroll bg-base-100 p-2 shadow"
            >
              <li>
                <a
                  @click="selectTime(0)"
                  :class="{ 'pointer-events-none line-through': disabledTime.includes('0') }"
                  >上午（開店時間-12:00）</a
                >
              </li>
              <li>
                <a
                  @click="selectTime(1)"
                  :class="{ 'pointer-events-none line-through': disabledTime.includes('1') }"
                  >下午（12:00-18:00）</a
                >
              </li>
              <li>
                <a
                  @click="selectTime(2)"
                  :class="{ 'pointer-events-none line-through': disabledTime.includes('2') }"
                  >晚上（18:00-閉店時間）</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </VForm>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useOrderStore } from '~/stores/order'

const store = useOrderStore()
const { userData } = storeToRefs(store)

const props = defineProps({
  time: {
    require: true
  }
})

const closeDays = props.time.ClosedDays
const dayOff = props.time.DayOff
const _startTime = props.time.StartTime
const _endTime = props.time.EndTime

const date = new Date()
date.setDate(date.getDate() + 5)
userData.date = date
const minDate = date.toISOString().slice(0, 10)

// output: '7,1' -> ['7','1']
const toArray = (string) => {
  return string.split(',').map((item) => {
    return parseInt(item)
  })
}

const disabledTime = ref('')
const selectDate = ref(userData.value.date)
const selectTime = (time) => {
  switch (time) {
    case 0:
      userData.value.time = '上午（開店時間-12:00）'
      break
    case 1:
      userData.value.time = '下午（12:00-18:00）'
      break
    case 2:
      userData.value.time = '晚上（18:00-閉店時間）'
      break
    default:
      userData.value.time = '預約時段'
      break
  }
}

const disabledDates = ref([
  {
    repeat: {
      weekdays: toArray(closeDays) // 📌 放入公休日 1~7
    }
  },
  dayOff
])

// Composable
const { isPhone } = useValidate()
const { formatDate, formattedOutput } = useFormatted()

onMounted(() => {
  userData.value.date = formattedOutput(date)
  isBookAvailable()
})

watch(selectDate, (newValue) => {
  userData.value.date = formattedOutput(newValue)
  isBookAvailable()
})

// 已被預約時間
const booked = [
  ['2023-07-27', ['0', '1', '2']],
  ['2023-07-31', ['0', '2']]
]

const isBookAvailable = () => {
  booked.map((item) => {
    if (item[1].length >= 3) {
      disabledDates.value.push(item[0])
    } else if (item[0] === formatDate.value) {
      disabledTime.value = item[1]
    } else {
      disabledTime.value = ''
    }
  })
}
</script>
