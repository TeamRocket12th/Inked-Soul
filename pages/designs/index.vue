<template>
  <div class="container mx-auto flex flex-col items-center">
    <SearchBar class="mb-5"></SearchBar>
    <p class="text-left">認領圖的OO縣市OO風格OO元素，共XX個結果</p>
    <masonry-wall :items="designData" :ssr-columns="3" :column-width="300" :gap="16">
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
            />
          </NuxtLink>
        </div>
      </template>
    </masonry-wall>
    <div ref="root">loading</div>
  </div>
</template>
<script setup>
const { data } = await useFetch('/api/getDesign/getAllDesign')
const designData = ref([])
designData.value = data.value.design

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
})
</script>
