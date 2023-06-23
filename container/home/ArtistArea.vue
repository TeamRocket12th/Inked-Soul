<template>
  <div class="container flex flex-col items-center gap-10">
    <h2 class="mb-10 text-center">本月精選刺青師</h2>
    <div v-if="data" class="grid grid-cols-3 gap-[32px]">
      <NuxtLink v-for="item in artistsData" :key="item.id" :to="`/artists/${item.id}`">
        <ArtistCard
          :image="item.photo"
          :nickname="item.nickname"
          :studioname="item.studioName"
          :category="item.style"
        ></ArtistCard>
      </NuxtLink>
    </div>
    <button type="button" class="btn-neutral btn">更多刺青師</button>
  </div>
</template>

<script setup>
const artistsData = ref([])
const { data } = await useFetch('/api/getArtists/getAllArtists')

for (let i = 0; i < 6; i++) {
  artistsData.value.push(data.value.data[i])
}
</script>
