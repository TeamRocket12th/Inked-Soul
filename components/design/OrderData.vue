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
                v-model="userData.date"
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
          <select v-model="userData.time" class="formInput">
            <option>上午（開店時間-12:00）</option>
            <option>下午（12:00-18:00）</option>
            <option>晚上（18:00-閉店時間）</option>
          </select>
        </div>
      </div>
    </VForm>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useOrderStore } from '~/stores/order'

const props = defineProps({
  time: {
    require: true
  }
})

const closeDays = props.time.ClosedDays
const dayOff = props.time.DayOff
const startTime = props.time.StartTime
const endTime = props.time.EndTime

// output: '7,1' -> ['7','1']
const toArray = (string) => {
  return string.split(',').map((item) => {
    return parseInt(item)
  })
}

const store = useOrderStore()
const { userData } = storeToRefs(store)

const date = new Date()
date.setDate(date.getDate() + 5)
userData.date = date
const minDate = date.toISOString().slice(0, 10)

const disabledDates = ref([
  {
    repeat: {
      weekdays: toArray(closeDays) // 📌 放入公休日 1~7
    }
  },
  '2023-7-20'
])

const { isPhone } = useValidate()
const { formatDate, formattedOutput } = useFormatted()

onMounted(() => {
  userData.date = formattedOutput(date)
})

watch(userData.value, () => {
  userData.date = formattedOutput(userData.value.date)
})
</script>
