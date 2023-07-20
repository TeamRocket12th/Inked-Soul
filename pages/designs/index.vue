<template>
  <!-- 所有認領圖 -->
  <div class="container relative mx-auto flex flex-col items-center">
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
    <div ref="root" class="absolute bottom-[200px] py-20"></div>
    <!-- 無搜尋結果 -->
    <div v-if="allNum === 0" class="mt-10 text-center">
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
const { allDesignData, allNum, isPending } = storeToRefs(store)
const { getDesigns } = store

// 參考用
const page = ref(0)
const skip = ref(0)
const root = ref(null)

const initIntersectionObserver = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        page.value += 1
        skip.value += 1
      }
    })
  })
  // 如果沒有pending才會執行
  if (!isPending.value) {
    observer.observe(root.value)
  }
}

watch(page, (newValue) => {
  getDesigns(newValue)
})

onMounted(() => {
  initIntersectionObserver()
})
</script>
