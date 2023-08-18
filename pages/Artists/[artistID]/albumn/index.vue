<template>
  <div>
    <div v-if="allAlbum" class="grid grid-cols-3 gap-8">
      <NuxtLink
        v-for="item in allAlbum"
        :key="item.id"
        :to="`/artists/${artistID}/albumn/${item.Id}`"
      >
        <AlbumnCard :is-top="item.IsTop" :image="item.Url" />
      </NuxtLink>
    </div>
    <div v-if="allAlbumNum">
      <PaginationBtn :num="allAlbumNum" state="front" />
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useGetImageStore } from '~/stores/getImage'
import AlbumnCard from '~/components/artists/AlbumnCard'

const store = useGetImageStore()
const { userGetAlbum } = store
const { allAlbum, allAlbumNum } = storeToRefs(store)

const route = useRoute()
const artistID = route.params.artistID

onMounted(() => {
  userGetAlbum(artistID, 1)
})
</script>
