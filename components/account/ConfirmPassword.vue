<template>
  <label class="flex flex-col items-start">
    <span>確認密碼</span>
    <VField
      v-model="confirmPassword"
      name="確認密碼"
      type="password"
      rules="required|min:8|confirmed:@password"
      class="accountInput"
    />
    <VErrorMessage name="確認密碼" class="whitespace-nowrap" />
  </label>
  <button type="button" @click="signupSubmit" class="btn-neutral btn bg-black text-white">
    註冊
  </button>
  <NuxtLink to="/account/login">登入</NuxtLink>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useAccountStore } from '~/stores/account'

const store = useAccountStore()
const { confirmPassword } = storeToRefs(store)
const { signupSubmit } = store
</script>
<style scoped></style>
