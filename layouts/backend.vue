<template>
  <ClientOnly>
    <div class="container grid grid-cols-12 gap-8">
      <div class="col-span-4 flex flex-col gap-[43px]">
        <div class="rounded-lg border bg-white">
          <slot name="userImg">
            <Photo />
          </slot>
        </div>

        <div class="rounded-lg border bg-white">
          <slot name="navbar">
            <Navbar />
          </slot>
        </div>
      </div>
      <div
        class="col-span-8 self-start rounded-lg border bg-white p-10"
        :class="stretch === false ? '' : 'h-[1300px] md:h-[1200px]'"
        @click.capture="stretchHide()"
      >
        <!-- @click.capture="stretchHide()" -->
        <NuxtPage />
      </div>
    </div>
  </ClientOnly>
</template>
<script setup>
import Photo from '~/components/admin/Photo.vue'
import Navbar from '~/components/admin/Navbar.vue'
import { storeToRefs } from 'pinia'
import { useOrderStore } from '~/stores/order'
const store = useOrderStore()
const { stretch } = storeToRefs(store)
const { stretchHide } = store
</script>
<style scoped></style>
