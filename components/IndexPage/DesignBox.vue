<template>
  <div class="gird gird-cols-4">
    <GlobalDesignCard
      v-for="item in productData"
      :key="item.id"
      :title="title"
      :category="category"
      :image="image"
    />
  </div>
</template>
<script setup>
const productData = ref([])
const getProducts = async () => {
  const { data: productsRes } = await useFetch('https://fakestoreapi.com/products')
  productData.value = productsRes.value
}
onMounted(() => {
  getProducts()
})
</script>
