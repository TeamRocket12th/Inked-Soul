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
import UploadTattooImg from '~/components/admin/UploadTattooImg.vue'
import UploadTattooInfo from '~/components/admin/UploadTattooInfo.vue'

import UploadTattooPirce from '~/components/admin/UploadTattooPirce.vue'
import UpdateStyle from '~/components/admin/UpdateStyle.vue'
import UpdateElement from '~/components/admin/UpdateElement.vue'

import { useUploadTattooStore } from '~/stores/uploadTattoo'

const store = useUploadTattooStore()
const { uploadTattoo } = store
</script>
<style scoped></style>
