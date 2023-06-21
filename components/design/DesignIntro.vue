<template>
  <div class="border-[1px] border-black p-5">
    <slot name="image"></slot>
    <!-- 預約資訊 -->
    <div v-if="props" class="mb-16">
      <div class="mb-4 border-b-[1px] border-black pb-5">
        <p class="text-bold">預約資訊</p>
      </div>
      <div>
        <div class="flex items-center">
          <div class="avatar">
            <div class="w-10 rounded-full">
              <img :src="`${props.designData.artistData.photo}`" />
            </div>
          </div>
          <p>{{ props.designData.artistData.nickname }}</p>
        </div>
        <p>工作室 | {{ props.designData.artistData.studioName }}</p>
        <div class="flex">
          <Icon name="ic:outline-phone" size="24" />
          <p>{{ props.designData.artistData.tel }}</p>
        </div>
        <div class="flex">
          <Icon name="ic:outline-home" size="24" />
          <p>{{ props.designData.artistData.location }}</p>
        </div>
        <div class="flex">
          <Icon name="ic:round-access-time" size="24" />
          <p>{{ props.designData.artistData.businessHours }}</p>
        </div>
      </div>
    </div>
    <!-- 操作細節 -->
    <div>
      <div class="mb-4 border-b-[1px] border-black pb-5">
        <p class="text-bold">操作細節</p>
      </div>
      <p>作品尺寸 | {{ props.designData.size }}</p>
      <p>建議部位 | {{ props.designData.bodyPart }}</p>
      <p>預計操作時間 | {{ props.designData.time }}</p>
    </div>
    <!-- 價格與下單 -->
    <slot name="price"></slot>
  </div>
</template>
<script setup>
const props = defineProps({
  designData: {
    type: Object,
    required: true
  }
})
</script>
