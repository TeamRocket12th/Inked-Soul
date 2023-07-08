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
        <li v-for="(info, key) in memberShipPlan" :key="key">
          <NuxtLink to="membership/123">
            <div
              class="flex flex-col items-center gap-10 rounded border py-[28px] duration-200 hover:bg-primary"
            >
              <div class="border-b border-black px-6 py-3">
                <h4>
                  {{ info.title }}
                </h4>
              </div>
              <p class="text-[32px] font-bold leading-9">$ {{ info.price }}</p>
              <button class="btn-neutral btn">{{ info.yourPlan ? '目前方案' : '選擇方案' }}</button>
              <ul>
                <li v-for="(detail, key) in info.planInfo" :key="key" class="text-center">
                  {{ detail }}
                </li>
              </ul>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
const memberShipPlan = [
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
    title: '免費方案',
    price: '5000',
    yourPlan: false,
    planInfo: ['一年內', '無限上傳認領圖', '無限上傳作品集']
  }
]
</script>
<style scoped></style>
