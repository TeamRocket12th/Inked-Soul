<template>
  <button
    class="fixed bottom-[60px] right-[60px] h-11 w-11 rounded-full border border-custom bg-primary font-bold text-secondary"
    @click="goToTop()"
  >
    Top
  </button>
</template>

<script setup>
const goToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style lang="scss" scoped></style>
