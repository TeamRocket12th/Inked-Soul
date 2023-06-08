<template>
  <div class="boreder-black rounded border-2">
    <img :src="`${props.image}`" alt="" />
    <span>{{ props.name.first }}</span>
    <span>{{ props.name.last }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  image: {
    type: String,
    required: true
  },
  name: {
    type: Object,
    required: true
  }
})
</script>
