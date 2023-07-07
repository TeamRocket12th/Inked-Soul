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
    <div v-if="showTxt === true">
      <p class="text-left font-bold">已發送連結至電子信箱</p>
      <p class="text-left">
        如果我們找到了使用該電子信箱的用戶，我們會向您發送一封包含密碼恢復的電子信箱。如果您還沒有收到，請檢查您的垃圾信件夾，或透過hell0@tattoodo.com
        與我們聯繫。
      </p>
    </div>
  </NuxtLayout>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useAccountStore } from '~/stores/account'
definePageMeta({
  layout: false
})

const store = useAccountStore()
const { email, showTxt } = storeToRefs(store)
const { resetPasswordSendEmail } = store
</script>
<style></style>
