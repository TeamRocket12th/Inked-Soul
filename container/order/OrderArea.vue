<template>
  <div class="mx-auto flex w-full flex-col items-center justify-center">
    <div
      class="mb-10 flex w-full flex-col items-center gap-5 rounded-lg border border-[#D0D0D0] bg-white px-[58px] py-5 text-center"
    >
      <slot name="orderContext"></slot>
    </div>
    <!-- 訂單資訊 -->
    <div class="mb-20 w-full">
      <slot name="orderDetail"></slot>
    </div>
    <!-- 步驟 -->
    <div class="w-full">
      <slot name="steps"></slot>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
