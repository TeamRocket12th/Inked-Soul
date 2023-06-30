<template>
  <div class="flex flex-col items-start gap-3">
    <img :src="props.image" alt="" class="h-[280px] w-full rounded-lg object-cover object-center" />
    <div class="flex flex-col items-start gap-1">
      <p class="line-clamp-1 text-xl font-bold">{{ props.title }}</p>
      <p class="text-secondary">{{ props.date }}</p>
    </div>
    <p class="line-clamp-2 text-base">
      {{ props.content }}
    </p>
    <p class="text-sm text-secondary">閱讀全文 》</p>
  </div>
</template>
<script setup>
const props = defineProps({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
})
</script>
<style scoped></style>
