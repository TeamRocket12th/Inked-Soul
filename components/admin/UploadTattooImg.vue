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
const runtimeConfig = useRuntimeConfig()
const apiBase = runtimeConfig.public.apiBase

const authToken = useCookie('token')

const isFileSizeAlert = ref(false)

const url = ref()
const handleOnPreview = (event) => {
  const file = event.target.files[0]
  if (file.size > 1024 * 1024 * 4) {
    isFileSizeAlert.value = true
    return
  }
  url.value = URL.createObjectURL(event.target.files[0])
  uploadTattooData.value.Image = url.value
  console.log(authToken.value.token)
}

const selectImage = () => {
  const formData = new FormData()
  formData.append('image', file)
}

const postImage = async () => {
  // 📌 如果上傳次數 > 5 無法再上傳 (應該在頁面中 run)
  // if (token.uploadTattooCount > 5) {
  //   return false
  // }
  try {
    const res = await $fetch(`${apiBase}/postImg`, {
      header: {
        Authorization: `Bearer ${token}`
      },
      method: 'POST',
      body: tattooImage
    })
  } catch (error) {
    console.log('error', error)
  }
}
</script>
<style scoped></style>
