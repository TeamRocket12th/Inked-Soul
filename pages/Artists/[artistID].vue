<template>
  <div>
    <p>刺青師ID：{{ route.params.artistID }}</p>
    <div class="container grid grid-cols-3">
      <IntroArea :artist-data="data.data.artistData" />
      <div class="col-span-2">
        <ul class="flex gap-6">
          <li><NuxtLink :to="`/artists/${id}/`">認領圖</NuxtLink></li>
          <li><NuxtLink :to="`/artists/${id}/albumn`">作品集</NuxtLink></li>
          <li><NuxtLink :to="`/artists/${id}/comments`">評價</NuxtLink></li>
        </ul>
        <NuxtPage />
      </div>
    </div>
  </div>
</template>
<script setup>
import IntroArea from '~/container/artists/IntroArea'
const route = useRoute()
const id = route.params.artistID
const { data } = await useFetch(`/api/getArtists/${id}`)
</script>
