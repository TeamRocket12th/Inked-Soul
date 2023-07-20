<template>
  <VForm v-slot="{ errors, meta }" class="flex flex-col gap-[26px]">
    <label class="relative flex flex-col items-start gap-1">
      <span class="mb-1">電子信箱</span>
      <VField
        v-model="email"
        name="電子信箱"
        rules="required|email"
        class="accountInput"
        placeholder="Email"
        :class="{ 'border-[#DC3545]': errors.電子信箱 }"
      />
      <Icon
        v-if="errors.電子信箱"
        name="ic:baseline-error-outline"
        class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
      />
      <div class="h-[14px]">
        <VErrorMessage name="電子信箱" class="whitespace-nowrap text-[#DC3545]" />
      </div>
    </label>
    <label class="relative flex flex-col items-start gap-1">
      <span class="mb-1">密碼</span>
      <VField
        v-model="password"
        name="密碼"
        type="password"
        :rules="isPassword"
        class="accountInput"
        placeholder="Password"
        :class="{ 'border-[#DC3545]': errors.密碼 }"
      />
      <Icon
        v-if="errors.密碼"
        name="ic:baseline-error-outline"
        class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
      />
      <div class="h-[14px]">
        <VErrorMessage name="密碼" class="whitespace-nowrap text-[#DC3545]" />
      </div>
    </label>
    <slot name="confirm-passward" :message="errors"></slot>
  </VForm>
  <button
    v-show="route.path.includes('login')"
    type="button"
    class="btn-neutral btn bg-black text-white"
    @click="loginSubmit"
  >
    登入
  </button>
  <div v-show="route.path.includes('login')" class="flex flex-row justify-center">
    <NuxtLink to="/account/forgotpassword">忘記密碼</NuxtLink>｜
    <NuxtLink to="/account/signup">註冊</NuxtLink>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useAccountStore } from '~/stores/account'
const route = useRoute()
const store = useAccountStore()
const { email, password, guid } = storeToRefs(store)
const { loginSubmit } = store

const { isPassword } = useValidate()
guid.value = route.query.key
</script>
<style></style>
