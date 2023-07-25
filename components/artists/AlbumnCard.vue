<template>
  <div class="boreder-black overflow-hidden rounded border-2">
    <img :src="`${props.image}`" alt="" class="object-cover object-center" />
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
