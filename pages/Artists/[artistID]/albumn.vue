<template>
  <div>
    <div class="grid grid-cols-3">
      <NuxtLink v-for="item in albumnData" :key="item.id" :to="`/albumn/${item.id}`">
        <AlbumnCard :image="item.image" />
      </NuxtLink>
    </div>
  </div>
</template>
<script setup>
import AlbumnCard from '~/components/artists/AlbumnCard'
const route = useRoute()
const id = route.params.id
const { data } = await useFetch(`/api/getArtists/getAlbumn/${id}`)
const albumnData = ref([])
albumnData.value = data.value.data.albumn
</script>
