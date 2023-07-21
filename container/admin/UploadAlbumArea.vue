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
      <h4 class="text-center">上架作品集</h4>
      <div></div>
    </div>
    <label
      for="file"
      :class="{ 'border-[#DC3545]': isFileSizeAlert }"
      class="relative overflow-hidden rounded-lg"
    >
      <div
        class="mb-5 flex h-full flex-col items-center justify-center rounded-lg border border-[#D0D0D0] py-[116px]"
      >
        <Icon
          name="ic:baseline-plus"
          class="mb-10 h-[64px] w-[64px] rounded-full border-2 text-secondary"
        />
        <p>上傳您的原創作品集</p>
        <p>最大文件大小：4mb</p>
      </div>
      <img
        v-if="url"
        :src="url"
        alt=""
        class="absolute top-0 h-full w-full rounded-lg border border-[#D0D0D0] bg-white object-contain"
      />
      <input
        id="file"
        type="file"
        accept=".jpg, .png, .svg "
        class="hidden"
        placeholder="請填入創作想法、作品解說，30字內。"
        @change.stop="handleOnPreview"
      />
    </label>
    <label for="idea" class="mb-2 block">設計理念</label>
    <textarea
      id="idea"
      v-model="albumnIdea"
      class="textarea mb-10 block w-full rounded-lg outline outline-[#D0D0D0]"
      placeholder="請填入創作想法、作品解說，30字內。"
    ></textarea>
    <button class="w-full rounded bg-black p-3 text-white" @click="uploadAlbum(artistID)">
      確認上架
    </button>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useUploadTattooStore } from '~/stores/uploadTattoo'
const store = useUploadTattooStore()
const { uploadAlbum } = store
const { uploadAlbumData } = storeToRefs(store)
const token = useCookie('data')
const artistID = token.value.Id
const isFileSizeAlert = ref(false)

const albumnIdea = ref()
watch(albumnIdea, (_newValue) => {
  uploadAlbumData.value.picdescription = albumnIdea.value
})

const url = ref()
const handleOnPreview = (event) => {
  const file = event.target.files[0]
  if (file.size > 1024 * 1024 * 4) {
    isFileSizeAlert.value = true
    return
  }
  url.value = URL.createObjectURL(event.target.files[0])

  uploadAlbumData.value.image = event.target.files[0]
}
</script>

<style lang="scss" scoped></style>
