<template>
  <div>
    <img :src="`${props.designData.image}`" alt="" />
    <p class="font-bold">{{ props.designData.designName }}</p>

    <p>設計理念 | {{ props.designData.description }}</p>
    <div>風格：{{ props.designData.artistData.style }}</div>
    <div>元素：{{ props.designData.element }}</div>
  </div>
</template>
<script setup>
const props = defineProps({
  designData: {
    type: Object,
    required: true
  },
  id:{
    type:String,
    required:true
  }
})
</script>
