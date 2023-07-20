<template>
  <div class="flex flex-col">
    <div class="flex flex-col gap-2">
      <div class="flex flex-wrap items-center justify-between">
        <label for="intro" class="cursor-pointer">個人簡介（30字內） </label>
        <VErrorMessage name="簡介" class="text-[#DC3545]" />
      </div>
      <div class="relative">
        <VField
          id="intro"
          v-model="inputArtistInfoData.Intro"
          as="textarea"
          name="簡介"
          rules="max:30"
          :placeholder="artistInfoData.Intro || '填寫您的個人簡介'"
          class="textarea-bordered textarea min-h-[72px] w-full"
          style="outline: none"
          :class="{ 'border-[#DC3545]': props.errors.簡介 }"
        />
        <Icon
          v-if="props.errors.個人簡介"
          name="ic:baseline-error-outline"
          class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useAccountStore } from '~/stores/account'

const store = useAccountStore()
const { artistInfoData, inputArtistInfoData } = storeToRefs(store)

const props = defineProps({
  errors: {
    type: null,
    required: true
  }
})
</script>
<style scoped></style>
