<template>
  <div class="container">
    <p>單一認領圖頁</p>
    <p>認領圖ID：{{ route.params.designID }}</p>
    <!-- 認領圖資訊 -->
    <div class="grid grid-cols-3 gap-8">
      <div class="col-span-2 flex flex-col gap-10">
        <DesignImage v-if="designData" :id="id" :design-data="designData" />
        <DesignComment />
      </div>
      <DesignIntro v-if="designData" :design-data="designData" class="sticky top-[120px] h-fit">
        <template #price>
          <div>
            <p class="mb-[30px] text-end">
              <span class="text-base text-[#6C6C6C]"> 訂金 </span>
              <span class="text-4xl font-bold">${{ designData.deposit }}</span>
            </p>
            <NuxtLink :to="`/designs/${id}/order`">
              <button class="btn-neutral btn mb-3 w-full">認領圖</button>
            </NuxtLink>
            <p class="mb-3 flex flex-row items-center gap-[18px]">
              <span>總金額 ${{ designData.deposit + designData.finalPayment }}</span>
              <span>尾款 ${{ designData.finalPayment }}</span>
            </p>

            <p class="flex flex-row items-start gap-2 text-[#6C6C6C]">
              <Icon name="ic:outline-error-outline" size="24" />
              <span> 本平台僅收「訂金」，<br />剩餘尾款請於預約當日與刺青師本人交易。 </span>
            </p>
          </div>
        </template>
      </DesignIntro>
    </div>
  </div>
</template>
<script setup>
import DesignImage from '~/components/design/DesignImage.vue'
import DesignIntro from '~/components/design/DesignIntro.vue'
import DesignComment from '~/components/design/DesignComment.vue'

const route = useRoute()
const id = route.params.designID
const { data } = await useFetch(`/api/getDesign/${id}`)
// const { data } = await useFetch(`http://localhost:5005/design/${id}`)
const designData = data.value.data
</script>
