<template>
  <div class="relative overflow-hidden rounded-lg bg-gray-300">
    <img :src="`${props.image}`" alt="" />
    <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
      <p>{{ props.nickname }}</p>
    </div>
    <!-- <p>{{ props.studioname }}</p> -->
    <!-- <p>{{ props.category }}</p> -->
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
