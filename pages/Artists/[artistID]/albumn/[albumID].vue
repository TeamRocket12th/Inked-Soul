<template>
  <NuxtLayout name="album">
    <div>
      <p>單一作品集內頁</p>
      {{ singleAlbum }}
    </div>
  </NuxtLayout>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useGetImageStore } from '~/stores/getImage'

definePageMeta({
  layout: 'custom'
})
const store = useGetImageStore()
const { userGetSingleAlbum } = store
const { singleAlbum } = storeToRefs(store)

const route = useRoute()
const artistID = route.params.artistID
const albumID = route.params.albumID

onMounted(() => {
  userGetSingleAlbum(albumID, artistID)
})
</script>

<style lang="scss" scoped></style>
