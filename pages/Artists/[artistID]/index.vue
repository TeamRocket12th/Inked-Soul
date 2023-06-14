<template>
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
</template>
<script setup>
import DesignCard from '~/components/global/DesignCard'
const route = useRoute()
const id = route.params.id
const { data } = await useFetch(`/api/getArtists/getDesign/${id}`)
const designData = ref([])
designData.value = data.value.data.design
</script>
