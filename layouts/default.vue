<template>
  <div class="relative">
    <div class="fixed w-full">
      <NavbarItem></NavbarItem>
    </div>
    <div>
      <slot></slot>
    </div>
    <FooterItem></FooterItem>
  </div>
</template>

<script setup>
import NavbarItem from '~/components/global/NavbarItem.vue'
import FooterItem from '~/components/global/FooterItem.vue'
</script>
