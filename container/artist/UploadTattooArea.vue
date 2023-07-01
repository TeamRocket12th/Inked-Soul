<template>
  <div>
    <h3>上架認領圖</h3>
    <div class="flex flex-col gap-5">
      <div class="grid grid-cols-2 gap-[20px]">
        <UploadTattooImg />
        <UploadTattooInfo />
      </div>
      <div class="flex flex-col gap-5">
        <UploadTattooPirce />
        <UpdateStyle> 風格（最多選擇兩項） </UpdateStyle>
        <UpdateElement />
        <button @click="uploadTattoo" type="button" class="btn w-full">確認上傳</button>
      </div>
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
