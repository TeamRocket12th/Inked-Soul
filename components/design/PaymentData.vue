<template>
  <div>
    <h2 class="text-2xl">付款方式</h2>
    <div class="mb-10 border-[1px] border-black">
      <select class="w-full p-2 border-[1px] border-black">
        <option  class="w-full p-2 border-[1px] border-black">信用卡</option>
      </select>
    </div>
    <h2 class="text-2xl">訂單金額</h2>
    <div class="mb-10 border-[1px] border-black p-4">
      <div>
        <p>認領圖總金額${{props.deposit+props.finalPayment}}</p>
        <p>(訂金${{props.deposit}}+尾款${{props.finalPayment}})</p>
      </div>
      <div></div>
    </div>
  </div>
</template>
<script setup>
const props=defineProps({
  deposit:{
    type:Number,
    required:true
  },
    finalPayment:{
    type:Number,
    required:true
  }
})
</script>
