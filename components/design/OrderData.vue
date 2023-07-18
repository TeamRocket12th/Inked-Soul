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
            v-model="inputPaymentInfo.Realname"
            name="真實姓名"
            rules="required"
            class="formInput"
            :class="{ 'border-[#DC3545]': errors.真實姓名 }"
          />
          <Icon
            v-if="errors.真實姓名"
            name="ic:baseline-error-outline"
            class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
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
            v-model="inputPaymentInfo.Phone"
            name="聯絡電話"
            :rules="isPhone"
            class="formInput"
            :class="{ 'border-[#DC3545]': errors.聯絡電話 }"
          />
          <Icon
            v-if="errors.聯絡電話"
            name="ic:baseline-error-outline"
            class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
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
            v-model="inputPaymentInfo.Email"
            name="電子信箱"
            rules="required|email"
            class="formInput"
            :class="{ 'border-[#DC3545]': errors.電子信箱 }"
          />
          <Icon
            v-if="errors.電子信箱"
            name="ic:baseline-error-outline"
            class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
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
                    @click.prevent="togglePopover"
                  >
                    {{ inputPaymentInfo.BookedDate }}
                  </button>
                </template>
              </VDatePicker>
            </ClientOnly>
          </div>
        </div>
        <div>
          <p class="mb-2">預約時段</p>
          <div class="dropdown-bottom dropdown-end dropdown w-full">
            <!-- 📌 加 disabled 判斷  -->
            <label tabindex="0" class="formInput flex cursor-pointer items-center justify-between">
              {{ inputPaymentInfo.BookedTimeFrame || '請選擇' }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.2 9.2C15.3926 9.05557 15.6308 8.98545 15.8709 9.00252C16.111 9.01958 16.3369 9.12268 16.5071 9.29289C16.6773 9.46311 16.7804 9.689 16.7975 9.92911C16.8145 10.1692 16.7444 10.4074 16.6 10.6L12.6 14.6C12.4131 14.7832 12.1618 14.8859 11.9 14.8859C11.6382 14.8859 11.3869 14.7832 11.2 14.6L7.2 10.6C7.05557 10.4074 6.98545 10.1692 7.00252 9.92911C7.01958 9.689 7.12268 9.46311 7.29289 9.29289C7.46311 9.12268 7.689 9.01958 7.92911 9.00252C8.16922 8.98545 8.40743 9.05557 8.6 9.2L11.9 12.49L15.2 9.19V9.2Z"
                  fill="#6C6C6C"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="dropdown-content menu rounded-box z-10 w-full flex-nowrap overflow-scroll bg-base-100 p-2 shadow"
            >
              <li>
                <a
                  :class="{ 'pointer-events-none line-through': disabledTime.includes('0') }"
                  @click="selectTime(0)"
                  >上午（開店時間～12:00）</a
                >
              </li>
              <li>
                <a
                  :class="{ 'pointer-events-none line-through': disabledTime.includes('1') }"
                  @click="selectTime(1)"
                  >下午（12:00～18:00）</a
                >
              </li>
              <li>
                <a
                  :class="{ 'pointer-events-none line-through': disabledTime.includes('2') }"
                  @click="selectTime(2)"
                  >晚上（18:00～閉店時間））</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </VForm>

    <!-- ❌ -->
    <div>
      <p>input</p>
      {{ inputPaymentInfo }}
    </div>
    <div>
      <p>payment</p>
      {{ paymentInfo }}
      <p>已被預約時間</p>
      {{ bookedDate }}
    </div>
    <button @click="postOrder">test</button>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useOrderStore } from '~/stores/order'

const runtimeConfig = useRuntimeConfig()
const APIBASE = runtimeConfig.public.APIBASE
const authToken = useCookie('token')

const store = useOrderStore()
const { inputPaymentInfo, paymentInfo, designData } = storeToRefs(store)

// Composable
const { isPhone } = useValidate()
const { formattedOutput } = useFormatted()

const props = defineProps({
  artistId: {
    type: null,
    required: true
  }
})

// 取得刺青師可預約時間
const { data: artistInfo } = await useFetch(`${APIBASE}/api/artistbooking`, {
  headers: { 'Content-type': 'application/json' },
  method: 'POST',
  body: props.artistId
})

