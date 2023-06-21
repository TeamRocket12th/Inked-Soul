<template>
  <div>
    <p>單一訂單ID{{orderID}}</p>
    <OrderArea>
      <template #orderContext>刺青師已確認，完成訂單</template>
      <template #steps>
        <ul class="steps">
          <li class="step step-neutral">訂單成立</li>
          <li class="step step-neutral">完成訂單</li>
          <li class="step">評價刺青師</li>
        </ul>  
      </template>
      <template #orderDetail>
        <OrderBar :order="order" />
      </template>
    </OrderArea>
  </div>
</template>

<script setup>
import OrderArea from '~/container/order/OrderArea'
import OrderBar from '~/components/order/OrderBar'

const route=useRoute()
const orderID=route.params.orderID
const {data}=await useFetch(`/api/getOrder/${orderID}`)
console.log(data)
const order = ref([])
order.value = data.value.data
</script>

<style lang="scss" scoped></style>
