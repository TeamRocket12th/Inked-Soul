<template>
  <div class="mx-auto w-[30%] text-center">
    <h2>更改密碼</h2>
    <VForm class="flex flex-col">
      <label class="flex flex-col items-start">
        <span>新密碼</span>
        <VField
          name="密碼"
          type="password"
          rules="required|min:8"
          class="w-full border"
          placeholder="新密碼"
          v-model="password"
        />
        <VErrorMessage name="密碼" class="whitespace-nowrap" />
      </label>
      <label class="flex flex-col items-start">
        <span>確認密碼</span>
        <VField
          name="確認密碼"
          type="password"
          rules="required|min:8|confirmed:@password"
          class="w-full border"
          placeholder="確認密碼"
          v-model="confirmPassword"
        />
        <VErrorMessage name="確認密碼" class="whitespace-nowrap" />
      </label>
    </VForm>
    <button type="button" @click="resetPassword">確認密碼</button>
  </div>
</template>
<script setup>
import { useAccountStore } from '~/stores/account'
import { storeToRefs } from 'pinia'
const store = useAccountStore()
const { password, confirmPassword } = storeToRefs(store)
const { resetPassword } = store
</script>
<style></style>
