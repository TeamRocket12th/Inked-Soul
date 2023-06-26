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
    <div class="grid grid-cols-4 gap-1">
      <div class="relative flex flex-col items-center">
        <img src="/home-element1.png" alt="" />
        <img
          src="/element-text1.svg"
          alt=""
          class="absolute bottom-0 left-0 right-0 mx-auto object-contain"
        />
      </div>
      <div class="relative flex flex-col items-center">
        <img src="/home-element2.png" alt="" />
        <img
          src="/element-text2.svg"
          alt=""
          class="absolute bottom-0 left-0 right-0 mx-auto object-contain"
        />
      </div>
      <div class="relative flex flex-col items-center">
        <img src="/home-element3.png" alt="" />
        <img
          src="/element-text3.svg"
          alt=""
          class="absolute bottom-0 left-0 right-0 mx-auto object-contain"
        />
      </div>
      <div class="relative flex flex-col items-center">
        <img src="/home-element4.png" alt="" />
        <img
          src="/element-text4.svg"
          alt=""
          class="absolute bottom-0 left-0 right-0 mx-auto object-contain"
        />
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
<script setup></script>
