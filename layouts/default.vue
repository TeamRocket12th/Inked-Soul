<template>
  <div class="relative">
    <div class="fixed top-0 z-50 w-full">
      <NavItem></NavItem>
    </div>
    <div :class="[{ 'pt-[160px]': route.path !== '/' }, { 'bg-primary': route.path !== '/' }]">
      <slot></slot>
    </div>
    <FooterItem></FooterItem>
  </div>
</template>

<script setup>
import NavItem from '~/components/global/NavItem.vue'
import FooterItem from '~/components/global/FooterItem.vue'
const route = useRoute()
</script>
