<template>
  <div>
    <h4 class="mb-10">個人資料</h4>
    <div class="flex flex-col gap-5">
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
            v-model="inputArtistInfoData.Realname"
            :class="{ 'border-[#DC3545]': props.errors.真實姓名 }"
            :placeholder="artistInfoData.Realname"
          />
          <Icon
            name="ic:baseline-error-outline"
            class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
            v-if="props.errors.真實姓名"
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
            v-model="inputArtistInfoData.Nickname"
            :class="{ 'border-[#DC3545]': props.errors.名稱 }"
            :placeholder="artistInfoData.Nickname"
          />
          <Icon
            name="ic:baseline-error-outline"
            class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
            v-if="props.errors.名稱"
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
            v-model="inputArtistInfoData.Phone"
            :class="{ 'border-[#DC3545]': props.errors.手機 }"
            :placeholder="artistInfoData.Phone"
          />
          <Icon
            name="ic:baseline-error-outline"
            class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
            v-if="props.errors.手機"
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
            v-model="artistInfoData.Account"
            disabled
          />
          <Icon
            name="ic:baseline-error-outline"
            class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
            v-if="props.errors.電子信箱"
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
            v-model="inputArtistInfoData.Experience"
            :class="{ 'border-[#DC3545]': props.errors.資歷 }"
            :placeholder="artistInfoData.Experience || 1"
          />
          <Icon
            name="ic:baseline-error-outline"
            class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
            v-if="props.errors.資歷"
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
const { inputArtistInfoData, artistInfoData } = storeToRefs(store)

const { isUnder20, isPhone } = useValidate()

const props = defineProps({
  errors: {
    require: true
  }
})
</script>
<style scoped></style>
