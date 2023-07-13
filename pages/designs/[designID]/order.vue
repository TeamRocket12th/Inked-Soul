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
          <OrderData :time="artistData" :artistId="designInfo.ArtistID" />
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
import { storeToRefs } from 'pinia'
import { useOrderStore } from '~/stores/order'
import DesignIntro from '~/components/design/DesignIntro'
import OrderData from '~/components/design/OrderData'
import PaymentData from '~/components/design/PaymentData'
import PaymentBtn from '~/components/design/PaymentBtn'

const router = useRouter()
const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const APIBASE = runtimeConfig.public.APIBASE

const designID = route.params.designID
const designInfo = ref()

const {
  data: design,
  error,
  pending
} = await useFetch(`${APIBASE}/api/getimage/imgid/${designID}`, {
  headers: { 'Content-type': 'application/json' }
})

//
const { data } = await useFetch(`/api/getDesign/${designID}`)
const artistData = data.value.data.artistData
//

designInfo.value = design.value.Data

const store = useOrderStore()
const { designData } = storeToRefs(store)
designData.value.ID = designID
designData.value.name = designInfo.Name
designData.value.deposit = designInfo.Deposit

const toPreviousPage = () => {
  router.push(`/designs/${designID}`)
}
</script>
