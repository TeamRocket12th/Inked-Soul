<template>
  <div class="">
    <img :src="props.image" alt="" class="h-[200px]" />
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
