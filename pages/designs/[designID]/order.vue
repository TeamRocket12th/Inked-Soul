<template>
  <div class="container">
    <div class="grid grid-cols-3">
      <div class="col-span-2">
        <OrderData/>
        <PaymentData :deposit="designData.deposit" :final-payment="designData.finalPayment" />
        <!-- 確認按鈕 -->
        <PayBtn :deposit="designData.deposit" />
        <p>
          <Icon name="ic:baseline-warning-amber" size="16" />
          本平台僅收「訂金」，剩餘尾款請於預約當日與刺青師本人交易。
        </p>
      </div>
      <!-- 右側訂單內容 -->
      <div>
        <h2 class="text-2xl">訂單內容</h2>
        <DesignIntro :design-data="designData" :id="id">
          <template #image>
            <img :src="`${designData.image}`" />
            <p>{{ designData.designName }}</p>
          </template>
        </DesignIntro>
      </div>
    </div>
  </div>
</template>
<script setup>
import DesignIntro from '~/components/design/DesignIntro'
import OrderData from '~/components/design/OrderData'
import PaymentData from '~/components/design/PaymentData'
import PayBtn from '~/components/design/PayBtn'
import { useOrderStore } from '~/stores/order'
import { storeToRefs } from 'pinia'
const route = useRoute()
const id = route.params.designID
const { data } = await useFetch(`/api/getDesign/${id}`)
const designData = data.value.data
const date = ref(new Date())
const store=useOrderStore()
const { designData:orderData } = storeToRefs(store)
orderData.value.ID=id
orderData.value.name=designData.designName
orderData.value.deposit=designData.deposit
</script>
