<template>
  <NuxtLayout name="account">
    <h2 class="mb-5">更改密碼</h2>
    <VForm class="flex flex-col gap-10">
      <label class="flex flex-col items-start gap-2">
        <span>新密碼</span>
        <VField
          name="密碼"
          type="password"
          rules="required|min:8"
          class="accountInput"
          placeholder="New Password"
          v-model="password"
        />
        <VErrorMessage name="密碼" class="whitespace-nowrap" />
      </label>
      <label class="flex flex-col items-start gap-2">
        <span>確認密碼</span>
        <VField
          name="確認密碼"
          type="password"
          rules="required|min:8|confirmed:@password"
          class="accountInput"
          placeholder="Confirm the new password"
          v-model="confirmPassword"
        />
        <VErrorMessage name="確認密碼" class="whitespace-nowrap" />
      </label>
    </VForm>
    <button type="button" @click="resetPassword" class="btn-neutral btn bg-black text-white">
      確認密碼
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
const { password, confirmPassword } = storeToRefs(store)
const { resetPassword } = store
</script>
<style></style>
