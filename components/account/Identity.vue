<template>
  <div class="flex flex-col gap-[60px]">
    <slot name="title"></slot>
    <div class="grid grid-cols-2 text-sm">
      <button
        type="button"
        :class="{
          'border-black  text-black': identity === 'user',
          'text-secondary': identity !== 'user'
        }"
        class="border-b-2 px-[25px] py-[3px] pb-[12px] duration-200"
        @click="isActive('user')"
      >
        一般身份
      </button>
      <button
        type="button"
        :class="{
          'border-black text-black': identity === 'artist',
          'text-secondary': identity !== 'artist'
        }"
        class="border-b-2 px-[25px] py-[3px] pb-[12px] duration-200"
        @click="isActive('artist')"
      >
        刺青師
      </button>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useAccountStore } from '~/stores/account'

const store = useAccountStore()
const { identity } = storeToRefs(store)

const isActive = (btn) => {
  identity.value = btn
  return identity.value === btn
}
</script>
<style scoped></style>
