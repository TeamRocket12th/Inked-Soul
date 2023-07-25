<template>
  <div class="container flex flex-col items-center gap-8">
    <h2 class="mb-10 text-center">本月精選刺青師</h2>
    <div v-if="artistsData" class="grid grid-cols-3 gap-[32px]">
      <NuxtLink v-for="item in artistsData" :key="item.Id" :to="`/artists/${item.Id}`">
        <ArtistCard :data="item"></ArtistCard>
      </NuxtLink>
    </div>
    <button
      type="button"
      class="btn-basic items-center px-6 py-3 text-xl font-bold"
      @click="toPage"
    >
      更多刺青師
    </button>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useSearchStore } from '~/stores/search'
const store = useSearchStore()
const { getArtists } = store
const { allArtistsData } = storeToRefs(store)
const artistsData = ref([])

watch(allArtistsData, (_nV) => {
  for (let i = 0; i < 6; i++) {
    artistsData.value.push(allArtistsData.value[i])
  }
})

const toPage = () => {
  const router = useRouter()
  router.push('/artists')
}

onMounted(() => {
  getArtists(1)
})
</script>
