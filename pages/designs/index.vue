<template>
  <!-- 所有認領圖 -->
  <div class="container mx-auto flex flex-col items-center">
    <SearchBar class="mb-14">搜尋認領圖</SearchBar>
    <search-result />
    <masonry-wall
      v-if="allDesignData"
      :items="allDesignData"
      :ssr-columns="3"
      :column-width="300"
      :gap="32"
    >
      <template #default="{ item }">
        <div class="rounded-xl">
          <NuxtLink :key="item.Id" :to="`/designs/${item.Id}`">
            <DesignCard
              :id="item.Id"
              :image="item.Url"
              :design-name="item.Name"
              :artist-name="item.Nickname"
              :artist-img="item.Photo"
              :price="item.Total"
            />
          </NuxtLink>
        </div>
      </template>
    </masonry-wall>
    <div ref="root">loading</div>
    <!-- 無搜尋結果 -->
    <div v-if="allNum === 0" class="text-center">
      <Icon name="ic:round-find-replace" size="64" />
      <p>
        很抱歉，查無符合此搜尋條件的任何結果。<br />
        請嘗試選擇其他搜尋內容。
      </p>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useSearchStore } from '~/stores/search'

const store = useSearchStore()
const { allDesignData, allNum } = storeToRefs(store)
const { getDesigns } = store

// 參考用
const limit = ref(20)
const skip = ref(0)
const root = ref(null)
const { mydata } = await useAsyncData(
  'test',
  () => $fetch(`https://dummyjson.com/products?limit=${limit.value}&skip=${skip.value}`),
  {
    transform: (imgs) =>
      imgs.products.map((item) => {
        // imgData.value.push(testData)
        return item.images[0]
      }),
    watch: [limit, skip]
  }
)

onMounted(() => {
  // 瀑布流
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        limit.value += 20
        skip.value += 20
      }
    })
  })

  observer.observe(root.value)

  getDesigns(1)
})
</script>
