<template>
  <div class="container mx-auto">
    <OrderArea>
      <template #orderContext>
        <p>付款成功！訂單成立</p>
        <p>等候刺青師三個工作天確認</p>
      </template>
      <template #steps>
        <ul class="steps w-full">
          <li class="step-neutral step">訂單成立</li>
          <li class="step">完成訂單</li>
          <li class="step">評價刺青師</li>
        </ul>
      </template>
      <template #orderDetail>
        <OrderDetail :orderID="orderID" />
      </template>
    </OrderArea>
  </div>
</template>
<script setup>
import OrderArea from '~/container/order/OrderArea'
import OrderDetail from '~/components/user/OrderDetail'
import { storeToRefs } from 'pinia'
import { useOrderStore } from '~/stores/order'

const store = useOrderStore()
const { orderID } = storeToRefs(store)
</script>
