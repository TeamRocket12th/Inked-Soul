<template>
  <div>
    <h4 class="mb-10">個人資料</h4>
    <div class="flex flex-col gap-5">
      <div class="relative flex flex-col gap-2">
        <div class="flex flex-row items-center justify-between">
          <label for="realName" class="cursor-pointer">真實姓名* </label>
          <VErrorMessage name="真實姓名" class="whitespace-nowrap text-[#DC3545]" />
        </div>
        <div class="relative">
          <VField
            id="realName"
            v-model="artistInfoData.Realname"
            :rules="isUnder20"
            name="真實姓名"
            class="formInput text-sm"
            :class="{ 'border-[#DC3545]': props.errors.真實姓名 }"
            placeholder="請輸入真實姓名"
          />
          <Icon
            v-if="props.errors.真實姓名"
            name="ic:baseline-error-outline"
            class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
          />
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <div class="flex flex-row items-center justify-between">
          <label for="nickName" class="cursor-pointer">名稱* </label>
          <VErrorMessage name="名稱" class="whitespace-nowrap text-[#DC3545]" />
        </div>
        <div class="relative">
          <VField
            id="nickName"
            v-model="artistInfoData.Nickname"
            :rules="isUnder20"
            name="請輸入"
            class="formInput text-sm"
            :class="{ 'border-[#DC3545]': props.errors.名稱 }"
            placeholder="請輸入名稱"
          />
          <Icon
            v-if="props.errors.名稱"
            name="ic:baseline-error-outline"
            class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
          />
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <div class="flex flex-row items-center justify-between">
          <label for="phone" class="cursor-pointer">手機</label>
          <VErrorMessage name="手機" class="whitespace-nowrap text-[#DC3545]" />
        </div>
        <div class="relative">
          <VField
            id="phone"
            v-model="artistInfoData.Phone"
            :rules="isPhone"
            name="手機"
            class="formInput text-sm"
            placeholder="請輸入手機號碼"
            maxlength="10"
            :class="{ 'border-[#DC3545]': props.errors.手機 }"
          />
          <Icon
            v-if="props.errors.手機"
            name="ic:baseline-error-outline"
            class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
          />
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <div class="flex flex-row items-center justify-between">
          <label for="email" class="cursor-pointer">電子信箱</label>
          <VErrorMessage name="電子信箱" class="whitespace-nowrap text-[#DC3545]" />
        </div>
        <div class="relative">
          <VField
            id="email"
            v-model="artistInfoData.Account"
            rules="email"
            name="電子信箱"
            class="formInput text-sm text-[#D0D0D0]"
            disabled
          />
          <Icon
            v-if="props.errors.電子信箱"
            name="ic:baseline-error-outline"
            class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
          />
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <div class="flex flex-row items-center justify-between">
          <label for="experience" class="cursor-pointer">資歷 (年)</label>
          <VErrorMessage name="資歷" class="whitespace-nowrap text-[#DC3545]" />
        </div>
        <div class="relative">
          <VField
            id="experience"
            v-model="artistInfoData.Experience"
            rules="integer: true"
            name="資歷"
            class="formInput text-sm"
            :class="{ 'border-[#DC3545]': props.errors.資歷 }"
            placeholder="1"
          />
          <Icon
            v-if="props.errors.資歷"
            name="ic:baseline-error-outline"
            class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useAccountStore } from '~/stores/account'

const store = useAccountStore()
const { artistInfoData } = storeToRefs(store)

const { isUnder20, isPhone } = useValidate()

const props = defineProps({
  errors: {
    type: null,
    required: true
  }
})
</script>
<style scoped></style>
