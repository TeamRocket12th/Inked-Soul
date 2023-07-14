<template>
  <div>
    <div class="mb-10 flex flex-row items-center justify-between">
      <!-- radio btn -->
      <div class="flex flex-row gap-10">
        <label for="all" class="flex cursor-pointer flex-row items-center gap-2">
          <input
            type="radio"
            name="filter"
            id="all"
            class="radio radio-xs"
            v-model="selectedStatus"
            value="全部"
            @click="artistGetTattooData('', 1)"
          />
          <span>全部</span>
        </label>
        <label for="sale" class="flex cursor-pointer flex-row items-center gap-2">
          <input
            type="radio"
            name="filter"
            id="sale"
            class="radio radio-xs"
            v-model="selectedStatus"
            value="上架中"
            @click="artistGetTattooData(false, 1)"
          />
          <span>上架中</span>
        </label>
        <label for="sold" class="flex cursor-pointer flex-row items-center gap-2">
          <input
            type="radio"
            name="filter"
            id="sold"
            class="radio radio-xs"
            v-model="selectedStatus"
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
              <th>預計時間</th>
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
              <td>{{ item.InitTime }}hr</td>
              <td>$ {{ item.Deposit }}</td>
              <td>$ {{ item.Total }}</td>
              <td>{{ item.isSoldout }}</td>
              <!-- 編輯鈕 -->
              <td class="cursor-pointer text-center">
                <details class="dropdown-right dropdown">
                  <summary class="btn border-none bg-white">
                    <Icon name="ic:baseline-more-vert" size="24" />
                  </summary>
                  <ul
                    class="dropdown-content menu flex w-[180px] flex-row gap-5 rounded-lg bg-base-100 p-5 shadow"
                  >
                    <li>
                      <a class="flex h-14 w-14 items-center justify-center rounded-full">
                        <Icon name="ic:baseline-edit" size="24" />
                      </a>
                    </li>
                    <li>
                      <a class="flex h-14 w-14 items-center justify-center rounded-full">
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
import UploadTattooArea from '~/container/admin/UploadTattooArea.vue'
import { useUploadTattooStore } from '~/stores/uploadTattoo'

const store = useUploadTattooStore()
const { artistGetTattooData } = store
const { allImg } = storeToRefs(store)

const selectedStatus = ref('全部')
// const productData = [
//   {
//     Image:
//       'https://images.unsplash.com/photo-1597852075234-fd721ac361d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHRhdHRvb3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
//     Name: '墨水中的靈魂',
//     Size: {
//       Height: '12',
//       Width: '12'
//     },
//     Time: '4',
//     Payment: {
//       Deposit: '3000',
//       Total: '7000'
//     },
//     isSoldout: '上架中' // '上架中','已售出'
//   },
//   {
//     Image:
//       'https://images.unsplash.com/photo-1597852075234-fd721ac361d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHRhdHRvb3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
//     Name: '墨水中的靈魂',
//     Size: {
//       Height: '12',
//       Width: '12'
//     },
//     Time: '4',
//     Payment: {
//       Deposit: '3000',
//       Total: '7000'
//     },
//     isSoldout: '已售出' // '上架中','已售出'
//   }
// ]

// const filterData = computed(() => {
//   if (selectedStatus.value === '全部') {
//     return productData
//   } else {
//     return productData.filter((item) => item.isSoldout === selectedStatus.value)
//   }
// })

onMounted(() => {
  artistGetTattooData('', 1)
})
</script>
<style scoped></style>
