<template>
  <div>
    <div class="grid grid-cols-3 gap-8">
      <NuxtLink v-for="item in allArtists" :key="item.id" :to="`/artists/${item.id}`">
        <ArtistCard
          :image="item.photo"
          :nickname="item.nickname"
          :studioname="item.studioName"
          :category="item.style"
        ></ArtistCard>
      </NuxtLink>
    </div>
  </div>
</template>
<script setup>
// import ArtistCard from '~/components/global/ArtistCard.vue'

const allArtists = ref([])
const { data } = await useFetch('/api/getArtists/getAllArtists')
allArtists.value = data.value.data
</script>
