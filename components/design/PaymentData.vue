<template>
  <div class="pt-10">
    <h4 class="mb-5">付款方式</h4>
    <div class="relative mb-20">
      <Icon
        name="ic:baseline-keyboard-arrow-down"
        size="20"
        class="absolute right-4 top-[50%] -translate-y-[50%]"
      />

      <select v-model="inputPaymentInfo.PayWay" class="formInput appearance-none">
        <option value="" selected disabled>請選擇</option>
        <option value="線上信用卡付款">線上信用卡付款</option>
      </select>
    </div>
    <h4 class="mb-5">訂單金額</h4>
    <div class="flex flex-row items-end justify-between">
      <div class="flex flex-col gap-3">
        <p>認領圖總金額 ${{ totalPice }}</p>
        <p>(訂金 ${{ deposit }} + 尾款 ${{ balance }})</p>
      </div>
      <div class="flex flex-row items-end gap-5">
        <h4>應付金額</h4>
        <p class="text-[32px] font-bold leading-[40px]">${{ deposit }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useOrderStore } from '~/stores/order'

const props = defineProps({
  payment: {
    type: null,
    required: true
  }
})

const store = useOrderStore()
const { inputPaymentInfo } = storeToRefs(store)

const totalPice = ref(props.payment.Total.toLocaleString())
const balance = ref(props.payment.Balance.toLocaleString())
const deposit = ref(props.payment.Deposit.toLocaleString())
</script>
