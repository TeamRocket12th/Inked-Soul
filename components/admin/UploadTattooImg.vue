<template>
  <!-- 上傳刺青圖 -->
  <label
    for="file"
    :class="{ 'border-[#DC3545]': isFileSizeAlert }"
    class="relative overflow-hidden rounded-lg border border-[#D0D0D0]"
  >
    <div class="flex h-full flex-col items-center justify-center">
      <Icon
        name="ic:baseline-plus"
        class="mb-10 h-[64px] w-[64px] rounded-full border-2 text-secondary"
      />
      <p class="mb-3 font-bold">上傳您的原創認領圖</p>
      <p>最大文件大小：4mb</p>
    </div>
    <img
      v-if="url"
      :src="url"
      alt=""
      class="absolute top-[50%] h-full w-full -translate-y-[50%] bg-white object-contain"
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
