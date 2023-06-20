<template>
  <div class="boreder-black rounded border-2">
    <img :src="props.image" alt="" class="h-[200px]" :style="{ height: `${height}px` }" />
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

// 測試用
const random = ref(Math.floor(Math.random() * 150))
const height = computed(() => {
  return 200 + random.value
})
</script>
