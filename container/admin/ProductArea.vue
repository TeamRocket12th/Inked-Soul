<template>
  <div>
    <div class="mb-5 flex flex-row items-center justify-between">
      <!-- radio btn -->
      <div class="mr-2 flex flex-row gap-4 md:gap-10">
        <label for="all" class="flex cursor-pointer flex-row items-center gap-2">
          <input
            id="all"
            v-model="selectedStatus"
            type="radio"
            name="filter"
            class="radio radio-xs"
            value="全部"
            @click="artistGetTattooData('', 1)"
          />
          <span>全部</span>
        </label>
        <label for="sale" class="flex cursor-pointer flex-row items-center gap-2">
          <input
            id="sale"
            v-model="selectedStatus"
            type="radio"
            name="filter"
            class="radio radio-xs"
            value="上架中"
            @click="artistGetTattooData(false, 1)"
          />
          <span>上架中</span>
        </label>
        <label for="sold" class="flex cursor-pointer flex-row items-center gap-2">
          <input
            id="sold"
            v-model="selectedStatus"
            type="radio"
            name="filter"
            class="radio radio-xs"
            value="已售出"
            @click="artistGetTattooData(true, 1)"
          />
          <span>已售出</span>
        </label>
      </div>
      <!-- upload btn -->
      <button class="defaultBtn w-fit px-6 py-3 font-bold" onclick="upload_product.showModal()">
        上架認領圖
      </button>
      <!-- UploadTattooArea -->
      <dialog id="upload_product" ref="uploadImage" class="modal grid grid-cols-12">
        <form method="dialog" class="modal-box col-span-8 col-start-3 max-w-none rounded-lg">
          <UploadTattooArea />
        </form>
        <form method="dialog" class="modal-backdrop col-span-full">
          <button>close</button>
        </form>
      </dialog>
    </div>
    <!-- 上傳成功燈箱 -->
    <dialog ref="successModal" class="rounded-xl p-8">
      <div class="flex flex-col items-center">
        <Icon name="ic:baseline-check" size="60" class="mb-4" />
        <p class="mb-10 font-bold">已成功上傳您的認領圖</p>
        <button class="btn bg-black text-white" @click="closeModal()">上傳其他認領圖</button>
      </div>
    </dialog>
    <!-- 上傳失敗燈箱 -->
    <dialog ref="failedModal" class="rounded-xl p-8">
      <div class="flex flex-col items-center">
        <p class="mb-10 font-bold">上架失敗，請重新上架</p>
        <button class="btn bg-black text-white" @click="closeModal()">上傳其他作品集</button>
      </div>
    </dialog>

    <!-- 訂單列表 -->
    <div class="overflow-x-scroll rounded-lg">
      <div>
        <table class="w-full">
          <thead class="h-12 bg-primary">
            <tr>
              <!-- <th>置頂</th> -->
              <th>認領圖</th>
              <th>名稱</th>
              <th>尺寸</th>
              <th>狀態</th>
              <th>作業時間</th>
              <th>上架日期</th>
              <th>總金額</th>
              <th>訂金</th>
              <th></th>
            </tr>
          </thead>
          <tbody v-if="!allImg">
            <tr class="h-[108px] border-b border-[#D0D0D0] text-center">
              <td colspan="10">您尚無任何訂單</td>
            </tr>
          </tbody>
          <tbody v-for="(item, key) in allImg" :key="key">
            <tr class="h-[108px] border-b border-[#D0D0D0]">
              <!-- <td><input type="checkbox" /></td> -->
              <td class="flex h-[108px] items-center justify-center">
                <img
                  :src="item.Url"
                  alt=""
                  class="h-[100px] w-[100px] rounded-lg border border-[#D0D0D0] bg-white object-cover object-center"
                />
              </td>
              <td>{{ item.Imgname }}</td>
              <td>{{ item.Size }}</td>
              <td>
                <span class="rounded-full bg-black px-3 py-1 text-white">
                  {{ item.IsSoldout }}
                </span>
              </td>
              <td>{{ item.Hour }} 小時</td>
              <td>{{ formattedOutput(new Date(item.InitTime)) }}</td>
              <td>$ {{ item.Total }}</td>
              <td>$ {{ item.Deposit }}</td>
              <td class="cursor-pointer text-center">
                <!-- 刪除鈕 -->
                <button
                  :disabled="item.IsSoldout === '已售出'"
                  :class="{
                    ' text-custom hover:bg-white hover:text-custom': item.IsSoldout === '已售出',
                    ' hover:text-white': item.IsSoldout !== '已售出'
                  }"
                  class="mx-auto flex h-14 w-14 items-center justify-center rounded-full duration-200 ease-in hover:bg-black"
                  @click="showDeleteModal(item.Id)"
                >
                  <Icon name="ic:baseline-delete" size="24" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-if="allImgNum">
      <PaginationBtn :num="allImgNum" state="back" />
    </div>
    <!-- 刪除燈箱 -->
    <dialog id="deleteModal" ref="deleteModal" class="modal">
      <form method="dialog" class="modal-box flex flex-col items-center p-9">
        <button class="btn-ghost btn-sm btn-circle btn absolute right-2 top-2">
          <Icon name="ic:baseline-clear" />
        </button>
        <h3 class="mb-5 text-lg font-bold">確認下架認領圖</h3>
        <p class="mb-10">提醒您，認領圖一經刪除後將無法復原。</p>
        <button
          class="btn bg-black px-6 py-3 text-white hover:bg-primary hover:text-black"
          @click="deleteDesign(deleteId)"
        >
          下架認領圖
        </button>
      </form>
    </dialog>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import UploadTattooArea from '~/container/admin/UploadTattooArea.vue'
import { useUploadTattooStore } from '~/stores/uploadTattoo'

const runtimeConfig = useRuntimeConfig()
const APIBASE = runtimeConfig.public.APIBASE
const authToken = useCookie('token')

const { formattedOutput } = useFormatted()
const store = useUploadTattooStore()
const { artistGetTattooData } = store
const { allImg, response, showImage, closeUpload, allImgNum } = storeToRefs(store)

const selectedStatus = ref('全部')

const deleteDesign = async (imageId) => {
  await useFetch(() => `${APIBASE}/api/deleteimage`, {
    headers: { 'Content-type': 'application/json', Authorization: `Bearer ${authToken.value}` },
    query: {
      imgid: imageId
    }
  })

  await artistGetTattooData('', 1)
}

// 關閉uploadTattooArea
const uploadImage = ref(null)
let uploadDesign

// 上傳結果燈箱
const successModal = ref(null)
const failedModal = ref(null)
let sucModal
let faModal

const showModal = () => {
  if (response.value === 200) {
    sucModal.showModal()
    showImage.value = false
  } else {
    faModal.showModal()
    showImage.value = false
  }
}
const closeModal = () => {
  sucModal.close()
  faModal.close()
}
watch(showImage, (_newValue) => {
  if (showImage.value === true) {
    showModal()
  }
})

watch(closeUpload, (_newValue) => {
  if (closeUpload.value === true) {
    uploadDesign.close()
    closeUpload.value = false
  }
})

// 刪除認領圖燈箱
const deleteModal = ref(null)
const deleteId = ref()
let delModal
const showDeleteModal = (id) => {
  deleteId.value = id
  delModal.showModal()
}

onMounted(() => {
  artistGetTattooData('', 1)
  sucModal = successModal.value
  faModal = failedModal.value
  uploadDesign = uploadImage.value
  delModal = deleteModal.value
})
</script>
<style scoped></style>
