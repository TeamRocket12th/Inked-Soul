<template>
  <div class="flex flex-col gap-5">
    <div class="flex flex-col gap-2">
      <div class="grid grid-cols-3 gap-3">
        <div class="flex flex-col gap-2">
          <div class="flex flex-row items-center justify-between">
            <label for="deposit" class="cursor-pointer">訂金（元）</label>
            <!-- <VErrorMessage name="訂金" class="whitespace-nowrap text-[#DC3545]" /> -->
          </div>
          <div class="relative">
            <VField
              id="deposit"
              v-model="deposit"
              name="訂金"
              rules="required"
              class="formInput"
              placeholder="3,000"
              disabled
            />
            <Icon
              v-if="props.errors.訂金"
              name="ic:baseline-error-outline"
              class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
            />
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <div class="flex flex-row items-center justify-between">
            <label for="balance" class="cursor-pointer">尾款（元）</label>
            <!-- <VErrorMessage name="尾款" class="whitespace-nowrap text-[#DC3545]" /> -->
          </div>
          <div class="relative">
            <VField
              id="balance"
              v-model="balance"
              name="尾款"
              rules="required"
              class="formInput"
              placeholder="7,000"
              disabled
            />
            <Icon
              v-if="props.errors.尾款"
              name="ic:baseline-error-outline"
              class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
            />
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <div class="flex flex-row items-center justify-between">
            <label for="totalPrice" class="cursor-pointer">總金額（元） </label>
            <!-- <VErrorMessage name="總金額" class="whitespace-nowrap text-[#DC3545]" /> -->
          </div>
          <div class="relative">
            <VField
              id="totalPrice"
              v-model="totalPrice"
              name="總金額"
              rules="required|numeric"
              class="formInput"
              placeholder="10,000"
              :class="{ 'border-[#DC3545]': props.errors.總金額 }"
            />
            <Icon
              v-if="props.errors.總金額"
              name="ic:baseline-error-outline"
              class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
            />
          </div>
        </div>
      </div>
      <p class="flex flex-row items-center gap-2 text-secondary">
        <Icon name="ic:baseline-error-outline" size="24" />
        <span class="text-base"> 本平台僅收<strong>「三成訂金」</strong></span>
      </p>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useUploadTattooStore } from '~/stores/uploadTattoo'

const props = defineProps({
  errors: {
    type: null,
    required: true
  }
})
const store = useUploadTattooStore()
const { uploadTattooData } = storeToRefs(store)

const designIdea = ref()
const totalPrice = ref()
const deposit = ref()
const balance = ref()

watch(totalPrice, (newTotalPrice) => {
  deposit.value = Math.floor(newTotalPrice * 0.3).toLocaleString()
  const numericDeposit = Number(deposit.value.replace(/,/g, ''))
  balance.value = Math.floor(newTotalPrice - numericDeposit).toLocaleString()
  uploadTattooData.value.pictotal = totalPrice.value.toLocaleString()
  uploadTattooData.value.picdeposit = deposit.value.toString()
  uploadTattooData.value.picbalance = balance.value.toString()
})

watch(designIdea, (_newValue) => {
  uploadTattooData.value.picidea = designIdea.value
})
</script>
<style scoped></style>
