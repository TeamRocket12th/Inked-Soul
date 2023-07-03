<template>
  <div class="flex flex-col items-start gap-3">
    <div class="placeholder h-[280px] w-full rounded-lg"></div>
    <div class="flex flex-col items-start gap-1">
      <p class=""></p>
      <p class=""></p>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
@keyframes bgAnimate {
  0% {
    background-position: 50% 0;
  }

  100% {
    background-position: -150% 0;
  }
}
.placeholder {
  background-image: linear-gradient(to right, #d6d7d8 0%, #e2e3e4 10%, #d6d7d8 20%, #d6d7d8 100%);
  animation: bgAnimate 1.3s linear infinite;
  background-size: 200% 100%;
}
</style>
