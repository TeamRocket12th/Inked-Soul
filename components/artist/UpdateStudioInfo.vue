<template>
  <div>
    <p class="mb-10 text-base font-bold">工作室資訊</p>
    <VForm v-slot="{ errors, meta }" class="flex flex-col gap-5">
      <div class="flex flex-col gap-2">
        <div class="flex flex-row items-center justify-between">
          <label for="studio" class="cursor-pointer">店名 </label>
          <VErrorMessage name="店名" class="whitespace-nowrap text-[#DC3545]" />
        </div>
        <div class="relative">
          <VField
            id="studio"
            :rules="isUnder20"
            name="店名"
            class="formInput"
            v-model="editArtistInfoData.studioName"
            :class="{ 'border-[#DC3545]': errors.店名 }"
          />
          <Icon
            name="ic:baseline-error-outline"
            class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
            v-if="errors.店名"
          />
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <div class="flex flex-row items-center justify-between">
          <label for="license" class="cursor-pointer">營利事業登記證</label>
          <VErrorMessage name="營業登記號" class="whitespace-nowrap text-[#DC3545]" />
        </div>
        <div class="relative">
          <VField
            id="license"
            name="營業登記號"
            class="formInput"
            v-model="editArtistInfoData.license"
            :class="{ 'border-[#DC3545]': errors.營業登記號 }"
          />
          <Icon
            name="ic:baseline-error-outline"
            class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
            v-if="errors.營業登記號"
          />
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <label for="address" class="cursor-pointer">地址 </label>
        <VField id="address" name="地址" class="formInput" v-model="editArtistInfoData.address" />
      </div>
      <div class="flex flex-col gap-2">
        <div class="flex flex-row items-center justify-between">
          <label for="tel" class="cursor-pointer">電話 </label>
          <VErrorMessage name="電話" class="whitespace-nowrap text-[#DC3545]" />
        </div>
        <div class="relative">
          <VField
            id="tel"
            :rules="isTel"
            name="電話"
            class="formInput"
            v-model="editArtistInfoData.tel"
            placeholder="00-00000000"
            :class="{ 'border-[#DC3545]': errors.電話 }"
          />
          <Icon
            name="ic:baseline-error-outline"
            class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
            v-if="errors.電話"
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
const { editArtistInfoData } = storeToRefs(store)

const { isTel, isUnder20 } = useValidate()
</script>
<style scoped></style>
