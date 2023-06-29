<template>
  <masonry-wall :items="designData" :ssr-columns="3" :column-width="200" :gap="16">
    <template #default="{ item }">
      <div class="rounded-xl">
        <NuxtLink :key="item.id" :to="`/designs/${item.id}`">
          <DesignCard
            :id="item.id"
            :image="item.image"
            :design-name="item.designName"
            :category="item.category"
          />
        </NuxtLink>
      </div>
    </template>
  </masonry-wall>
</template>
<script setup>
// import DesignCard from '~/components/global/DesignCard'
const route = useRoute()
const id = route.params.id
const { data } = await useFetch(`/api/getArtists/getDesign/${id}`)
const designData = ref([])
designData.value = data.value.data.design
</script>
