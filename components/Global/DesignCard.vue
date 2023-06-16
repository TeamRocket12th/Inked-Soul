<template>
  <div class="boreder-black h-full rounded border-2">
    <img :src="props.image" alt="" class="h-[200px]" />
    <p>風格：{{ props.category }}</p>
    <p>作品名稱：{{ props.designName }}</p>
  </div>
</template>
<script setup>
const props = defineProps({
  id: {
    required: true,
    type: Number
  },
  image: {
    required: true,
    type: String
  },
  designName: {
    required: true,
    type: String
  },
  category: {
    required: true,
    type: Number
  }
})
</script>
