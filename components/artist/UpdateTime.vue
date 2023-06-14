<template>
  <div>
    <div class="flex flex-col">
      <span>公休日</span>
      <div class="dropdown-end dropdown">
        <label tabindex="0" class="btn mb-1 w-full">
          <span v-for="(day, key) in ArtistCloseDay" :key="key"> {{ day.week }} </span>
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
    <div class="flex flex-row justify-between gap-2">
      <div class="flex flex-1 flex-col">
        <span>開店時間</span>
        <div class="dropdown-hover dropdown">
          <label tabindex="0" class="btn mb-1 w-full">{{ ArtistOpenTime }}</label>
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
      <div class="flex flex-1 flex-col">
        <span>閉店時間</span>
        <div class="dropdown-hover dropdown">
          <label tabindex="0" class="btn mb-1 w-full">{{ ArtistCloseTime }}</label>
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
    <div class="flex flex-col">
      <span>可供預約時段</span>
      <div class="dropdown-hover dropdown">
        <label tabindex="0" class="btn mb-1 w-full">
          <span v-for="(part, key) in ArtistAvailableTimeFrame" :key="key">
            {{ part }}
          </span>
        </label>
        <ul
          tabindex="0"
          class="dropdown-content menu rounded-box z-10 w-full flex-nowrap overflow-scroll bg-base-100 p-2 shadow"
        >
          <li
            v-for="(part, key) in timeFrame"
            :key="key"
            @click="SelectTimeFrame(part)"
            class="m-1"
          >
            <a :class="{ 'bg-gray-100': ArtistAvailableTimeFrame.includes(part) }">{{ part }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
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
const timeFrame = ['上午（開店時間～12:00）', '下午（12:00~18:00）', '晚上（18:00~閉店時間）']

// 要傳給 API 的值（需要轉換格式）
const ArtistCloseDay = ref([weeks[0]])
const ArtistOpenTime = ref('09:00')
const ArtistCloseTime = ref('22:00')
const ArtistAvailableTimeFrame = ref([timeFrame[0]])

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
}

const SelectTimeFrame = (part) => {
  if (ArtistAvailableTimeFrame.value.includes(part) === false) {
    ArtistAvailableTimeFrame.value.push(part)
    ArtistAvailableTimeFrame.value.sort((a, b) => {
      const order = {
        '上午（開店時間～12:00)': 1,
        '下午（12:00~18:00）': 2,
        '晚上（18:00~閉店時間）': 3
      }
      return order[a] - order[b]
    })
  } else {
    const index = ArtistAvailableTimeFrame.value.indexOf(part)
    ArtistAvailableTimeFrame.value.splice(index, 1)
    if (ArtistAvailableTimeFrame.value.length === 0) {
      ArtistAvailableTimeFrame.value.splice(index, 1, part)
    }
  }
}
</script>
<style></style>
