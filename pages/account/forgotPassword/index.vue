<template>
  <div class="mx-auto w-[30%] text-center">
    <h2>忘記密碼</h2>
    <VForm class="flex flex-col">
      <label class="flex flex-col items-start">
        <span>電子信箱</span>
        <VField name="電子信箱" rules="required|email" class="w-full border" v-model="email" />
        <VErrorMessage name="電子信箱" class="whitespace-nowrap" />
      </label>
    </VForm>
    <button type="button" @click="resetPasswordSendEmail">重設密碼</button>
  </div>
</template>
<script setup>
import { useAccountStore } from '~/stores/account'
import { storeToRefs } from 'pinia'
const store = useAccountStore()
const { email } = storeToRefs(store)
const { resetPasswordSendEmail } = store
</script>
<style></style>
