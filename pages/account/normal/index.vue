<template>
  <NuxtLayout name="backend">
    <template #userImg> <Photo /> </template>
    <template #navbar> <Navbar /> </template>
  </NuxtLayout>
</template>
<script setup>
import Photo from '~/components/user/Photo.vue'
import Navbar from '~/components/user/Navbar.vue'
</script>
<style scoped></style>
