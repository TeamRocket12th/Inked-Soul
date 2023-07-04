<template>
  <ClientOnly>
    <div class="container grid grid-cols-12 gap-8">
      <div class="col-span-4 flex flex-col gap-[43px]">
        <div class="rounded bg-white">
          <slot name="userImg">
            <Photo />
          </slot>
        </div>

        <div class="rounded bg-white">
          <slot name="navbar">
            <Navbar />
          </slot>
        </div>
      </div>
      <div class="col-span-8 rounded bg-white px-10 pb-[36px] pt-[60px]">
        <NuxtPage />
      </div>
    </div>
  </ClientOnly>
</template>
<script setup>
import Photo from '~/components/admin/Photo.vue'
import Navbar from '~/components/admin/Navbar.vue'
</script>
<style scoped></style>
