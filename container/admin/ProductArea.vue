<template>
  <div>
    <div class="mb-10 flex flex-row items-center justify-between">
      <!-- radio btn -->
      <div class="flex flex-row gap-10">
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
      <button
        class="btn-neutral btn rounded-lg bg-black px-6 py-3 text-white"
        onclick="upload_product.showModal()"
      >
        上架認領圖
      </button>
      <!-- UploadTattooArea -->
      <dialog id="upload_product" class="modal grid grid-cols-12">
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
              <th>置頂</th>
              <th>認領圖</th>
              <th>名稱</th>
              <th>尺寸</th>
              <th>作業時間</th>
              <th>上架日期</th>
              <th>訂金</th>
              <th>總金額</th>
              <th>狀態</th>
              <th></th>
            </tr>
          </thead>
          <tbody v-for="(item, key) in allImg" :key="key">
            <tr class="h-[108px] border-b border-[#D0D0D0]">
              <td><input type="checkbox" /></td>
              <td class="flex h-[108px] items-center justify-center">
                <img
                  :src="item.Url"
                  alt=""
                  class="h-[100px] w-[100px] rounded-lg border border-[#D0D0D0] bg-white object-cover object-center"
                />
              </td>
              <td>{{ item.Imgname }}</td>
              <td>{{ item.Size }}</td>
              <td>{{ item.Hour }}hr</td>
              <td>{{ formattedOutput(new Date(item.InitTime)) }}</td>
              <td>$ {{ item.Deposit }}</td>
              <td>$ {{ item.Total }}</td>
              <td>{{ item.IsSoldout }}</td>
              <!-- 編輯鈕 -->
              <td class="cursor-pointer text-center">
                <details class="dropdown-right dropdown">
                  <summary class="btn border-none bg-white hover:bg-white">
                    <Icon name="ic:baseline-more-vert" size="24" />
                  </summary>
                  <ul
                    class="dropdown-content flex -translate-y-[25%] flex-row gap-5 rounded-lg bg-base-100 p-5 shadow"
                  >
                    <li>
                      <a
                        class="flex h-14 w-14 items-center justify-center rounded-full duration-200 ease-in-out hover:bg-black hover:text-white"
                      >
                        <Icon name="ic:baseline-edit" size="24" />
                      </a>
                    </li>
                    <li>
                      <a
                        class="flex h-14 w-14 items-center justify-center rounded-full duration-200 ease-in-out hover:bg-black hover:text-white"
                        @click="deleteDesign(item.Id)"
                      >
                        <Icon name="ic:baseline-delete" size="24" />
                      </a>
                    </li>
                  </ul>
                </details>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useUploadTattooStore } from '~/stores/uploadTattoo'
import UploadTattooArea from '~/container/admin/UploadTattooArea.vue'

const runtimeConfig = useRuntimeConfig()
const APIBASE = runtimeConfig.public.APIBASE

const authToken = useCookie('token')

const { formattedOutput } = useFormatted()
const store = useUploadTattooStore()
const { artistGetTattooData } = store
const { allImg, response, show } = storeToRefs(store)

const selectedStatus = ref('全部')

const deleteDesign = (imageId) => {
  const { data } = useFetch(`${APIBASE}/api/deleteimage`, {
    headers: { 'Content-type': 'application/json', Authorization: `Bearer ${authToken.value}` },
    query: {
      imgid: imageId
    }
  })
}

// 上傳結果燈箱

const successModal = ref(null)
const failedModal = ref(null)
let sucModal
let faModal

const showModal = () => {
  if (response.value === 200) {
    sucModal.showModal()
  } else {
    faModal.showModal()
  }
}
const closeModal = () => {
  sucModal.close()
  faModal.close()
}
watch(show, (nV) => {
  if (show.value === true) {
    showModal()
  }
})

onMounted(() => {
  artistGetTattooData('', 1)
  sucModal = successModal.value
  faModal = failedModal.value
})
</script>
<style scoped></style>
