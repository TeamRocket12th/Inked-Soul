<template>
  <div class="flex flex-col gap-5">
    <div class="flex flex-row justify-between gap-2">
      <div class="flex w-full flex-col items-start gap-1">
        <span>公休日</span>
        <div class="dropdown-end dropdown w-full">
          <label
            tabindex="0"
            class="btn-outline btn my-1 mb-1 h-auto w-full border-[#D0D0D0] bg-white py-2"
          >
            <span>
              <!-- v-for="(day, key) in ArtistCloseDay" :key="key" -->
              {{ artistInfoData.ClosedDays }}
              <!-- {{ day.week }} -->
            </span>
          </label>
          <ul
            tabindex="0"
            class="dropdown-content menu rounded-box z-10 w-full flex-nowrap overflow-scroll bg-base-100 p-2 shadow"
          >
            <li v-for="(day, key) in weeks" :key="key" @click="SelectCloseDays(day)" class="m-1">
              <a :class="{ 'bg-gray-100': ArtistCloseDay.includes(day) }">{{ day.week }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="w-full">
        <p class="mb-2">新增臨時公休日</p>
        <div>
          <VDatePicker v-model="selectDayoff" color="gray">
            <template #default="{ togglePopover }">
              <button
                class="formInput rounded-md px-3 py-2 text-sm font-semibold text-black"
                @click="togglePopover"
              >
                {{ formatDate }}
              </button>
            </template>
          </VDatePicker>
        </div>
      </div>
    </div>

    <div class="flex flex-row justify-between gap-2">
      <div class="flex flex-1 flex-col items-start gap-1">
        <span>開店時間</span>
        <div class="dropdown-hover dropdown w-full">
          <label tabindex="0" class="btn-outline btn mb-1 w-full border-[#D0D0D0]">{{
            ArtistOpenTime
          }}</label>
          <ul
            tabindex="0"
            class="dropdown-content menu rounded-box z-10 h-[300px] w-full flex-nowrap overflow-scroll bg-base-100 p-2 shadow"
          >
            <li
              v-for="(hour, key) in time"
              :key="key"
              @click="SelectTime('open', hour)"
              class="m-1"
            >
              <a :class="{ 'bg-gray-100': ArtistOpenTime.includes(hour) }">{{ hour }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-1 flex-col items-start gap-1">
        <span>閉店時間</span>
        <div class="dropdown-hover dropdown w-full">
          <label tabindex="0" class="btn-outline btn mb-1 w-full border-[#D0D0D0]">{{
            ArtistCloseTime
          }}</label>
          <ul
            tabindex="0"
            class="dropdown-content menu rounded-box z-10 h-[300px] w-full flex-nowrap overflow-scroll bg-base-100 p-2 shadow"
          >
            <li
              v-for="(hour, key) in time"
              :key="key"
              @click="SelectTime('close', hour)"
              class="m-1"
            >
              <a :class="{ 'bg-gray-100': ArtistCloseTime.includes(hour) }">{{ hour }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <p v-if="AlertSelect">{{ AlertSelect }}</p>
    <div class="flex flex-col items-start gap-1">
      <span>可供預約時段</span>
      <ul class="flex flex-wrap gap-2">
        <li
          v-for="(part, key) in timeFrame"
          :key="key"
          @click="SelectTimeFrame(part.id)"
          class="rounded-full border px-3 py-1 text-center"
          :class="{ 'bg-black text-white': ArtistAvailableTimeFrame.includes(part.id) }"
        >
          <a>{{ part.time }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useAccountStore } from '~/stores/account'

const weeks = [
  { id: 1, week: '星期一' },
  { id: 2, week: '星期二' },
  { id: 3, week: '星期三' },
  { id: 4, week: '星期四' },
  { id: 5, week: '星期五' },
  { id: 6, week: '星期六' },
  { id: 7, week: '星期日' }
]
const time = [
  '01:00',
  '02:00',
  '03:00',
  '04:00',
  '05:00',
  '06:00',
  '07:00',
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
  '23:00',
  '24:00'
]
const timeFrame = [
  { id: 0, time: '上午（開店時間～12:00）' },
  { id: 1, time: '下午（12:00~18:00' },
  { id: 2, time: '晚上（18:00~閉店時間）' }
]

const store = useAccountStore()
const { artistInfoData } = storeToRefs(store)
const { formatDate, formattedOutput } = useFormatted()

// 要get API 的值（需要轉換格式）
const ArtistCloseDay = ref([weeks[0]])
const ArtistOpenTime = ref('請選擇')
const ArtistCloseTime = ref('請選擇')
const ArtistAvailableTimeFrame = ref([])
const ArtistDayoff = ref('')

const date = new Date()
const selectDayoff = ref('')

onMounted(() => {
  ArtistDayoff.value = formattedOutput(date)
})
watch(selectDayoff, (newValue) => {
  ArtistDayoff.value = formattedOutput(newValue)
  artistInfoData.value.DayOff = ArtistDayoff.value
})

const AlertSelect = ref(false)

const SelectCloseDays = (day) => {
  if (ArtistCloseDay.value.includes(day) === false) {
    ArtistCloseDay.value.push(day)
    ArtistCloseDay.value.sort((a, b) => {
      const indexA = Object.values(a)[0]
      const indexB = Object.values(b)[0]
      return indexA - indexB
    })
  } else {
    const index = ArtistCloseDay.value.indexOf(day)
    ArtistCloseDay.value.splice(index, 1)
    if (ArtistCloseDay.value.length === 0) {
      ArtistCloseDay.value.splice(index, 1, day)
    }
  }

  artistInfoData.value.ClosedDays = ArtistCloseDay.value
    .map((item) => {
      return item.week
    })
    .join()
}
const SelectTime = (status, time) => {
  if (status === 'open') {
    ArtistOpenTime.value = time
  } else {
    ArtistCloseTime.value = time
  }

  if (ArtistCloseTime.value <= ArtistOpenTime.value) {
    AlertSelect.value = '你確定'
  } else {
    AlertSelect.value = false
  }

  artistInfoData.value.StartTime = ArtistOpenTime.value
  artistInfoData.value.EndTime = ArtistCloseTime.value
}

const SelectTimeFrame = (part) => {
  if (ArtistAvailableTimeFrame.value.includes(part) === false) {
    ArtistAvailableTimeFrame.value.push(part)
    ArtistAvailableTimeFrame.value.sort((a, b) => {
      return a - b
    })
  } else {
    const index = ArtistAvailableTimeFrame.value.indexOf(part)
    ArtistAvailableTimeFrame.value.splice(index, 1)
    if (ArtistAvailableTimeFrame.value.length === 0) {
      ArtistAvailableTimeFrame.value.splice(index, 1, part)
    }
  }

  const timeFrameMapping = {
    0: '時段一',
    1: '時段二',
    2: '時段三'
  }

  artistInfoData.value.TimeFrame = ArtistAvailableTimeFrame.value
    .map((item) => timeFrameMapping[item])
    .join()
}
</script>
<style></style>
