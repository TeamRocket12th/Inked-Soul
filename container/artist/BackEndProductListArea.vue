<template>
  <div>
    <div class="mb-10 flex flex-row items-center justify-between">
      <div class="flex flex-row gap-10">
        <label for="all" class="flex cursor-pointer flex-row items-center gap-2">
          <input type="radio" id="all" class="radio radio-xs" v-model="saleStatus" value="全部" />
          <span>全部</span>
        </label>
        <label for="sale" class="flex cursor-pointer flex-row items-center gap-2">
          <input
            type="radio"
            id="sale"
            class="radio radio-xs"
            v-model="saleStatus"
            value="上架中"
          />
          <span>上架中</span>
        </label>
        <label for="sold" class="flex cursor-pointer flex-row items-center gap-2">
          <input
            type="radio"
            id="sold"
            class="radio radio-xs"
            v-model="saleStatus"
            value="已售出"
          />
          <span>已售出</span>
        </label>
      </div>

      <button class="btn" onclick="upload_product.showModal()">上架認領圖</button>
      <dialog id="upload_product" class="modal">
        <form method="dialog" class="modal-box">
          <UploadTattooArea />
        </form>
        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>

    <!-- 訂單列表 -->
    <div>
      <div class="overflow-scroll">
        <table class="table whitespace-nowrap">
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
            <tr v-for="(item, key) in productData" :key="key" class="h-[100px] py-1">
              <td><img :src="item.img_url" alt="" class="w-full" /></td>
              <td class="px-12">{{ item.tattoo_name }}</td>
              <td class="px-12">
                {{ item.tattoo_size.height }}cm x {{ item.tattoo_size.width }}cm
              </td>
              <td class="px-12">{{ item.hour }}hr</td>
              <td class="px-12">$ {{ item.payment.deposit }}</td>
              <td class="px-12">$ {{ item.payment.total }}</td>
              <td class="px-12">{{ item.salesStatus }}</td>
              <td class="text-center"><input type="checkbox" /></td>
              <td class="cursor-pointer text-center">
                <Icon name="ic:baseline-more-vert" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script setup>
import UploadTattooArea from '~/container/artist/UploadTattooArea.vue'

const productData = [
  {
    img_url:
      'https://images.unsplash.com/photo-1597852075234-fd721ac361d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHRhdHRvb3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    tattoo_name: '墨水中的靈魂',
    tattoo_size: {
      height: '12',
      width: '12'
    },
    hour: '4',
    payment: {
      deposit: '3000',
      total: '7000'
    },
    salesStatus: '上架中' // '上架中','已售出'
  }
]

const saleStatus = ref('全部')
</script>
<style scoped></style>
