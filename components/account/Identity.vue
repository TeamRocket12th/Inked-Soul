<template>
  <div class="flex flex-col gap-[60px]">
    <slot name="title"></slot>
    <div class="grid grid-cols-2">
      <button
        type="button"
        :class="{ 'border-black': identity === 'User' }"
        class="border-b-2 px-[25px] py-[3px] duration-200"
        @click="isActive('User')"
      >
        一般身份
      </button>
      <button
        type="button"
        :class="{ 'border-black': identity === 'Artist' }"
        class="border-b-2 px-[25px] py-[3px] duration-200"
        @click="isActive('Artist')"
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
