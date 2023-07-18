<template>
  <div>
    <div class="grid grid-cols-3">
      <NuxtLink
        v-for="item in allAlbum"
        :key="item.id"
        :to="`/artists/${artistID}/albumn/${item.Id}`"
      >
        <AlbumnCard :image="item.Url" />
      </NuxtLink>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useGetImageStore } from '~/stores/getImage'
import AlbumnCard from '~/components/artists/AlbumnCard'

const store = useGetImageStore()
const { userGetAlbum } = store
const { allAlbum } = storeToRefs(store)

const route = useRoute()
const artistID = route.params.artistID
// const { data } = await useFetch(`/api/getArtists/getAlbumn/${id}`)
// const albumnData = ref([])
// albumnData.value = data.value.data.albumn
onMounted(() => {
  userGetAlbum(artistID, 1)
})
</script>
