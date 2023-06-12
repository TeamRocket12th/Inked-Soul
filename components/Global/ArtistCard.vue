<template>
  <div class="boreder-black rounded border-2">
    <img :src="`${props.image}`" alt="" />
    <p>{{ props.nickname }}</p>
    <p>{{ props.studioname }}</p>
    <p>{{ props.category }}</p>
    <button @click="follow" class="p-2 rounded bg-slate-200">追蹤</button>
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
