<template>
  <!-- <VForm v-slot="{ errors, meta }" class="flex flex-col"> -->
  <div class="flex flex-col">
    <div class="flex flex-col gap-2">
      <div class="flex flex-row items-center justify-between">
        <label for="intro" class="cursor-pointer">個人簡介（30字內） </label>
        <VErrorMessage name="簡介" class="whitespace-nowrap text-[#DC3545]" />
      </div>
      <div class="relative">
        <VField
          id="intro"
          as="textarea"
          name="簡介"
          rules="max:30"
          placeholder="填寫您的個人簡介"
          class="textarea-bordered textarea min-h-[72px] w-full"
          v-model="artistInfoData.Intro"
          :class="{ 'border-[#DC3545]': props.errors.簡介 }"
        />
        <Icon
          name="ic:baseline-error-outline"
          class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
          v-if="props.errors.個人簡介"
        />
      </div>
    </div>
  </div>

  <!-- </VForm> -->
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useAccountStore } from '~/stores/account'

const store = useAccountStore()
const { artistInfoData } = storeToRefs(store)

const props = defineProps({
  errors: {
    require: true
  }
})
</script>
<style scoped></style>
