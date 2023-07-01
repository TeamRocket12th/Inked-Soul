<template>
  <!-- 上傳刺青圖 -->
  <label for="file" class="relative overflow-hidden rounded-lg border border-black">
    <div class="flex h-full flex-col items-center justify-center gap-[20px]">
      <Icon name="ic:baseline-add-circle-outline" class="h-[100px] w-[100px]" />
      <p>上傳您的原創認領圖</p>
      <p>最大文件大小：4mb</p>
    </div>
    <img
      :src="url"
      alt=""
      class="absolute top-[50%] max-h-[400px] w-full -translate-y-[50%] bg-gray-100 object-contain"
    />
    <input
      type="file"
      accept=".jpg, .png, .svg "
      id="file"
      class="hidden"
      @change.stop="handleOnPreview"
    />
  </label>
</template>
<script setup>
import { useUploadTattooStore } from '~/stores/uploadTattoo'
import { storeToRefs } from 'pinia'

const store = useUploadTattooStore()
const { uploadTattooData } = storeToRefs(store)

const url = ref()
const handleOnPreview = (event) => {
  const file = event.target.files[0]
  if (file.size > 1024 * 1024 * 4) {
    return
  }
  url.value = URL.createObjectURL(event.target.files[0])
  // 待確認
  uploadTattooData.value.Image = url.value
}
</script>
<style scoped></style>
