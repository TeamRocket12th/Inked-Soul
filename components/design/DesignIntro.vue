<template>
  <div class="flex flex-col gap-10 rounded-lg bg-white p-5 shadow">
    <slot name="image"></slot>

    <!-- 預約資訊 -->
    <div v-if="props">
      <p class="mb-3 bg-primary px-5 py-3">預約資訊</p>
      <div class="flex flex-col gap-3">
        <NuxtLink :to="`/artists/${props.designData.ArtistID}`">
          <div class="flex flex-row items-center gap-2 duration-200 hover:text-secondary">
            <div class="avatar">
              <div class="w-10 rounded-lg">
                <img :src="`${props.designData.ArtistPhoto}`" />
              </div>
            </div>
            <p>{{ props.designData.ArtistName }}</p>
          </div>
        </NuxtLink>
        <p>工作室&nbsp; | &nbsp;{{ props.designData.StudioName }}</p>
        <div class="flex flex-row items-center gap-2">
          <Icon name="ic:outline-phone" size="24" class="text-secondary" />
          <p>{{ props.designData.ArtistTel }}</p>
        </div>
        <div class="flex flex-row items-center gap-2">
          <Icon name="ic:outline-home" size="24" class="text-secondary" />
          <p>{{ props.designData.Address }}</p>
        </div>
        <div class="flex flex-row items-center gap-2">
          <Icon name="ic:round-access-time" size="24" class="text-secondary" />
          <p>
            {{ props.designData.StartTime || '00:00' }}
            <span>-</span>
            {{ props.designData.EndTime || '00:00' }}
          </p>
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
