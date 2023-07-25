<template>
  <NuxtLayout name="backend">
    <template #userImg> <PhotoItem /> </template>
    <template #navbar> <NavbarItem /> </template>
  </NuxtLayout>
</template>
<script setup>
import PhotoItem from '~/components/admin/PhotoItem.vue'
import NavbarItem from '~/components/admin/NavbarItem.vue'

// definePageMeta({
//   pageTransition: {
//     name: 'backend'
//   }
// })
</script>
<style scoped></style>
