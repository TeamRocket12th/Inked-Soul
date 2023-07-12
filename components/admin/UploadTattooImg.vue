<template>
  <!-- 上傳刺青圖 -->
  <label
    for="file"
    :class="{ 'border-[#DC3545]': isFileSizeAlert }"
    class="relative overflow-hidden rounded-lg border border-black"
  >
    <div class="flex h-full flex-col items-center justify-center gap-[20px]">
      <Icon name="ic:baseline-add-circle-outline" class="h-[100px] w-[100px]" />
      <p>上傳您的原創認領圖</p>
      <p>最大文件大小：4mb</p>
    </div>
    <img
      :src="url"
      alt=""
      class="absolute top-[50%] h-full w-full -translate-y-[50%] bg-black object-contain"
    />
    <input
      id="file"
      type="file"
      accept=".jpg, .png, .svg "
      class="hidden"
      @change.stop="handleOnPreview"
    />
  </label>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useUploadTattooStore } from '~/stores/uploadTattoo'

const store = useUploadTattooStore()
const { uploadTattooData } = storeToRefs(store)

const isFileSizeAlert = ref(false)

const url = ref()
const handleOnPreview = (event) => {
  const file = event.target.files[0]
  if (file.size > 1024 * 1024 * 4) {
    isFileSizeAlert.value = true
    return
  }
  url.value = URL.createObjectURL(event.target.files[0])
  uploadTattooData.value.Image = event.target.files[0]
}
</script>
<style scoped></style>
