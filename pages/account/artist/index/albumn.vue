<template>
  <div>
    <!-- 上傳 -->
    <div class="mb-4 flex flex-row-reverse">
      <button
        class="btn bg-black text-white hover:bg-secondary hover:text-black"
        onclick="upload_album.showModal()"
      >
        上傳作品集
      </button>
      <dialog id="upload_album" class="modal">
        <form method="dialog" class="modal-box">
          <UploadAlbumArea />
        </form>
      </dialog>
    </div>
    <!-- 上傳成功燈箱 -->
    <dialog ref="successAlbumModal" class="rounded-xl p-8">
      <div class="flex flex-col items-center">
        <Icon name="ic:baseline-check" size="60" class="mb-4" />
        <p class="mb-10 font-bold">已成功上架您的作品集</p>
        <button class="btn bg-black text-white" @click="closeModal()">上傳其他作品集</button>
      </div>
    </dialog>
    <!-- 上傳失敗燈箱 -->
    <dialog ref="failedAlbumModal" class="rounded-xl p-8">
      <div class="flex flex-col items-center">
        <p class="mb-10 font-bold">上架失敗，請重新上架</p>
        <button class="btn bg-black text-white" @click="closeModal()">上傳其他作品集</button>
      </div>
    </dialog>
    <!-- 表格 -->
    <table class="w-full">
      <thead>
        <tr class="flex justify-between rounded-t-lg border-b-2 border-secondary bg-primary p-2">
          <td class="w-[10%]">置頂</td>
          <td class="w-[30%]">作品集</td>
          <td class="w-[30%]">上架日期</td>
          <td class="w-[30%]"></td>
        </tr>
      </thead>
      <tbody class="w-full overflow-hidden rounded-xl">
        <tr
          v-for="(item, index) in allAlbum"
          :key="index"
          class="flex items-center justify-between border-b-2 border-primary p-2"
        >
          <td class="w-[10%]">
            <Icon
              v-if="item.IsTop === false"
              name="ic:baseline-check-box-outline-blank"
              @click="editAlbum(item.Id, artistID, item.Description, true)"
            />
            <Icon
              v-if="item.IsTop === true"
              name="ic:outline-push-pin"
              @click="editAlbum(item.Id, artistID, item.Description, false)"
            />
          </td>
          <td class="flex w-[30%] justify-center">
            <div
              class="h-[100px] w-[100px] overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat"
              :style="`background-image: url('${item.Url}')`"
            ></div>
          </td>
          <td class="w-[30%]">{{ formattedOutput(new Date(item.InitTime)) }}</td>
          <td class="flex w-[30%] flex-row-reverse">
            <div class="dropdown">
              <label tabindex="0" class="btn m-1"><Icon name="ic:round-more-vert" /></label>
              <ul
                tabindex="0"
                class="dropdown-right dropdown-content menu rounded-box z-[1] flex w-20 bg-base-100 p-2 shadow"
              >
                <li>
                  <div class="h-15 w-15 flex justify-center rounded-full">
                    <Icon name="ic:baseline-edit" />
                  </div>
                </li>
                <li>
                  <div class="h-15 w-15 flex justify-center rounded-full">
                    <Icon name="ic:baseline-delete-outline" />
                  </div>
                </li>
              </ul>
            </div>
          </td>
          <!-- <Icon name="ic:round-more-vert" /> -->
        </tr>
      </tbody>
    </table>
    <div v-if="allAlbumNum">
      <PaginationBtn :num="allAlbumNum" state="front" />
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useUploadTattooStore } from '~/stores/uploadTattoo'
import UploadAlbumArea from '~/container/admin/UploadAlbumArea'

const store = useUploadTattooStore()
const { getAlbumn, editAlbum } = store
const { allAlbum, res, showAlbum, allAlbumNum } = storeToRefs(store)

const { formattedOutput } = useFormatted()

const token = useCookie('data')
const artistID = token.value.Id

// 上傳結果燈箱
const successAlbumModal = ref(null)
const failedAlbumModal = ref(null)
let sucAlbumModal
let faAlbumModal
const showAlbumModal = () => {
  if (res.value === 200) {
    sucAlbumModal.showModal()
    showAlbum.value = false
  } else {
    faAlbumModal.showModal()
    showAlbum.value = false
  }
}
const closeModal = () => {
  sucAlbumModal.close()
  faAlbumModal.close()
}

watch(showAlbum, (nv, ov) => {
  if (showAlbum.value === true) {
    showAlbumModal()
  }
})

onMounted(() => {
  getAlbumn(artistID, 1)
  sucAlbumModal = successAlbumModal.value
  faAlbumModal = failedAlbumModal.value
})
</script>
<style></style>
