<template>
  <div class="grid grid-cols-4">
    <NuxtLink v-for="item in productData" :key="item.id">
      <GlobalDesignCard :title="item.title" :category="item.category" :image="item.image" />
    </NuxtLink>
  </div>
</template>
<script setup>
const productData = ref([])
const getProducts = async () => {
  const { data: productsRes } = await useFetch('https://fakestoreapi.com/products')
  for(i=0;i<8;i++){
    productData.value.push(productsRes.value[i])
  }
}
onMounted(() => {
  getProducts()
})
</script>
