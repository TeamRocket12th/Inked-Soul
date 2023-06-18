<template>
  <NuxtLayout name="backend">
    <template #userImg> <BackEndHeadImg /> </template>
    <template #navbar> <BackEndNavbar /> </template>
  </NuxtLayout>
</template>
<script setup>
import BackEndHeadImg from '~/components/user/BackEndHeadImg.vue'
import BackEndNavbar from '~/components/user/BackEndNavbar.vue'
</script>
<style scoped></style>
