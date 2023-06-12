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
  <button type="button" @click="submit">登入</button>
  <div class="flex flex-row justify-center">
    <NuxtLink>忘記密碼</NuxtLink>｜
    <NuxtLink to="signup">註冊</NuxtLink>
  </div>
</template>
<script setup>
import { configure } from 'vee-validate'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import { useAccountStore } from '~/stores/account'
import { storeToRefs } from 'pinia'

configure({
  generateMessage: localize({ zh_TW: zhTW })
  // validateOnInput: true // 輸入文字時，就立即進行驗證
})

setLocale('zh_TW')

const store = useAccountStore()
const { email, password } = storeToRefs(store)
const { submit } = store
</script>
<style></style>
