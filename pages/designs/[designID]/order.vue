<template>
  <div class="container">
    <Icon
      name="ic:outline-keyboard-arrow-left"
      size="48"
      class="mb-5 cursor-pointer rounded-full border border-[#D0D0D0] text-secondary duration-200 hover:border-secondary"
      @click="toPreviousPage"
    />
    <div class="grid grid-cols-3 gap-8">
      <div class="col-span-2">
        <div class="mb-10 rounded-lg bg-white p-4 shadow">
          <OrderData :time="artistData" />
          <PaymentData :payment="designInfo" />
        </div>
        <div class="flex flex-col gap-3">
          <!-- 確認按鈕 -->
          <PaymentBtn :deposit="designInfo.Deposit" />
          <p class="flex flex-row items-center gap-2 text-[#6C6C6C]">
            <Icon name="ic:outline-error-outline" size="24" />
            <span> 本平台僅收「訂金」，剩餘尾款請於預約當日與刺青師本人交易。 </span>
          </p>
        </div>
      </div>
      <!-- 右側訂單內容 -->
      <div>
        <DesignIntro :design-data="designInfo" :id="designID">
          <template #image>
            <div>
              <h4 class="mb-5">訂單內容</h4>
              <div class="flex flex-col gap-3">
                <img
                  :src="`${designInfo.Url}`"
                  class="overflow-hidden rounded-lg border border-[#D0D0D0] object-contain"
                />
                <p>{{ designInfo.Name }}</p>
              </div>
            </div>
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
import PaymentBtn from '~/components/design/PaymentBtn'
import { useOrderStore } from '~/stores/order'
import { storeToRefs } from 'pinia'

const router = useRouter()
const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const APIBASE = runtimeConfig.public.APIBASE
const authToken = useCookie('token')

const designID = route.params.designID
const designInfo = ref()

const {
  data: design,
  error,
  pending
} = await useFetch(`${APIBASE}/api/getimage/imgid/${designID}`, {
  headers: { 'Content-type': 'application/json', Authorization: `Bearer ${authToken.value}` }
})

designInfo.value = design.value.Data

const { data } = await useFetch(`/api/getDesign/${designID}`)
const designData = data.value.data
const artistData = data.value.data.artistData

const store = useOrderStore()
const { designData: orderData } = storeToRefs(store)
orderData.value.ID = designID
orderData.value.name = designData.designName
orderData.value.deposit = designData.deposit

const toPreviousPage = () => {
  router.push(`/designs/${designID}`)
}
</script>
