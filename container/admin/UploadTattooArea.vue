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

    <VForm v-slot="{ errors, meta }" class="flex flex-col gap-5">
      <div class="grid grid-cols-2 gap-9">
        <UploadTattooImg />
        <div class="flex flex-col gap-5">
          <UploadTattooInfo :errors="errors" />
          <UploadTattooPirce :errors="errors" />
        </div>
      </div>
      <div class="flex flex-col gap-5">
        <UploadTattooIdea :errors="errors" />
        <div class="grid grid-cols-2">
          <UpdateStyle> 風格（最多選擇兩項） </UpdateStyle>
          <UpdateElement />
        </div>
        <button
          type="button"
          class="btn-neutral btn w-full bg-black text-white"
          :disabled="!meta.valid"
          @click="uploadTattoo()"
        >
          確認上傳
        </button>
      </div>
    </VForm>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useUploadTattooStore } from '~/stores/uploadTattoo'
import UploadTattooImg from '~/components/admin/UploadTattooImg.vue'
import UploadTattooInfo from '~/components/admin/UploadTattooInfo.vue'

import UploadTattooPirce from '~/components/admin/UploadTattooPirce.vue'
import UploadTattooIdea from '~/components/admin/UploadTattooIdea.vue'
import UpdateStyle from '~/components/admin/UpdateStyle.vue'
import UpdateElement from '~/components/admin/UpdateElement.vue'

const store = useUploadTattooStore()
const { uploadTattooData } = storeToRefs(store)
const { uploadTattoo } = store

const designIdea = ref()

watch(designIdea, (_newValue) => {
  uploadTattooData.value.picidea = designIdea.value
})
</script>
<style scoped></style>
