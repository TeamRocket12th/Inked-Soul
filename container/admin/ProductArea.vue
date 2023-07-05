<template>
  <div>
    <div class="mb-10 flex flex-row items-center justify-between">
      <div class="flex flex-row gap-10">
        <label for="all" class="flex cursor-pointer flex-row items-center gap-2">
          <input
            type="radio"
            name="filter"
            id="all"
            class="radio radio-xs"
            v-model="selectedStatus"
            value="全部"
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
          />
          <span>已售出</span>
        </label>
      </div>

      <button class="btn" onclick="upload_product.showModal()">上架認領圖</button>
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
    <div>
      <button @click="getTattooData">btn</button>
      <div class="overflow-scroll">
        <table class="whitespace-nowraps table whitespace-nowrap text-center">
          <thead class="mb-1 border-b">
            <tr>
              <th>認領圖</th>
              <th>名稱</th>
              <th>尺寸</th>
              <th>預計時間</th>
              <th>訂金</th>
              <th>總金額</th>
              <th>狀態</th>
              <th>釘選</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, key) in filterData" :key="key" class="h-[100px] py-1">
              <td><img :src="item.Image" alt="" class="w-full" /></td>
              <td class="px-12">{{ item.Name }}</td>
              <td class="px-12">{{ item.Size.Height }}cm x {{ item.Size.Width }}cm</td>
              <td class="px-12">{{ item.Time }}hr</td>
              <td class="px-12">$ {{ item.Payment.Deposit }}</td>
              <td class="px-12">$ {{ item.Payment.Total }}</td>
              <td class="px-12">{{ item.isSoldout }}</td>
              <td class="text-center"><input type="checkbox" /></td>
              <td class="cursor-pointer text-center">
                <details class="dropdown mb-32">
                  <summary class="btn">
                    <Icon name="ic:baseline-more-vert" />
                  </summary>
                  <ul
                    class="dropdown-content menu rounded-box z-[1] flex w-52 flex-row gap-5 bg-base-100 p-2 shadow"
                  >
                    <li>
                      <a>
                        <Icon name="ic:baseline-edit" size="24" />
                      </a>
                    </li>
                    <li>
                      <a>
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

      <!-- table 樣式測試 -->
      <!-- <table class="content-table">
        <thead>
          <tr>
            <th>認領圖</th>
            <th>名稱</th>
            <th>尺寸</th>
            <th>預計時間</th>
            <th>訂金</th>
            <th>總金額</th>
            <th>狀態</th>
            <th>釘選</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, key) in productData" :key="key">
            <td><img :src="item.Image" alt="" class="w-full" /></td>
            <td>{{ item.Name }}</td>
            <td>{{ item.Size.Height }}cm x {{ item.Size.Width }}cm</td>
            <td>{{ item.Time }}hr</td>
            <td>$ {{ item.Payment.Deposit }}</td>
            <td>$ {{ item.Payment.Total }}</td>
            <td>{{ item.SaleStatus }}</td>
            <td class="text-center"><input type="checkbox" /></td>
            <td class="cursor-pointer text-center">
              <details class="dropdown mb-32">
                <summary class="btn">
                  <Icon name="ic:baseline-more-vert" />
                </summary>
                <ul
                  class="dropdown-content menu rounded-box z-[1] flex w-52 flex-row gap-5 bg-base-100 p-2 shadow"
                >
                  <li>
                    <a>
                      <Icon name="ic:baseline-edit" class="h-6 w-6" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <Icon name="ic:baseline-delete" class="h-6 w-6" />
                    </a>
                  </li>
                </ul>
              </details>
            </td>
          </tr>
        </tbody>
      </table> -->
    </div>
  </div>
</template>
<script setup>
import UploadTattooArea from '~/container/admin/UploadTattooArea.vue'
import { useUploadTattooStore } from '~/stores/uploadTattoo'

const store = useUploadTattooStore()
const { getTattooData } = store

const selectedStatus = ref('全部')
const productData = [
  {
    Image:
      'https://images.unsplash.com/photo-1597852075234-fd721ac361d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHRhdHRvb3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    Name: '墨水中的靈魂',
    Size: {
      Height: '12',
      Width: '12'
    },
    Time: '4',
    Payment: {
      Deposit: '3000',
      Total: '7000'
    },
    isSoldout: '上架中' // '上架中','已售出'
  },
  {
    Image:
      'https://images.unsplash.com/photo-1597852075234-fd721ac361d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHRhdHRvb3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    Name: '墨水中的靈魂',
    Size: {
      Height: '12',
      Width: '12'
    },
    Time: '4',
    Payment: {
      Deposit: '3000',
      Total: '7000'
    },
    isSoldout: '已售出' // '上架中','已售出'
  }
]

const filterData = computed(() => {
  if (selectedStatus.value === '全部') {
    return productData
  } else {
    return productData.filter((item) => item.isSoldout === selectedStatus.value)
  }
})

onMounted(async () => {
  // console.log('mounted')
  const orderData = await getTattooData() // 無法呼叫函式
  // productData.push(orderData)
  console.log('productData', productData)
})
</script>
<style scoped></style>
