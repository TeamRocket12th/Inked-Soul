<template>
  <label class="flex flex-col items-start">
    <span>確認密碼</span>
    <VField
      name="確認密碼"
      type="password"
      rules="required|min:8|confirmed:@password"
      class="w-full border"
      v-model="confirmPassword"
    />
    <VErrorMessage name="確認密碼" class="whitespace-nowrap" />
  </label>
  <button type="button">註冊</button>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useAccountStore } from '~/stores/account'

const store = useAccountStore()
const { confirmPassword } = storeToRefs(store)
</script>
<style scoped></style>
