<template>
  <div>
    <h3 class="mb-[60px]">升級方案</h3>
    <div>
      <ul class="grid grid-cols-3 gap-8">
        <li
          v-for="(info, key) in memberShipPlan"
          :key="key"
          class="flex flex-col items-center gap-10 rounded border px-[44px] py-[28px]"
        >
          <p class="border-b">
            {{ info.title }}
          </p>
          <p>${{ info.pirce }}</p>
          <button>{{ info.yourPlan ? '目前方案' : '選擇方案' }}</button>
          <ul>
            <li v-for="(detail, key) in info.planInfo" :key="key">
              {{ detail }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
const memberShipPlan = [
  {
    title: '免費方案',
    pirce: '0',
    yourPlan: true,
    planInfo: ['不限時間', '免費上傳五張認領圖', '免費上傳五張作品集']
  },
  {
    title: '月費方案',
    pirce: '600',
    yourPlan: false,
    planInfo: ['一個月內', '無限上傳認領圖', '無限上傳作品集']
  },
  {
    title: '免費方案',
    pirce: '5000',
    yourPlan: false,
    planInfo: ['一年內', '無限上傳認領圖', '無限上傳作品集']
  }
]
</script>
<style scoped></style>
