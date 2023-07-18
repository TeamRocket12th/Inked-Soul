<template>
  <div>
    <div class="flex flex-row-reverse">
      <button
        class="btn bg-black text-white hover:bg-secondary hover:text-black"
        onclick="upload_album.showModal()"
      >
        上傳作品集
      </button>
      <dialog id="upload_album" class="modal">
        <form method="dialog" class="modal-box">
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
            class="border-1 relative overflow-hidden rounded-lg border-black"
          >
            <div class="mb-4 flex h-full flex-col items-center justify-center gap-[20px]">
              <Icon name="ic:baseline-add-circle-outline" class="h-[100px] w-[100px]" />
              <p>上傳您的原創作品集</p>
              <p>最大文件大小：4mb</p>
            </div>
            <img
              :src="url"
              alt=""
              class="absolute top-0 h-full w-full object-contain"
              :class="url ? 'bg-black' : ''"
            />
            <input
              id="file"
              type="file"
              accept=".jpg, .png, .svg "
              class="hidden"
              @change.stop="handleOnPreview"
            />
          </label>
          <label for="idea" class="mb-2 block">設計理念</label>
          <textarea
            id="idea"
            class="textarea mb-4 block w-full"
            placeholder="請填入創作想法、作品解說，30字內。"
            v-model="albumnIdea"
          ></textarea>
          <button class="w-full rounded bg-black p-3 text-white" @click="uploadAlbum()">
            確認上架
          </button>
        </form>
        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
    <table>
      <thead>
        <tr>
          <td>置頂</td>
          <td>作品集</td>
          <td>上架日期</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useUploadTattooStore } from '~/stores/uploadTattoo'
const store = useUploadTattooStore()
const { getAlbum, uploadAlbum } = store
const { allAlbum, uploadAlbumData } = storeToRefs(store)

const isFileSizeAlert = ref(false)

const albumnIdea = ref()
watch(albumnIdea, (nV) => {
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
onMounted(() => {
  // getAlbum()
})
</script>
<style></style>
