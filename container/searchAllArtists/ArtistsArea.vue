<template>
  <div>
    <SearchResult>刺青師</SearchResult>
    <div class="grid w-full grid-cols-3 gap-8">
      <NuxtLink v-for="item in allArtistsData" :key="item.Id" :to="`/artists/${item.Id}`">
        <ArtistCard :data="item"></ArtistCard>
      </NuxtLink>
    </div>
    <div v-if="allNum === 0" class="mt-10 text-center">
      <Icon name="ic:round-find-replace" size="64" />
      <p>
        很抱歉，查無符合此搜尋條件的任何結果。<br />
        請嘗試選擇其他搜尋內容。
      </p>
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
