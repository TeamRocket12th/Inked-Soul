<template>
  <div class="container mx-auto flex flex-col items-center">
    <SearchBar class="mb-5">搜尋認領圖</SearchBar>
    <div class="flex w-full justify-between">
      <p class="text-left">
        認領圖的
        <span v-if="cityArr.length === 0">全部</span>
        <span v-for="(item, index) in cityArr" :key="index" class="font-bold"
          >{{ item }}<span>&nbsp;</span></span
        ><span>&nbsp;</span>縣市
        <span v-if="styleArr.length === 0">全部</span>
        <span v-for="(item, index) in styleArr" :key="index" class="font-bold"
          >{{ item }}<span>&nbsp;</span></span
        ><span>&nbsp;</span>風格
        <span v-if="elementArr.length === 0">全部</span>
        <span v-for="(item, index) in elementArr" :key="index" class="font-bold"
          >{{ item }}<span>&nbsp;</span></span
        ><span>&nbsp;</span>元素， 共{{ filterArr.length }}個結果
      </p>
      <Icon name="ic:round-sync-alt" class="origin-center rotate-90 bg-white p-1" />
    </div>
    <masonry-wall
      v-if="filterArr"
      :items="filterArr"
      :ssr-columns="3"
      :column-width="300"
      :gap="16"
    >
      <template #default="{ item }">
        <div class="rounded-xl">
          <NuxtLink :key="item.id" :to="`/designs/${item.id}`">
            <DesignCard
              :id="item.id"
              :image="item.image"
              :design-name="item.designName"
              :artist-name="item.artistName"
              :artist-img="item.artistImg"
              :price="item.price"
              :city="item.city"
              :style="item.style"
              :element="item.element"
            />
          </NuxtLink>
        </div>
      </template>
    </masonry-wall>
    <div ref="root">loading</div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useSearchStore } from '~/stores/search'
const store = useSearchStore()
const { allData, filterArr, cityArr, styleArr, elementArr } = storeToRefs(store)
const { data } = await useFetch('/api/getDesign/getAllDesign')
const designData = ref([])
designData.value = data.value.design

const defaultRender = () => {
  if (filterArr.value.length === 0) {
    allData.value = designData.value
    filterArr.value = allData.value
  }
}

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
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        limit.value += 20
        skip.value += 20
      }
    })
  })

  observer.observe(root.value)

  defaultRender()
})
</script>
