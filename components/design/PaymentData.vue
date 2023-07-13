<template>
  <div class="pt-10">
    <h4 class="mb-5">付款方式</h4>
    <div class="mb-20">
      <select class="formInput" v-model="inputPaymentInfo.PayWay">
        <option value="" selected disabled>請選擇</option>
        <option value="線上信用卡付款">線上信用卡付款</option>
      </select>
    </div>
    <h4 class="mb-5">訂單金額</h4>
    <div class="flex flex-row items-end justify-between">
      <div class="flex flex-col gap-3">
        <p>認領圖總金額 ${{ props.payment.Total }}</p>
        <p>(訂金 ${{ props.payment.Deposit }} + 尾款 ${{ props.payment.Balance }})</p>
      </div>
      <div class="flex flex-row items-end gap-5">
        <h4>應付金額</h4>
        <p class="text-[32px] font-bold leading-[40px]">${{ props.payment.Total }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useOrderStore } from '~/stores/order'

const props = defineProps({
  payment: {
    required: true
  }
})

const store = useOrderStore()
const { inputPaymentInfo } = storeToRefs(store)
</script>
