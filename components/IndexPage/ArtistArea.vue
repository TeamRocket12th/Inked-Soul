<template>
  <div class="">
    <h2 class="text-center">刺青師</h2>
    <div class="grid grid-cols-3">
      <NuxtLink v-for="item in artistsData" :key="item.id" :to="`/Artists/${item.id}`">
        <GlobalArtistCard
          :nickname="item.nickname"
          :studio="item.studioName"
          :photo="item.photo"
          :style="item.style"
          :element="item.element"
        ></GlobalArtistCard>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const artistsData = ref([])

const { data } = await useFetch('/api/getAllArtists')
artistsData.value = data.value.data
</script>
