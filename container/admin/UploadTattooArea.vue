<template>
  <div>
    <div class="mb-8 grid grid-cols-3 items-center justify-center">
      <button class="h-12 w-12 cursor-pointer">
        <Icon
          name="ic:outline-keyboard-arrow-left"
          size="48"
          class="rounded-full border border-[#D0D0D0] text-secondary duration-200 hover:border-secondary"
        />
      </button>
      <!-- @click="toPreviousPage" -->
      <h4 class="text-center">上架認領圖</h4>
      <div></div>
    </div>

    <div class="flex flex-col gap-5">
      <div class="grid grid-cols-2 gap-5">
        <UploadTattooImg />
        <div class="flex flex-col gap-5">
          <UploadTattooInfo />
          <UploadTattooPirce />
        </div>
      </div>
      <div class="flex flex-col gap-5">
        <div class="grid grid-cols-2">
          <UpdateStyle> 風格（最多選擇兩項） </UpdateStyle>
          <UpdateElement />
        </div>
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
