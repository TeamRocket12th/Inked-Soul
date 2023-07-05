<template>
  <div>
    <p class="mb-10 text-base font-bold">個人資料</p>
    <VForm v-slot="{ errors, meta }" class="flex flex-col gap-5">
      <div class="relative flex flex-col gap-2">
        <div class="flex flex-row items-center justify-between">
          <label for="realName" class="cursor-pointer">真實姓名</label>
          <VErrorMessage name="真實姓名" class="whitespace-nowrap text-[#DC3545]" />
        </div>
        <div class="relative">
          <VField
            id="realName"
            :rules="isUnder20"
            name="真實姓名"
            class="formInput"
            v-model="editArtistInfoData.realName"
            :class="{ 'border-[#DC3545]': errors.真實姓名 }"
          />
          <Icon
            name="ic:baseline-error-outline"
            class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
            v-if="errors.真實姓名"
          />
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <div class="flex flex-row items-center justify-between">
          <label for="nickName" class="cursor-pointer">名稱</label>
          <VErrorMessage name="名稱" class="whitespace-nowrap text-[#DC3545]" />
        </div>
        <div class="relative">
          <VField
            id="nickName"
            :rules="isUnder20"
            name="名稱"
            class="formInput"
            v-model="editArtistInfoData.nickName"
            :class="{ 'border-[#DC3545]': errors.名稱 }"
          />
          <Icon
            name="ic:baseline-error-outline"
            class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
            v-if="errors.名稱"
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
            :rules="isPhone"
            name="手機"
            class="formInput"
            placeholder="0912345678"
            v-model="editArtistInfoData.phone"
            :class="{ 'border-[#DC3545]': errors.手機 }"
          />
          <Icon
            name="ic:baseline-error-outline"
            class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
            v-if="errors.手機"
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
            rules="email"
            name="電子信箱"
            class="formInput text-[#D0D0D0]"
            v-model="email"
            disabled
          />
          <Icon
            name="ic:baseline-error-outline"
            class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
            v-if="errors.電子信箱"
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
            rules="integer: true"
            name="資歷"
            class="formInput"
            placeholder="8"
            v-model="editArtistInfoData.experience"
            :class="{ 'border-[#DC3545]': errors.資歷 }"
          />
          <Icon
            name="ic:baseline-error-outline"
            class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
            v-if="errors.資歷"
          />
        </div>
      </div>
    </VForm>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useAccountStore } from '~/stores/account'

const store = useAccountStore()
const { email, editArtistInfoData } = storeToRefs(store)

const { isUnder20, isPhone } = useValidate()
</script>
<style scoped></style>
