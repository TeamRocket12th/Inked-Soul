<template>
  <div class="relative overflow-hidden rounded-lg bg-white">
    <div
      v-if="props.isTop"
      class="absolute right-5 top-5 rounded-full bg-black bg-opacity-50 p-2 text-white"
    >
      <Icon name="ic:outline-push-pin" size="24" />
    </div>
    <img :src="`${props.image}`" alt="" class="h-[200px] w-full object-cover object-center" />
  </div>
</template>
<script setup>
const props = defineProps({
  isTop: {
    type: Boolean,
    required: true
  },
  image: {
    type: String,
    required: true
  }
})
</script>
