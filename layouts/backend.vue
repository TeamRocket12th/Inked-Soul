<template>
  <ClientOnly>
    <div class="container grid grid-cols-12 gap-8">
      <div class="col-span-4 flex flex-col gap-[43px]">
        <div class="rounded-lg border bg-white">
          <slot name="userImg">
            <PhotoItem />
          </slot>
        </div>

        <div class="rounded-lg border bg-white">
          <slot name="navbar">
            <NavbarItem />
          </slot>
        </div>
      </div>
      <div
        class="col-span-8 self-start rounded-lg border bg-white p-10"
        :class="stretch === false ? '' : 'h-[1200px]'"
      >
        <NuxtPage />
      </div>
    </div>
  </ClientOnly>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useOrderStore } from '~/stores/order'
import PhotoItem from '~/components/admin/PhotoItem.vue'
import NavbarItem from '~/components/admin/NavbarItem.vue'
const store = useOrderStore()
const { stretch } = storeToRefs(store)
</script>
<style scoped></style>
