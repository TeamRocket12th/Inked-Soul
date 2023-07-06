<template>
  <ul class="grid grid-cols-9 font-roboto-nl text-xl font-bold">
    <li class="col-start-2 flex flex-col items-center gap-1">
      <div
        :class="{ 'bg-black text-white': props.step.Step1.Status }"
        class="flex h-16 w-16 items-center justify-center rounded-full border border-black"
      >
        <p>01</p>
      </div>
      <p class="text-base">訂單成立</p>
      <p v-if="props.step.Step1.Status" class="font-noto-tc text-sm font-normal">
        {{ props.step.Step1.Date }}
      </p>
    </li>
    <li class="col-span-2 col-start-3 px-10 pt-8">
      <div class="border-b border-secondary"></div>
    </li>
    <li class="col-start-5 flex flex-col items-center gap-1">
      <div
        :class="{ 'bg-black text-white': props.step.Step2.Status }"
        class="flex h-16 w-16 items-center justify-center rounded-full border border-black"
      >
        <p>02</p>
      </div>
      <p class="text-base">完成訂單</p>
      <p v-if="props.step.Step2.Status" class="font-noto-tc text-sm font-normal">
        {{ props.step.Step2.Date }}
      </p>
    </li>
    <li class="col-span-2 col-start-6 px-10 pt-8">
      <div class="border-b border-secondary"></div>
    </li>
    <li class="col-start-8 flex flex-col items-center gap-1">
      <div
        :class="{ 'bg-black text-white': props.step.Step3.Status }"
        class="flex h-16 w-16 items-center justify-center rounded-full border border-black"
      >
        <p>03</p>
      </div>
      <p class="text-base">獲得評價</p>
      <p v-if="props.step.Step3.Status" class="font-noto-tc text-sm font-normal">
        {{ props.step.Step3.Date }}
      </p>
    </li>
  </ul>
</template>
<script setup>
const props = defineProps({
  step: {
    required: true
  }
})
</script>
<style scoped></style>
