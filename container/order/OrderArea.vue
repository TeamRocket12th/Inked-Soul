<template>
  <div class="mx-auto flex w-full flex-col items-center justify-center">
    <!-- 灰色方塊 -->
    <div
      class="mb-10 flex w-[640px] flex-col items-center gap-5 rounded bg-[#666] px-[58px] py-5 text-center text-white"
    >
      <slot name="orderContext"></slot>
    </div>
    <!-- 步驟 -->
    <div class="mb-20">
      <slot name="steps"></slot>
    </div>
    <!-- 訂單資訊 -->
    <div class="w-full">
      <p>訂單資訊</p>
      <slot name="orderDetail"></slot>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
