<template>
  <div class="container mx-auto grid h-[100vh] grid-cols-3">
    <div>
      <p>individual artist</p>
      <p>route ID：{{ id }}</p>

      <!-- <IntroArea :artistData="data.data.artistData" /> -->
    </div>
    <div class="col-span-2">ul>li*3</div>
  </div>
</template>
<script setup>
import IntroArea from '~/container/artists/IntroArea'
const route = useRoute()
const id = route.params.id
const { data } = await useFetch(`/api/getArtists/${id}`)
console.log(data)
</script>
