<template>
  <VForm class="flex flex-col">
    <label class="flex flex-col items-start">
      <span>電子信箱</span>
      <VField name="電子信箱" rules="required|email" class="w-full border" v-model="email" />
      <VErrorMessage name="電子信箱" class="whitespace-nowrap" />
    </label>
    <label class="flex flex-col items-start">
      <span>密碼</span>
      <VField
        name="密碼"
        type="password"
        rules="required|min:8"
        class="w-full border"
        v-model="password"
      />
      <VErrorMessage name="密碼" class="whitespace-nowrap" />
    </label>
    <slot name="confirm-passward"></slot>
  </VForm>
  <button type="button" @click="loginSubmit">登入</button>
  <div class="flex flex-row justify-center">
    <NuxtLink to="/account/forgotpassword">忘記密碼</NuxtLink>｜
    <NuxtLink to="/account/signup">註冊</NuxtLink>
  </div>
</template>
<script setup>
import { useAccountStore } from '~/stores/account'
import { storeToRefs } from 'pinia'

const store = useAccountStore()
const { email, password } = storeToRefs(store)
const { loginSubmit } = store
</script>
<style></style>
