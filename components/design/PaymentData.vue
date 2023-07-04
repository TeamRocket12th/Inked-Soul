<template>
  <div class="pt-10">
    <h4 class="mb-5">付款方式</h4>
    <div class="mb-20">
      <select class="formInput">
        <option class="p-2">線上信用卡付款</option>
      </select>
    </div>
    <h4 class="mb-5">訂單金額</h4>
    <div class="flex flex-row items-end justify-between">
      <div class="flex flex-col gap-3">
        <p>認領圖總金額 ${{ props.deposit + props.finalPayment }}</p>
        <p>(訂金 ${{ props.deposit }} + 尾款 ${{ props.finalPayment }})</p>
      </div>
      <div class="flex flex-row items-end gap-5">
        <h4>應付金額</h4>
        <p class="text-[32px] font-bold leading-[40px]">${{ props.deposit }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  deposit: {
    type: Number,
    required: true
  },
  finalPayment: {
    type: Number,
    required: true
  }
})
</script>
