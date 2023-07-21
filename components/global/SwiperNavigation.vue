<template>
  <div>
    <button @click="swiper.slidePrev()">
      <Icon name="ic:baseline-chevron-left" size="16" />
    </button>
    <button @click="swiper.slideNext()">
      <Icon name="ic:baseline-chevron-right" size="16" />
    </button>
  </div>
</template>

<script setup>
const swiper = useSwiper()
</script>

<style lang="scss" scoped></style>
