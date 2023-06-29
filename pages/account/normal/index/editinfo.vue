<template>
  <div>
    <p class="mb-5 text-base font-bold">個人資料</p>
    <div class="mb-20 w-full">
      <VForm v-slot="{ errors, meta }" class="mb-4 flex flex-col gap-5">
        <div class="relative flex flex-col gap-2">
          <div class="flex flex-row items-center justify-between">
            <label for="realName" class="cursor-pointer">名稱</label>
            <VErrorMessage name="名稱" class="whitespace-nowrap text-[#DC3545]" />
          </div>
          <div class="relative">
            <VField
              id="realName"
              v-model="name"
              name="名稱"
              :rules="isUnder20"
              class="formInput"
              :class="{ 'border-[#DC3545]': errors.名稱 }"
            />
            <Icon
              name="ic:baseline-error-outline"
              class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
              v-if="errors.名稱"
            />
          </div>
        </div>
        <div class="relative flex flex-col gap-2">
          <div class="flex flex-row items-center justify-between">
            <label for="phone" class="cursor-pointer">手機</label>
            <VErrorMessage name="手機" class="whitespace-nowrap text-[#DC3545]" />
          </div>
          <div class="relative">
            <VField
              id="phone"
              :rules="isPhone"
              v-model="tel"
              name="手機"
              class="formInput"
              :class="{ 'border-[#DC3545]': errors.手機 }"
            />
            <Icon
              name="ic:baseline-error-outline"
              class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
              v-if="errors.手機"
            />
          </div>
        </div>
        <div class="relative flex flex-col gap-2">
          <div class="flex flex-row items-center justify-between">
            <label for="email" class="cursor-pointer">電子信箱</label>
            <VErrorMessage name="電子信箱" class="whitespace-nowrap text-[#DC3545]" />
          </div>
          <div class="relative">
            <VField
              id="email"
              rules="email"
              v-model="email"
              name="電子信箱"
              class="formInput"
              disabled
            />
            <Icon
              name="ic:baseline-error-outline"
              class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
              v-if="errors.電子信箱"
            />
          </div>
        </div>
      </VForm>
      <button
        type="button"
        class="btn w-full bg-black text-white hover:text-black"
        @click="editInfo"
      >
        更新個人資料
      </button>
    </div>
    <div class="w-full">
      <p class="mb-5 text-base font-bold">更改密碼</p>
      <VForm v-slot="{ errors, meta }" class="mb-4 flex flex-col gap-5">
        <div class="relative flex flex-col gap-2">
          <div class="flex flex-row items-center justify-between">
            <label for="newPassword" class="cursor-pointer">新密碼</label>
            <VErrorMessage name="新密碼" class="whitespace-nowrap text-[#DC3545]" />
          </div>
          <div class="relative">
            <VField
              id="newPassword"
              v-model="password"
              :rules="isPassword"
              name="新密碼"
              type="password"
              class="formInput"
              :class="{ 'border-[#DC3545]': errors.新密碼 }"
              disabled
            />
            <Icon
              name="ic:baseline-error-outline"
              class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
              v-if="errors.新密碼"
            />
          </div>
        </div>
        <div class="relative flex flex-col gap-2">
          <div class="flex flex-row items-center justify-between">
            <label for="newPassword" class="cursor-pointer">確認新密碼</label>
            <VErrorMessage name="密碼" class="whitespace-nowrap text-[#DC3545]" />
          </div>
          <div class="relative">
            <VField
              id="newPassword"
              v-model="confirmPassword"
              rules="confirmed:@新密碼"
              name="密碼"
              type="password"
              class="formInput"
              :class="{ 'border-[#DC3545]': errors.密碼 }"
              disabled
            />
            <Icon
              name="ic:baseline-error-outline"
              class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
              v-if="errors.密碼"
            />
          </div>
        </div>
      </VForm>
      <button type="button" class="btn w-full bg-black text-white" @click="editInfo">
        更改密碼
      </button>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useAccountStore } from '~/stores/account'
const store = useAccountStore()
const { email, password, confirmPassword, tel, name } = storeToRefs(store)
const { editInfo } = store

const { isUnder20, isPhone, isPassword } = useValidate()
</script>
<style scoped></style>
