<template>
  <div class="container flex flex-col gap-20">
    <!-- 找尋刺青靈感 -->
    <div class="flex flex-col items-center">
      <h2 class="mb-10">找尋刺青靈感</h2>
      <div class="grid grid-cols-2 gap-[32px]">
        <!-- first row -->
        <div class="flex flex-row gap-[32px]">
          <img src="/home-inspire1.svg" alt="" class="overflow-hidden rounded-lg object-contain" />
          <img src="/home-inspire2.svg" alt="" class="overflow-hidden rounded-lg object-contain" />
        </div>
        <img src="/home-inspire3.svg" alt="" class="overflow-hidden rounded-lg object-contain" />
        <!-- second row -->
        <img src="/home-inspire4.svg" alt="" class="overflow-hidden rounded-lg object-contain" />
        <div class="flex flex-row gap-[32px]">
          <img src="/home-inspire5.svg" alt="" class="overflow-hidden rounded-lg object-contain" />
          <img src="/home-inspire6.svg" alt="" class="overflow-hidden rounded-lg object-contain" />
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
        <img src="/home-inspire7.svg" alt="" class="overflow-hidden rounded-lg object-contain" />
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
        <img src="/home-inspire8.svg" alt="" class="overflow-hidden rounded-lg object-contain" />
      </div>
    </div>
  </div>

  <!-- 最獨特的刺青風格 -->
  <div class="flex flex-col items-center">
    <h2 class="mb-10">最獨特的刺青風格</h2>
    <div class="relative">
      <div
        class="via-opacity-20 absolute bottom-0 left-0 top-0 z-10 bg-gradient-to-r from-white to-transparent 2xl:w-20"
      ></div>
      <div
        class="via-opacity-20 absolute bottom-0 right-0 top-0 z-10 bg-gradient-to-l from-white to-transparent 2xl:w-20"
      ></div>
      <ul class="grid grid-cols-4 gap-1">
        <li
          v-for="(item, key) in style"
          :key="key"
          class="relative flex cursor-pointer flex-col items-center text-white"
          @click="toDesignPage(item.link)"
        >
          <img :src="item.image" alt="" />
          <div class="absolute bottom-0 left-0 right-0 mx-auto py-5">
            <div class="flex flex-col items-center gap-3">
              <h2 class="font-bold">{{ item.chinese }}</h2>
              <h3 class="font-heading-typo text-base font-normal">{{ item.english }}</h3>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useSearchStore } from '~/stores/search'

const store = useSearchStore()
const { styleArr } = storeToRefs(store)
const { getDesigns } = store

const style = [
  {
    chinese: '黑灰派',
    english: 'Black and Grey',
    image: '/home-element1.png',
    link: 'Black and Grey 黑灰派'
  },
  {
    chinese: '日式傳統',
    english: 'Traditional Japanese',
    image: '/home-element2.png',
    link: 'Traditional Japanese 日式傳統'
  },
  {
    chinese: '新傳統',
    english: 'New Traditional',
    image: '/home-element3.png',
    link: 'New Traditional 新傳統'
  },
  {
    chinese: '老派風',
    english: 'Old School',
    image: '/home-element4.png',
    link: 'Old School 老派風'
  },
  {
    chinese: '幾何',
    english: 'Geometric',
    image: '/home-element5.png',
    link: 'Geometric 幾何'
  },
  {
    chinese: '寫實主義',
    english: 'Realism',
    image: '/home-element6.png',
    link: 'Realism 寫實主義'
  },
  {
    chinese: '單針',
    english: 'Fine Line',
    image: '/home-element7.png',
    link: 'Fine Line 單針'
  },
  {
    chinese: '極黑風格',
    english: 'Blackwork',
    image: '/home-element8.png',
    link: 'Blackwork 極黑風格'
  }
]

const toDesignPage = (style) => {
  styleArr.value.splice(0, 1, style)
  getDesigns(1)
  navigateTo('/designs')
}
</script>
