<template>
  <div class="flex flex-col gap-10 rounded-lg bg-white p-5 shadow">
    <slot name="image"></slot>

    <!-- 預約資訊 -->
    <div v-if="props">
      <p class="mb-3 bg-primary px-5 py-3">預約資訊</p>
      <div class="flex flex-col gap-3">
        <div class="flex flex-row items-center gap-2">
          <div class="avatar">
            <div class="w-10 rounded-lg">
              <img :src="`${props.designData.ArtistPhoto}`" />
            </div>
          </div>
          <p>{{ props.designData.ArtistName }}</p>
        </div>
        <p>工作室&nbsp; | &nbsp;{{ props.designData.StudioName }}</p>
        <div class="flex flex-row items-center gap-2">
          <Icon name="ic:outline-phone" size="24" />
          <p>{{ props.designData.ArtistTel }}</p>
        </div>
        <div class="flex flex-row items-center gap-2">
          <Icon name="ic:outline-home" size="24" />
          <p>{{ props.designData.City }}</p>
        </div>
        <div class="flex flex-row items-center gap-2">
          <Icon name="ic:round-access-time" size="24" />
          <span>{{ props.designData.StartTime }}</span>
          <span>-</span>
          <span>{{ props.designData.EndTime }}</span>
        </div>
      </div>
    </div>
    <!-- 操作細節 -->
    <div class="flex flex-col gap-3">
      <p class="mb-3 bg-primary px-5 py-3">操作細節</p>
      <p>作品尺寸&nbsp; | &nbsp;{{ props.designData.Size }}</p>
      <p>
        建議部位&nbsp; | &nbsp;
        <span v-for="(part, key) in props.designData.BodyPart" :key="key">
          {{ part }}
          <span v-if="key !== props.designData.BodyPart.length - 1"> 、 </span>
        </span>
      </p>
      <p>預計操作時間&nbsp; | &nbsp;{{ props.designData.Hour }} 小時</p>
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
