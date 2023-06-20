<template>
  <VForm v-slot="{ errors, meta }" class="flex flex-col gap-10">
    <label class="relative flex flex-col items-start gap-2">
      <span>電子信箱</span>
      <VField
        name="電子信箱"
        rules="required|email"
        class="accountInput"
        v-model="email"
        placeholder="Email"
        :class="{ 'border-[#DC3545]': errors.電子信箱 }"
      />
      <Icon
        name="ic:baseline-error-outline"
        class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
        v-if="errors.電子信箱"
      />
      <VErrorMessage name="電子信箱" class="whitespace-nowrap border-[#DC3545]" />
    </label>
    <label class="relative flex flex-col items-start gap-2">
      <span>密碼</span>
      <VField
        name="密碼"
        type="password"
        rules="required|min:8"
        class="accountInput"
        v-model="password"
        placeholder="Password"
        :class="{ 'border-[#DC3545]': errors.密碼 }"
      />
      <Icon
        name="ic:baseline-error-outline"
        class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
        v-if="errors.密碼"
      />
      <VErrorMessage name="密碼" class="whitespace-nowrap" />
    </label>
    <slot name="confirm-passward"></slot>
  </VForm>
  <button
    type="button"
    @click="loginSubmit"
    v-show="route.path.includes('login')"
    class="btn-neutral btn bg-black text-white"
  >
    登入
  </button>
  <div class="flex flex-row justify-center" v-show="route.path.includes('login')">
    <NuxtLink to="/account/forgotpassword">忘記密碼</NuxtLink>｜
    <NuxtLink to="/account/signup">註冊</NuxtLink>
  </div>
</template>
<script setup>
import { useAccountStore } from '~/stores/account'
import { storeToRefs } from 'pinia'

const route = useRoute()

const store = useAccountStore()
const { email, password } = storeToRefs(store)
const { loginSubmit } = store
</script>
<style></style>
