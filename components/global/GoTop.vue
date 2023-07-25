<template>
  <button
    class="fixed right-[60px] top-[800px] z-10 h-11 w-11 rounded-full border-[1px] border-secondary bg-primary"
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
