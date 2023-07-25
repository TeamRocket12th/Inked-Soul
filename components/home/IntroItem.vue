<template>
  <div class="container flex flex-col gap-20">
    <!-- 找尋刺青靈感 -->
    <div class="flex flex-col items-center">
      <h2 class="mb-10">找尋刺青靈感</h2>
      <div class="grid grid-cols-2 gap-[32px]">
        <!-- first row -->
        <div class="flex max-h-[304px] flex-row gap-[32px]">
          <img
            src="/home/5.jpg"
            alt=""
            class="w-full overflow-hidden rounded-lg border border-custom object-cover"
          />
          <img
            src="/home/6.jpg"
            alt=""
            class="w-full overflow-hidden rounded-lg border border-custom object-cover"
          />
        </div>
        <img
          src="/home/4.jpg"
          alt=""
          class="max-h-[304px] w-full overflow-hidden rounded-lg border border-custom object-cover"
        />
        <!-- second row -->
        <img
          src="/home/3.jpg"
          alt=""
          class="max-h-[304px] w-full overflow-hidden rounded-lg border border-custom object-cover"
        />
        <div class="flex max-h-[304px] flex-row gap-[32px]">
          <img
            src="/home/7.jpg"
            alt=""
            class="w-full overflow-hidden rounded-lg border border-custom object-contain"
          />
          <img
            src="/home/8.jpg"
            alt=""
            class="w-full overflow-hidden rounded-lg border border-custom object-contain"
          />
        </div>
      </div>
    </div>

    <!-- 待改為 grid  -->
    <div class="flex flex-col items-center gap-8">
      <div class="grid grid-cols-2 gap-8">
        <div class="col-span-1 flex max-h-[416px] flex-col items-center justify-center gap-10">
          <p class="text-center">
            這裡是藝術的殿堂 <br />
            為您找尋獨一無二的紋身藝術
          </p>
          <NuxtLink class="rounded-lg bg-black px-6 py-3 text-white" to="/designs"
            >探索認領圖</NuxtLink
          >
        </div>
        <img
          src="/home/1.jpg"
          alt=""
          class="col-span-1 max-h-[416px] overflow-hidden rounded-lg object-cover"
        />
      </div>
      <div class="grid grid-cols-2 gap-8">
        <img
          src="/home/2.jpg"
          alt=""
          class="col-span-1 max-h-[416px] overflow-hidden rounded-lg object-cover"
        />
        <div class="col-span-1 flex max-h-[416px] flex-col items-center justify-center gap-10">
          <p class="text-center">
            每一位刺青師都是綻放靈感的魔術師<br />
            與您共同編織刺青的靈魂故事
          </p>
          <NuxtLink class="rounded-lg bg-black px-6 py-3 text-white" to="/artists"
            >探索刺青師</NuxtLink
          >
        </div>
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
          class="group relative flex max-h-[350px] cursor-pointer flex-col items-center text-white"
          @click="toDesignPage(item.link)"
        >
          <div class="imgContainer h-full w-full">
            <img :src="item.image" alt="" class="h-full w-full object-cover" />
            <div class="imgOverlay hidden group-hover:block"></div>
          </div>
          <div class="absolute bottom-0 left-0 right-0 mx-auto py-5 transition">
            <div class="flex flex-col items-center gap-3">
              <h2 class="font-serif-tc font-bold">{{ item.chinese }}</h2>
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
    image: '/home/style1.jpg',
    link: 'Black and Grey 黑灰派'
  },
  {
    chinese: '日式傳統',
    english: 'Traditional Japanese',
    image: '/home/style2.jpg',
    link: 'Traditional Japanese 日式傳統'
  },
  {
    chinese: '新傳統',
    english: 'New Traditional',
    image: '/home/style3.jpg',
    link: 'New Traditional 新傳統'
  },
  {
    chinese: '老派風',
    english: 'Old School',
    image: '/home/style4.jpg',
    link: 'Old School 老派風'
  },
  {
    chinese: '幾何',
    english: 'Geometric',
    image: '/home/style5.jpg',
    link: 'Geometric 幾何'
  },
  {
    chinese: '寫實主義',
    english: 'Realism',
    image: '/home/style6.jpg',
    link: 'Realism 寫實主義'
  },
  {
    chinese: '單針',
    english: 'Fine Line',
    image: '/home/style7.jpg',
    link: 'Fine Line 單針'
  },
  {
    chinese: '極黑風格',
    english: 'Blackwork',
    image: '/home/style8.jpg',
    link: 'Blackwork 極黑風格'
  }
]

const toDesignPage = (style) => {
  styleArr.value.splice(0, 1, style)
  getDesigns(1)
  navigateTo('/designs')
}
</script>
<style scoped>
.imgContainer {
  position: relative;
}
.imgOverlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.4) 67.71%,
    rgba(0, 0, 0, 0.5) 100%
  );
}
</style>
