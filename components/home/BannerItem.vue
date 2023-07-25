<template>
  <div
    class="banner relative flex h-screen w-full flex-col items-center justify-center gap-[60px] bg-cover"
  >
    <!-- <img src="/home-banner.svg" alt="" class="absolute left-0 right-0 top-0 -z-10" /> -->
    <h2 class="font-serif-tc text-white">探索專屬刺青故事</h2>
    <slot></slot>
  </div>
</template>
<style scoped>
.banner {
  background: linear-gradient(157deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 100%),
    linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.12) 40.63%,
      rgba(0, 0, 0, 0) 100%
    ),
    linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%), url(/home/banner.jpg),
    lightgray 50%;
  background-size: cover;
  background-position: center;
}
</style>
