<template>
  <VForm>
    <label class="flex flex-col">
      <span>設計理念（30字內）</span>
      <VField
        v-model="designIdea"
        as="textarea"
        name="設計理念"
        rules="max:30"
        placeholder="填寫您的設計理念"
        class="textarea-bordered textarea min-h-[72px]"
      />
      <VErrorMessage name="設計理念" class="whitespace-nowrap" />
    </label>
    <div class="grid grid-cols-3 gap-3">
      <label class="flex flex-col items-start">
        <span>訂金（元）</span>
        <VField
          v-model="deposit"
          name="訂金"
          rules="required"
          class="formInput"
          placeholder="2100元"
          disabled
        />
        <VErrorMessage name="訂金" class="whitespace-nowrap" />
      </label>
      <label class="flex flex-col items-start">
        <span>尾款（元）</span>
        <VField
          v-model="balance"
          name="尾款"
          rules="required"
          class="formInput"
          placeholder="4900元"
          disabled
        />
        <VErrorMessage name="尾款" class="whitespace-nowrap" />
      </label>
      <label class="flex flex-col items-start">
        <span>總金額（元）</span>
        <VField
          v-model="totalPrice"
          name="總金額"
          rules="required"
          class="formInput"
          :placeholder="`${totalPrice} 元`"
        />
        <VErrorMessage name="總金額" class="whitespace-nowrap" />
      </label>
    </div>
    <p>
      <Icon
        name="ic:baseline-error-outline"
      />本平台僅收<strong>「訂金」</strong>，剩餘尾款請於預約當日與顧客交易。
    </p>
  </VForm>
</template>
<script setup>
import { useUploadTattooStore } from '~/stores/uploadTattoo'
import { storeToRefs } from 'pinia'

const store = useUploadTattooStore()
const { uploadTattooData } = storeToRefs(store)

const designIdea = uploadTattooData.value.Idea
const totalPrice = ref(7000)
const deposit = ref()
const balance = ref()
watch(totalPrice, (newTotalPrice) => {
  deposit.value = Math.floor(newTotalPrice * 0.3)
  balance.value = Math.floor(newTotalPrice - deposit.value)
})

uploadTattooData.value.Payment.Total = totalPrice.value
uploadTattooData.value.Payment.Balance = balance.value
uploadTattooData.value.Payment.Deposit = deposit.value
</script>
<style scoped></style>
