<template>
  <VForm v-slot="{ errors, meta }" class="flex flex-col gap-5">
    <div class="flex flex-col gap-2">
      <div class="flex flex-row items-center justify-between">
        <label for="designIdea" class="cursor-pointer">設計理念（30字內）</label>
        <VErrorMessage name="設計理念" class="whitespace-nowrap text-[#DC3545]" />
      </div>
      <div class="relative">
        <VField
          id="designIdea"
          v-model="designIdea"
          as="textarea"
          name="設計理念"
          rules="max:30"
          placeholder="填寫您的設計理念"
          class="textarea-bordered textarea min-h-[72px] w-full"
          :class="{ 'border-[#DC3545]': errors.設計理念 }"
        />
        <Icon
          name="ic:baseline-error-outline"
          class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
          v-if="errors.設計理念"
        />
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <div class="grid grid-cols-3 gap-3">
        <div class="flex flex-col gap-2">
          <div class="flex flex-row items-center justify-between">
            <label for="deposit" class="cursor-pointer">訂金（元）</label>
            <VErrorMessage name="訂金" class="whitespace-nowrap text-[#DC3545]" />
          </div>
          <div class="relative">
            <VField
              id="deposit"
              v-model="deposit"
              name="訂金"
              rules="required"
              class="formInput"
              placeholder="2100"
              disabled
            />
            <Icon
              name="ic:baseline-error-outline"
              class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
              v-if="errors.訂金"
            />
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <div class="flex flex-row items-center justify-between">
            <label for="balance" class="cursor-pointer">尾款（元）</label>
            <VErrorMessage name="尾款" class="whitespace-nowrap text-[#DC3545]" />
          </div>
          <div class="relative">
            <VField
              id="balance"
              v-model="balance"
              name="尾款"
              rules="required"
              class="formInput"
              placeholder="4100"
              disabled
            />
            <Icon
              name="ic:baseline-error-outline"
              class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
              v-if="errors.尾款"
            />
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <div class="flex flex-row items-center justify-between">
            <label for="totalPrice" class="cursor-pointer">總金額（元） </label>
            <VErrorMessage name="總金額" class="whitespace-nowrap text-[#DC3545]" />
          </div>
          <div class="relative">
            <VField
              id="totalPrice"
              v-model="totalPrice"
              name="總金額"
              rules="required"
              class="formInput"
              :placeholder="`${totalPrice} `"
              :class="{ 'border-[#DC3545]': errors.總金額 }"
            />
            <Icon
              name="ic:baseline-error-outline"
              class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
              v-if="errors.總金額"
            />
          </div>
        </div>
      </div>
      <p class="flex flex-row items-center gap-2 text-secondary">
        <Icon name="ic:baseline-error-outline" size="24" />
        <span class="text-base"> 本平台僅收<strong>「三成訂金」</strong></span>
      </p>
    </div>
  </VForm>
</template>
<script setup>
import { useUploadTattooStore } from '~/stores/uploadTattoo'
import { storeToRefs } from 'pinia'

const store = useUploadTattooStore()
const { uploadTattooData } = storeToRefs(store)

const designIdea = ref()
const totalPrice = ref(7000)
const deposit = ref()
// Math.floor(totalPrice.value * 0.3)
const balance = ref()
// Math.floor(totalPrice.value - deposit.value)
watch(totalPrice, (newTotalPrice) => {
  deposit.value = Math.floor(newTotalPrice * 0.3)
  balance.value = Math.floor(newTotalPrice - deposit.value)
})

// uploadTattooData.value.Payment.Total = totalPrice.value
// uploadTattooData.value.Payment.Balance = balance.value
// uploadTattooData.value.Payment.Deposit = deposit.value
// uploadTattooData.value.Idea = designIdea.value
// uploadTattooData.value.Payment = deposit.value
</script>
<style scoped></style>
