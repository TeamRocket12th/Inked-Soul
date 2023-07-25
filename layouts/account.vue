<template>
  <div class="grid h-screen grid-cols-12">
    <LoadingItem v-if="isPending" />
    <div class="relative col-span-5">
      <img src="/account-left.jpg" alt="" class="h-screen object-cover" />
      <NuxtLink to="/" class="absolute left-0 right-0 top-[40%] -translate-y-[50%] text-center"
        ><div class="flex items-center justify-center gap-5">
          <img src="/logo.png" alt="" class="h-10 object-contain object-center" />
          <h2 class="font-heading-typo">Inked Soul</h2>
        </div>
      </NuxtLink>
    </div>

    <div class="col-span-7 flex flex-col items-center justify-center text-center">
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
