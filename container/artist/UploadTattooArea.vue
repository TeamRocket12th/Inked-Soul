<template>
  <div>
    <h3>上架認領圖</h3>
    <div class="grid grid-cols-2 gap-[20px]">
      <UploadTattooImg />
      <UploadTattooInfo />
    </div>
    <div>
      <UploadTattooPirce />
      <UpdateStyle> 風格（最多選擇兩項） </UpdateStyle>
      <UpdateElement />
      <button @click="uploadTattoo" type="button" class="btn w-full">更新個人資料</button>
    </div>
  </div>
</template>
<script setup>
import UploadTattooImg from '~/components/artist/edit/UploadTattooImg.vue'
import UploadTattooInfo from '~/components/artist/edit/UploadTattooInfo.vue'

import UploadTattooPirce from '~/components/artist/edit/UploadTattooPirce.vue'
import UpdateStyle from '~/components/artist/UpdateStyle.vue'
import UpdateElement from '~/components/artist/UpdateElement.vue'

import { useUploadTattooStore } from '~/stores/uploadTattoo'

const store = useUploadTattooStore()
const { uploadTattoo } = store
</script>
<style scoped></style>
