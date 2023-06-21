<template>
  <label class="relative flex flex-col items-start gap-1">
    <span class="mb-1">確認密碼</span>
    <VField
      name="確認密碼"
      type="password"
      rules="required|min:8|confirmed:@密碼"
      class="accountInput"
      v-model="confirmPassword"
      :class="{ 'border-[#DC3545]': errors.確認密碼 }"
    />
    <Icon
      name="ic:baseline-error-outline"
      class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
      v-if="errors.確認密碼"
    />
    <div class="h-[14px]">
      <VErrorMessage name="確認密碼" class="whitespace-nowrap text-[#DC3545]" />
    </div>
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

defineProps({
  errors: {
    required: true
  }
})
</script>
<style scoped></style>
