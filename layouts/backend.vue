<template>
  <ClientOnly>
    <div class="container grid grid-cols-12 gap-8 pb-[115px]">
      <div class="col-span-4 flex flex-col gap-[43px]">
        <div class="rounded bg-white">
          <slot name="userImg">
            <BackEndHeadImg />
          </slot>
        </div>

        <div class="rounded bg-white">
          <slot name="navbar">
            <BackEndNavbar />
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
import BackEndHeadImg from '~/components/artist/BackEndHeadImg.vue'
import BackEndNavbar from '~/components/artist/BackEndNavbar.vue'
</script>
<style scoped></style>
