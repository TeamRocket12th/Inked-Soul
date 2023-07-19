<template>
  <div>
    <search-result />
    <div class="grid w-full grid-cols-3 gap-8">
      <NuxtLink v-for="item in allArtistsData" :key="item.id" :to="`/artists/${item.Id}`">
        <ArtistCard :data="item"></ArtistCard>
      </NuxtLink>
    </div>
    <PaginationBtn />
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useSearchStore } from '~/stores/search'
const store = useSearchStore()
const { allArtistsData } = storeToRefs(store)
const { getArtists } = store

onMounted(() => {
  getArtists(1)
})
</script>
