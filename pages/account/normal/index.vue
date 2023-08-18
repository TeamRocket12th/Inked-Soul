<template>
  <NuxtLayout name="backend">
    <template #userImg> <PhotoItem /> </template>
    <template #navbar> <NavbarItem /> </template>
  </NuxtLayout>
</template>
<script setup>
import PhotoItem from '~/components/user/PhotoItem.vue'
import NavbarItem from '~/components/user/NavbarItem.vue'

// definePageMeta({
//   pageTransition: {
//     name: 'backend'
//   }
// })
</script>
<style scoped></style>
