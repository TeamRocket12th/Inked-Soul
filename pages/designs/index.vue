<template>
  <div class="container mx-auto">
    <p>認領圖首頁</p>
    <div class="grid grid-cols-3">
      <NuxtLink v-for="item in designData" :key="item.id" :to="`/designs/${item.id}`">
        <DesignCard
          :id="item.id"
          :image="item.image"
          :design-name="item.designName"
          :category="item.category"
        />
      </NuxtLink>
    </div>
  </div>
</template>
<script setup>
import DesignCard from '~/components/global/DesignCard'
const { data } = await useFetch('/api/getDesign/getAllDesign')
const designData = ref([])
designData.value = data.value.design
</script>
