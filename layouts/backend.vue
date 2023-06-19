<template>
  <ClientOnly>
    <div class="mx-[184px] mb-[115px] mt-[85px] grid grid-cols-12 gap-8">
      <div class="col-span-4 flex flex-col gap-[43px]">
        <slot name="userImg">
          <BackEndHeadImg />
        </slot>
        <slot name="navbar">
          <BackEndNavbar />
        </slot>
      </div>
      <div class="col-span-8 rounded border px-10 pb-[112px] pt-[60px]">
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
