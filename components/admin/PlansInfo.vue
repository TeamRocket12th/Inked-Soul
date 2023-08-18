<template>
  <div class="mx-auto mb-20 flex w-[496px] flex-col rounded-lg border">
    <div class="flex flex-col items-center gap-4 bg-primary py-5">
      <button class="btn-outline btn rounded bg-white px-6 py-3">免費會員</button>
      <p class="text-[#6C6C6C]">無限期</p>
    </div>
    <ul class="grid grid-cols-3 gap-[56px] px-[108px] py-10">
      <li class="flex flex-col items-center gap-2">
        <div
          class="flex h-14 w-14 flex-col justify-center rounded-full border-[4px] text-center align-middle"
        >
          <span> 5張 </span>
        </div>
        <p>認領圖</p>
      </li>
      <li class="flex flex-col items-center gap-2">
        <div
          class="flex h-14 w-14 flex-col justify-center rounded-full border-[4px] text-center align-middle"
        >
          <span> 5張 </span>
        </div>
        <p>作品集</p>
      </li>
      <li class="flex flex-col items-center gap-2">
        <div
          class="flex h-14 w-14 flex-col justify-center rounded-full border-[4px] text-center align-middle"
        >
          <span> ∞ </span>
        </div>
        <p>會期</p>
      </li>
    </ul>
  </div>

  <div>
    <h4 class="mb-[26px]">升級方案</h4>
    <div>
      <ul class="grid grid-cols-3 gap-8">
        <li v-for="(info, key) in planInfo" :key="key">
          <NuxtLink :to="`membership/${key}`">
            <PlansCard :info="info" class="hover:bg-primary" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import PlansCard from '~/components/admin/PlansCard.vue'

const planInfo = [
  {
    title: '免費方案',
    price: '0',
    yourPlan: true,
    planInfo: ['不限時間', '免費上傳五張認領圖', '免費上傳五張作品集']
  },
  {
    title: '月費方案',
    price: '600',
    yourPlan: false,
    planInfo: ['一個月內', '無限上傳認領圖', '無限上傳作品集']
  },
  {
    title: '年費方案',
    price: '5000',
    yourPlan: false,
    planInfo: ['一年內', '無限上傳認領圖', '無限上傳作品集']
  }
]
</script>
<style scoped></style>
