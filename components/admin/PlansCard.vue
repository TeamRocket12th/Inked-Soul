<template>
  <div
    class="flex flex-col items-center gap-10 rounded-lg border py-[28px] duration-200 hover:bg-primary"
  >
    <div class="border-b border-black px-6 py-3">
      <h4>
        {{ info.title }}
      </h4>
    </div>
    <p class="text-[32px] font-bold leading-9">$ {{ info.price }}</p>
    <button class="btn-neutral btn">{{ info.yourPlan ? '目前方案' : '選擇方案' }}</button>
    <ul>
      <li v-for="(detail, key) in info.planInfo" :key="key" class="text-center">
        {{ detail }}
      </li>
    </ul>
  </div>
</template>
<script setup>
const { info } = defineProps({
  info: {
    required: true
  }
})
</script>
<style scoped></style>
