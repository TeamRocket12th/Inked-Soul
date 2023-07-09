<template>
  <ClientOnly>
    <div class="container grid grid-cols-12 gap-8">
      <div class="col-span-4 flex flex-col gap-[43px]">
        <div class="rounded-lg bg-white">
          <slot name="userImg">
            <Photo />
          </slot>
        </div>

        <div class="rounded-lg bg-white">
          <slot name="navbar">
            <Navbar />
          </slot>
        </div>
      </div>
      <div class="col-span-8 self-start rounded-lg bg-white p-10">
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
