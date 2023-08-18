<template>
  <!-- 所有認領圖 -->
  <div class="container relative mx-auto flex flex-col items-center">
    <SearchBar class="mb-5">搜尋認領圖</SearchBar>
    <SearchResult>認領圖</SearchResult>

    <div v-if="isPending" class="grid w-full grid-cols-4 gap-8">
      <LoadingCard class="col-span-1" />
      <LoadingCard class="col-span-1" />
      <LoadingCard class="col-span-1" />
      <LoadingCard class="col-span-1" />
    </div>

    <masonry-wall
      v-if="allDesignData"
      :items="allDesignData"
      :ssr-columns="4"
      :column-width="270"
      :gap="32"
    >
      <template #default="{ item }">
        <div class="rounded-xl">
          <NuxtLink :key="item.Id" :to="`/designs/${item.Id}`">
            <DesignCard :data="item" />
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
const { allDesignData, allNum, isPending, isNoResult, isSearch } = storeToRefs(store)
const { getDesigns } = store

// 參考用
const page = ref(1)
const root = ref(null)

const initIntersectionObserver = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0 && !isNoResult.value && !isSearch.value) {
        page.value += 1
      }
      isSearch.value = false
    })
  })
  // 如果沒有pending才會執行
  if (isPending.value) {
    observer.observe(root.value)
  }
}

watch(
  page,
  (nextPage) => {
    if (!isSearch.value) {
      getDesigns(nextPage)
    } else if (isSearch.value) {
      page.value = 1
      getDesigns(1)
    }
  },
  {
    immediate: true
  }
)

const { meta } = useMeta()
useHead({
  title: meta.design.title,
  meta: [{ name: 'description', content: meta.design.description }]
})

const returnEmpty = () => {
  allDesignData.value = []
}

onMounted(() => {
  returnEmpty()
  initIntersectionObserver()
})
</script>
