<template>
  <div class="relative flex grid grid-cols-12">
    <LoadingItem v-if="isPending" />
    <div
      class="sticky left-0 top-0 col-span-5 h-screen overflow-hidden bg-cover bg-center"
      style="background-image: url('/account-left.jpg')"
    >
      <!-- <img src="/account-left.jpg" alt="" class="w-full" /> -->
      <NuxtLink to="/" class="absolute inset-y-1/2 left-0 right-0 text-center">
        <!-- -translate-y-[50%] -->
        <div class="left-40 flex items-center justify-center">
          <img src="/logo.png" alt="" class="mr-5 h-10 object-contain object-center" />
          <h2 class="font-heading-typo">Inked Soul</h2>
        </div>
      </NuxtLink>
    </div>

    <div class="col-span-7 flex h-fit flex-col items-center justify-center pt-[5%] text-center">
      <div class="flex w-[50%] flex-col gap-10 rounded-lg border border-black p-10">
        <slot>
          <div>登入｜註冊｜忘記密碼｜重設密碼</div>
        </slot>
      </div>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useAccountStore } from '~/stores/account'
const store = useAccountStore()
const { isPending } = storeToRefs(store)
</script>
<style scoped></style>
