<template>
  <div>
    <SearchResult />
    <div class="grid w-full grid-cols-3 gap-8">
      <NuxtLink v-for="item in allArtistsData" :key="item.Id" :to="`/artists/${item.Id}`">
        <ArtistCard :data="item"></ArtistCard>
      </NuxtLink>
    </div>
    <div v-if="allNum">
      <PaginationBtn :num="allNum" state="front" />
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useSearchStore } from '~/stores/search'
const store = useSearchStore()
const { allArtistsData, allNum } = storeToRefs(store)
const { getArtists } = store

onMounted(() => {
  getArtists(1)
})
</script>
