<template>
  <div>
    <div class="mb-10 flex flex-row items-center justify-between">
      <div class="flex flex-row gap-10">
        <label>
          <input type="radio" name="" class="radio radio-xs" checked />
          <span>全部</span>
        </label>
        <label>
          <input type="radio" name="" class="radio radio-xs" />
          <span>上架中</span>
        </label>
        <label>
          <input type="radio" name="" class="radio radio-xs" />
          <span>已售出</span>
        </label>
      </div>
      <button type="button" class="btn">上架認領圖</button>
    </div>

    <!-- table -->
    <div>
      <div class="overflow-x-auto">
        <table class="table">
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
            <tr v-for="(item, key) in productData" :key="key" class="h-[100px] whitespace-nowrap">
              <td class="p-0"><img :src="item.url" alt="" class="w-full" /></td>
              <td>{{ item.name }}</td>
              <td>{{ item.size.height }}cm x {{ item.size.width }}cm</td>
              <td>{{ item.hour }}hr</td>
              <td>$ {{ item.deposit }}</td>
              <td>$ {{ item.totalPrice }}</td>
              <td>{{ item.salesStatus }}</td>
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
const productData = [
  {
    url: 'https://images.unsplash.com/photo-1597852075234-fd721ac361d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHRhdHRvb3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    name: '墨水中的靈魂',
    size: {
      height: '12',
      width: '12'
    },
    hour: '3',
    deposit: '3000',
    totalPrice: '7000',
    salesStatus: '上架中' // '上架中','已售出'
  }
]
</script>
<style scoped></style>
