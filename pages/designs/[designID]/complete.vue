<template>
  <div class="container mx-auto flex h-[45vh] flex-col items-center justify-center bg-white">
    <div class="flex flex-col items-center pb-4">
      <Icon name="ic:sharp-event-available" size="72" class="pb-4" />
      <h4 class="pb-4">付款成功！訂單成立</h4>
      <p class="text-gray-400">等候刺青師三個工作天確認</p>
    </div>

    <div class="">
      <NuxtLink
        :to="authToken ? `account/normal/${orderID}` : '/account/login'"
        class="btn mr-4 border-[1px] border-primary bg-white hover:border-secondary active:border-black"
        >看訂單交易紀錄</NuxtLink
      >
      <NuxtLink to="/designs" class="btn-basic btn-small">探索更多認領圖</NuxtLink>
    </div>
  </div>
</template>
<script setup>
import OrderArea from '~/container/order/OrderArea'
import OrderDetail from '~/components/user/OrderDetail'
import { storeToRefs } from 'pinia'
import { useOrderStore } from '~/stores/order'
import { useAccountStore } from '~/stores/account'
const store = useOrderStore()
const accountStore = useAccountStore()
const { orderID } = storeToRefs(store)
const { authToken } = storeToRefs(accountStore)
</script>
