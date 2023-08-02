<template>
  <div class="mb-20 flex flex-col items-center gap-10">
    <h2>平台特色</h2>
    <ul v-if="!isMobile" class="justify grid grid-cols-2">
      <li class="flex h-[120px] w-[416px] justify-between border-b border-[#D0D0D0] pb-5 pr-[15px]">
        <div class="flex w-full items-center justify-between">
          <div class="flex h-full flex-col justify-between">
            <h4>分類篩選</h4>
            <p class="text-secondary">透過刺青藝術的風格、元素獲取靈感</p>
          </div>
          <Icon name="ic:twotone-plagiarism" class="h-10 w-10" />
        </div>
      </li>
      <li
        class="flex h-[120px] w-[416px] justify-between border-b border-l border-[#D0D0D0] pb-5 pl-[15px]"
      >
        <div class="flex w-full items-center justify-between">
          <Icon name="ic:twotone-pending-actions" class="h-10 w-10" />
          <div class="flex h-full flex-col items-end justify-between">
            <h4>線上預約</h4>
            <p class="text-secondary">說走就走，體驗一場專屬刺青冒險</p>
          </div>
        </div>
      </li>
      <li class="flex h-[120px] w-[416px] justify-between border-[#D0D0D0] pr-[15px] pt-5">
        <div class="flex w-full items-center justify-between">
          <div class="flex h-full flex-col justify-between">
            <h4>訂金保障</h4>
            <p class="text-secondary">先訂後刺，保障雙方買賣契約</p>
          </div>
          <Icon name="ic:twotone-monetization-on" class="h-10 w-10" />
        </div>
      </li>
      <li class="flex h-[120px] w-[416px] justify-between border-l border-[#D0D0D0] pl-[15px] pt-5">
        <div class="flex w-full items-center justify-between">
          <Icon name="ic:twotone-fact-check" class="h-10 w-10" />
          <div class="flex h-full flex-col items-end justify-between">
            <h4>評價機制</h4>
            <p class="text-secondary">安心預約經由平台認證的專業刺青師</p>
          </div>
        </div>
      </li>
    </ul>
    <ul v-if="isMobile">
      <li class="mb-6 flex">
        <Icon name="ic:twotone-plagiarism" class="mr-5 h-10 w-10" />
        <div>
          <h4>分類篩選</h4>
          <p class="text-secondary">透過刺青藝術的風格、元素獲取靈感</p>
        </div>
      </li>
      <li class="mb-6 flex">
        <Icon name="ic:twotone-pending-actions" class="mr-5 h-10 w-10" />
        <div class="">
          <h4>線上預約</h4>
          <p class="text-secondary">說走就走，體驗一場專屬刺青冒險</p>
        </div>
      </li>
      <li class="mb-6 flex">
        <Icon name="ic:twotone-monetization-on" class="mr-5 h-10 w-10" />
        <div class="">
          <h4>訂金保障</h4>
          <p class="text-secondary">先訂後刺，保障雙方買賣契約</p>
        </div>
      </li>
      <li class="mb-6 flex">
        <Icon name="ic:twotone-fact-check" class="mr-5 h-10 w-10" />
        <div class="">
          <h4>評價機制</h4>
          <p class="text-secondary">安心預約經由平台認證的專業刺青師</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { useWindowSize } from 'vue-window-size'
const isMobile = ref(false)
const { width } = useWindowSize()
watch(width, (_newValue) => {
  if (_newValue <= 768) {
    isMobile.value = true
  } else {
    isMobile.value = false
  }
})
onMounted(() => {
  if (width.value <= 768) {
    isMobile.value = true
  }
})
</script>
<style scoped></style>
