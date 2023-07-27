<template>
  <div>
    <NavbarItem class="fixed top-0 z-50 w-full"></NavbarItem>
    <div
      class="relative min-h-screen pb-20"
      :class="[{ 'pt-[120px]': route.path !== '/' }, { 'bg-primary': route.path !== '/' }]"
      @click.capture="handleClickOutside('click default')"
    >
      <span
        v-show="isLoading"
        class="loading loading-dots loading-md absolute left-0 right-0 mx-auto"
      ></span>
      <slot></slot>
    </div>
    <FooterItem class=""></FooterItem>
  </div>
</template>

<script setup>
import { useOrderStore } from '~/stores/order'
const store = useOrderStore()
const { handleClickOutside } = store
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
