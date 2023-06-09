<template>
  <div class="">
    <h2 class="text-center">認領圖</h2>
    <div v-if="productData" class="grid grid-cols-4">
      <NuxtLink
        v-for="item in productData"
        :key="item.id"
        class="self-stretch"
        :to="`/Design/${item.id}`"
      >
        <GlobalDesignCard :title="item.title" :category="item.category" :image="item.image" />
      </NuxtLink>
    </div>
  </div>
</template>
<script setup>
const productData = ref([])

const { data: productsRes } = await useFetch('https://fakestoreapi.com/products')
for (let i = 0; i < 8; i++) {
  productData.value.push(productsRes.value[i])
}
</script>
