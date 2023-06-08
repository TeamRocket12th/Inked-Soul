<template>
  <div class="card">
    <img :src="props.image" alt="" />
    <span>{{ props.category }}</span>
    <span>{{ props.title }}</span>
  </div>
</template>
<script setup>
const props = defineProps({
  title: {
    required: true,
    type: String
  },
  category: {
    required: true,
    type: String
  },
  image: {
    required: true,
    type: String
  }
})
</script>
