<template>
  <NuxtLayout name="backend">
    <template #userImg> <BackEndHeadImg /> </template>
    <template #navbar> <BackEndNavbar /> </template>
  </NuxtLayout>
</template>
<script setup>
import BackEndHeadImg from '~/components/artist/BackEndHeadImg.vue'
import BackEndNavbar from '~/components/artist/BackEndNavbar.vue'
</script>
<style scoped></style>
