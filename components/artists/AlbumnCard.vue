<template>
  <div class="boreder-black overflow-hidden rounded-xl border-2">
    <img :src="`${props.image}`" alt="" />
  </div>
</template>
<script setup>
const props = defineProps({
  image: {
    type: String,
    required: true
  }
})
</script>
