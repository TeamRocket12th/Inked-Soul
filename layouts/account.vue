<template>
  <div class="relative grid grid-cols-12">
    <LoadingItem v-if="isPending" />
    <div
      class="sticky left-0 right-0 top-0 col-span-5 flex h-screen items-center overflow-hidden bg-cover bg-center"
      style="background-image: url('/account-left.jpg')"
    >
      <NuxtLink to="/" class="absolute left-0 right-0 text-center">
        <div class="left-40 flex items-center justify-center">
          <img src="/logo.png" alt="" class="mr-5 h-10 object-contain object-center" />
          <h2 class="font-heading-typo text-black">Inked Soul</h2>
        </div>
      </NuxtLink>
    </div>

    <div class="col-span-7 flex h-full flex-col items-center justify-center text-center">
      <div
        class="flex flex-col gap-10 rounded-lg p-10"
        :class="{ 'w-[50%] border border-black': route.path !== '/account/verify' }"
      >
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

const route = useRoute()

const store = useAccountStore()
const { isPending } = storeToRefs(store)
</script>
<style scoped></style>
