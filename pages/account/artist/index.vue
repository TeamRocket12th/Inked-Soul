<template>
  <NuxtLayout name="backend">
    <template #userImg> <Photo /> </template>
    <template #navbar> <Navbar /> </template>
  </NuxtLayout>
</template>
<script setup>
import Photo from '~/components/admin/Photo.vue'
import Navbar from '~/components/admin/Navbar.vue'
</script>
<style scoped></style>
