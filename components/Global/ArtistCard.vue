<template>
  <div class="relative overflow-hidden rounded-lg">
    <img :src="`${props.image}`" alt="" class="w-[416px h-[416px] object-cover" />
    <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
      <div class="flex flex-col items-start gap-3">
        <p>{{ props.nickname }}</p>
        <span class="rounded-full border px-3 py-1">寫實主義 Realism</span>
      </div>
    </div>
    <!-- <p>{{ props.category }}</p> -->
    <!-- <p>{{ props.studioname }}</p> -->
    <!-- <button class="rounded bg-slate-200 p-2" @click="follow">追蹤</button> -->
  </div>
</template>

<script setup>
const props = defineProps({
  image: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
    required: true
  },
  studioname: {
    type: String,
    required: true
  },
  category: {
    type: Array,
    required: true
  }
})
</script>
