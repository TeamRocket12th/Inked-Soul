<template>
  <NuxtLayout name="account">
    <h2 class="mb-5">忘記密碼</h2>
    <VForm class="flex flex-col">
      <label class="flex flex-col items-start">
        <span>電子信箱</span>
        <VField name="電子信箱" rules="required|email" class="accountInput" v-model="email" />
        <VErrorMessage name="電子信箱" class="whitespace-nowrap" />
      </label>
    </VForm>
    <button
      type="button"
      class="btn-neutral btn bg-black text-white"
      @click="resetPasswordSendEmail"
    >
      重設密碼
    </button>
  </NuxtLayout>
</template>
<script setup>
import { useAccountStore } from '~/stores/account'
import { storeToRefs } from 'pinia'
definePageMeta({
  layout: false
})

const store = useAccountStore()
const { email } = storeToRefs(store)
const { resetPasswordSendEmail } = store
</script>
<style></style>
