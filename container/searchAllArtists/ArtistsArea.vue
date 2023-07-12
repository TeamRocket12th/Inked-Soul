<template>
  <div>
    <div class="grid w-full grid-cols-3 gap-8">
      <NuxtLink v-for="item in allArtists" :key="item.id" :to="`/artists/${item.id}`">
        <ArtistCard></ArtistCard>
        <!-- :image="item.photo"
          :nickname="item.nickname"
          :studioname="item.studioName"
          :category="item.style" -->
      </NuxtLink>
    </div>
  </div>
</template>
<script setup>
// import ArtistCard from '~/components/global/ArtistCard.vue'
const runtimeConfig = useRuntimeConfig()
const APIBASE = runtimeConfig.public.APIBASE
const { data } = useFetch(`${APIBASE}/api/artistcity`, {
  method: 'POST',
  body: {
    City: '',
    Style: '',
    Element: ''
  }
})
const allArtists = ref([])
// const { data } = await useFetch('/api/getArtists/getAllArtists')
// const { data } = await useFetch('/api/getArtists/GetAllArtists.post.js')
// console.log('server API', data)
// allArtists.value = data.value.data
</script>
