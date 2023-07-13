<template>
  <!-- 所有認領圖 -->
  <div class="container mx-auto flex flex-col items-center">
    <SearchBar class="mb-14">搜尋認領圖</SearchBar>
    <div v-if="showResult" class="mb-8 flex w-full justify-between">
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
        ><span>&nbsp;</span>元素， 共{{ allDesignData.length }}個結果
      </p>
      <div class="cursor-pointer rounded-lg border bg-white p-1">
        <Icon name="ic:round-sync-alt" size="24" class="origin-center rotate-90" />
      </div>
    </div>
    <!--<masonry-wall
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
              :image="item.Photo"
              :design-name="item.Name"
              :artist-name="item.Nickname"
              :artist-img="item.Photo"
              :price="item.Total"
              :city="item.City"
              :style="item.Style"
              :element="item.Element"
            />
          </NuxtLink> 
        </div>
      </template>
    </masonry-wall>-->
    <div ref="root">loading</div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useSearchStore } from '~/stores/search'

const store = useSearchStore()
const { allDesignData, cityArr, styleArr, elementArr, showResult, cityStr, styleStr, elementStr } =
  storeToRefs(store)
const { arrToString } = store
const runtimeConfig = useRuntimeConfig()
const APIBASE = runtimeConfig.public.APIBASE

arrToString()
// const { data } = await useFetch(`${APIBASE}/api/artistcity`, {
//   method: 'POST',
//   body: {
//     City: cityStr ? cityStr : '',
//     Style: styleStr ? styleStr : '',
//     Element: elementStr ? elementStr : ''
//   }
// })

// if (data.value) {
//   allDesignData.value = data.value.Data
// } else {
//   console.log('無搜尋結果')
// }

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

onMounted(async () => {
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
})
</script>