// 發送用戶下單資料
const postOrder = async () => {
  inputPaymentInfo.value.ImagesId = designData.value.ID
  // ⭕️ 正確的，測試先關掉
  // const tempBookedTimeFrame = paymentInfo.value.BookedTimeFrame
  // Object.assign(paymentInfo.value, inputPaymentInfo.value)
  // paymentInfo.value.BookedTimeFrame = tempBookedTimeFrame

  if (!authToken.value) {
    return ''
  } else {
    const { data: orderResponse } = await useFetch(`${APIBASE}/api/artistbookingpay`, {
      headers: { 'Content-type': 'application/json', Authorization: `Bearer ${authToken.value}` },
      method: 'POST',
      body: {
        BookedDate: inputPaymentInfo.value.BookedDate,
        BookedTimeFrame: paymentInfo.value.BookedTimeFrame,
        ImagesId: inputPaymentInfo.value.ImagesId
      }
    })
    if (!orderResponse.value) {
      console.log(orderResponse.value)
    }
  }
}

const closeDays = ref(artistInfo.value.response.ClosedDays)
const dayOff = ref(artistInfo.value.response.DayOff)
const bookedDate = artistInfo.value.Data.map((item) => {
  const formattedBookedDate = item.BookedDate.replace(/\//g, '-')
  const formattedBookedTimeFrame = []
  if (item.BookedTimeFrame.includes('上午（開店時間～12:00）')) {
    formattedBookedTimeFrame.push('0')
  }
  if (item.BookedTimeFrame.includes('下午（12:00～18:00）')) {
    formattedBookedTimeFrame.push('1')
  }
  if (item.BookedTimeFrame.includes('晚上（18:00～閉店時間）')) {
    formattedBookedTimeFrame.push('2')
  }
  return [formattedBookedDate, formattedBookedTimeFrame]
})

// const _startTime = props.time.StartTime
// const _endTime = props.time.EndTime

const date = new Date()
date.setDate(date.getDate() + 5)
inputPaymentInfo.value.BookedDate = date
const minDate = date.toISOString().slice(0, 10)

const toNumber = (week) => {
  const closeDaysMapping = {
    星期日: 1,
    星期一: 2,
    星期二: 3,
    星期三: 4,
    星期四: 5,
    星期五: 6,
    星期六: 7
  }
  return week.map((item) => {
    return closeDaysMapping[item]
  })
}

const selectDate = ref(inputPaymentInfo.value.BookedDate)
const selectTime = (time) => {
  switch (time) {
    case 0:
      inputPaymentInfo.value.BookedTimeFrame = '上午（開店時間～12:00）'
      paymentInfo.value.BookedTimeFrame = '時段一'
      break
    case 1:
      inputPaymentInfo.value.BookedTimeFrame = '下午（12:00～18:00）'
      paymentInfo.value.BookedTimeFrame = '時段二'
      break
    case 2:
      inputPaymentInfo.value.BookedTimeFrame = '晚上（18:00～閉店時間）'
      paymentInfo.value.BookedTimeFrame = '時段三'
      break
    default:
      inputPaymentInfo.value.BookedTimeFrame = '預約時段'
      break
  }
}

const disabledTime = ref('')
const disabledDates = ref([
  {
    repeat: {
      weekdays: toNumber(closeDays.value) // 📌 放入公休日 1~7
    }
  },
  ...dayOff.value
])

onMounted(() => {
  inputPaymentInfo.value.BookedDate = formattedOutput(date)
  isBookAvailable()
})

watch(selectDate, (newValue) => {
  inputPaymentInfo.value.BookedTimeFrame = ''
  disabledTime.value = ''
  inputPaymentInfo.value.BookedDate = formattedOutput(newValue)
  isBookAvailable()
})

// 判斷時段，還要加上可預約時段 （未完成）
const isBookAvailable = () => {
  bookedDate.map((item) => {
    if (item[1].length >= 3) {
      disabledDates.value.push(item[0])
    } else if (item[0] === inputPaymentInfo.value.BookedDate) {
      disabledTime.value = item[1]
    }
  })
}
</script>
