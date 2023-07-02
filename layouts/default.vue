<template>
  <div class="relative">
    <div class="fixed top-0 z-50 w-full">
      <NavbarItem></NavbarItem>
    </div>
    <div
      class="relative"
      :class="[{ 'pt-[160px]': route.path !== '/' }, { 'bg-primary': route.path !== '/' }]"
    >
      <span
        v-show="isLoading"
        class="loading loading-dots loading-md absolute left-0 right-0 mx-auto"
      ></span>
      <slot></slot>
    </div>
    <FooterItem></FooterItem>
  </div>
</template>

<script setup>
const route = useRoute()

const nuxtApp = useNuxtApp()
const isLoading = ref(false)

nuxtApp.hook('page:start', () => {
  isLoading.value = true
})
nuxtApp.hook('page:finish', () => {
  isLoading.value = false
})
</script>
