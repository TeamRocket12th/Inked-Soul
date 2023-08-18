<template>
  <div class="">
    <h2 class="text-center">認領圖</h2>
    <div class="grid grid-cols-4">
      <div class="h-[100px] bg-slate-100"></div>
      <div class="h-[100px] bg-slate-100"></div>
      <div class="h-[100px] bg-slate-100"></div>
      <div class="h-[100px] bg-slate-100"></div>
    </div>
    <div v-if="productData" class="grid grid-cols-4">
      <NuxtLink
        v-for="item in productData"
        :key="item.id"
        class="self-stretch"
        :to="`/designs/${item.id}`"
      >
        <DesignCard
          :id="item.id"
          :category="item.category"
          :image="item.image"
          :design-name="item.designName"
        />
      </NuxtLink>
    </div>
  </div>
</template>
<script setup>
const productData = ref([])

const { data } = await useFetch('/api/getDesign/getAllDesign')
for (let i = 0; i < 8; i++) {
  productData.value.push(data.value.design[i])
}
</script>
