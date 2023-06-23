<template>
  <div class="container flex flex-col gap-20">
    <!-- 找尋刺青靈感 -->
    <div class="flex flex-col items-center">
      <h2 class="mb-10">找尋刺青靈感</h2>
      <div class="grid grid-cols-2 gap-[32px]">
        <!-- first row -->
        <div class="flex flex-row gap-[32px]">
          <div class="h-[300px] w-[300px] rounded-lg bg-gray-300"></div>
          <div class="h-[300px] w-[300px] rounded-lg bg-gray-300"></div>
        </div>
        <div class="h-[300px] w-full rounded-lg bg-gray-300"></div>
        <!-- second row -->
        <div class="h-[300px] w-full rounded-lg bg-gray-300"></div>
        <div class="flex flex-row gap-[32px]">
          <div class="h-[300px] w-[300px] rounded-lg bg-gray-300"></div>
          <div class="h-[300px] w-[300px] rounded-lg bg-gray-300"></div>
        </div>
      </div>
    </div>

    <!-- 待改為 grid  -->
    <div class="flex flex-col items-center">
      <div class="flex flex-row gap-[32px]">
        <div class="flex h-[416px] w-[416px] flex-col items-center justify-center gap-10">
          <p class="text-center">
            這裡是藝術的殿堂 <br />
            為您找尋獨一無二的紋身藝術
          </p>
          <NuxtLink class="rounded-lg bg-black px-6 py-3 text-white" to="/designs"
            >探索認領圖</NuxtLink
          >
        </div>
        <div class="h-[416px] w-[416px] rounded-lg bg-gray-300"></div>
      </div>
      <div class="flex flex-row-reverse gap-[32px]">
        <div class="flex h-[416px] w-[416px] flex-col items-center justify-center gap-10">
          <p class="text-center">
            每一位刺青師都是綻放靈感的魔術師<br />
            與您共同編織刺青的靈魂故事
          </p>
          <NuxtLink class="rounded-lg bg-black px-6 py-3 text-white" to="/artists"
            >探索刺青師</NuxtLink
          >
        </div>
        <div class="h-[416px] w-[416px] rounded-lg bg-gray-300"></div>
      </div>
    </div>
  </div>

  <!-- 最獨特的刺青風格 -->
  <div class="flex flex-col items-center">
    <h2 class="mb-10">最獨特的刺青風格</h2>
    <div class="grid grid-cols-4">
      <div v-for="(style, key) in styles" :key="key" class="flex flex-col items-center">
        <p>
          {{ style.ch }}
        </p>
        <p>{{ style.en }}</p>
      </div>
    </div>
  </div>

  <!-- <div class="container mx-auto grid grid-cols-2">
    <div class="h-[250px]">
      <p>墨魂是藝術的殿堂</p>
      <NuxtLink class="underline">探索認領圖</NuxtLink>
    </div>
    <div class="h-[250px]"><img src="https://fakeimg.pl/250/" /></div>
    <div class="h-[250px]"><img src="https://fakeimg.pl/250/" /></div>
    <div class="h-[250px]">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, qui.</p>
      <NuxtLink class="underline">探索刺青師</NuxtLink>
    </div>
  </div> -->
</template>
<script setup>
const styles = [
  {
    ch: '老派',
    en: 'OLD SCHOOL'
  },
  {
    ch: '日式傳統',
    en: 'Traditional Japanese'
  },
  {
    ch: '點陣',
    en: 'Dotwork'
  },
  {
    ch: '水彩風',
    en: 'Watercolor '
  },
  {
    ch: '幾何',
    en: 'Geometric'
  },
  {
    ch: '寫實主義',
    en: 'Realism'
  },
  {
    ch: '單針',
    en: 'Fine Line '
  },
  {
    ch: '黑灰派',
    en: 'Black and Grey '
  }
]
</script>
