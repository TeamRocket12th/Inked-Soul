<template>
  <div class="">
    <h2 class="text-center">刺青師</h2>
    <div v-if="artistsData" class="grid grid-cols-3">
      <NuxtLink v-for="(item, index) in artistsData" :key="index" :to="`/Artists/${item.id.value}`">
        <GlobalArtistCard :image="item.picture.medium" :name="item.name"></GlobalArtistCard>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const artistsData = ref([])

const { data: artistsRes } = await useFetch('https://randomuser.me/api/?results=50')
// artistsData.value = artistsRes.value
for (let i = 0; i < 6; i++) {
  artistsData.value.push(artistsRes.value.results[i])
}
</script>
