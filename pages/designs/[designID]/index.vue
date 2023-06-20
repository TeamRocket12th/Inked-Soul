<template>
  <div class="container">
    <p>單一認領圖頁</p>
    <p>認領圖ID：{{ route.params.designID }}</p>
    <!-- 認領圖資訊 -->
    <div class="grid grid-cols-3">
      <DesignImage v-if="designData" :id="id" :design-data="designData" class="col-span-2" />
      <DesignIntro v-if="designData" :design-data="designData">
        <template #price>
          <div>
            <p>
              訂金<span class="text-4xl font-bold">${{ designData.deposit }}</span>
            </p>
            <NuxtLink :to="`/designs/${id}/order`">
              <button class="btn-neutral btn w-full">認領圖</button>
            </NuxtLink>
            <span>總金額${{ designData.deposit + designData.finalPayment }}</span>
            <span> </span>
            <span>尾款${{ designData.finalPayment }}</span>
            <div class="flex">
              <Icon name="ic:baseline-warning-amber" size="24" />
              <p class="text-slate-500">
                本平台僅收「訂金」，<br />剩餘尾款請於預約當日與刺青師本人交易。
              </p>
            </div>
          </div>
        </template>
      </DesignIntro>
    </div>
  </div>
</template>
<script setup>
import DesignImage from '~/components/design/DesignImage.vue'
import DesignIntro from '~/components/design/DesignIntro.vue'

const route = useRoute()
const id = route.params.designID
// const { data } = await useFetch(`/api/getDesign/${id}`)
const { data } = await useFetch(`http://localhost:5005/design/${id}`)
const designData = data.value
</script>
