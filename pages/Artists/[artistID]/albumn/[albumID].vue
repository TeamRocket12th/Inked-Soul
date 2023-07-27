<template>
  <NuxtLayout name="album">
    <div v-if="singleAlbum" class="flex flex-col gap-3">
      <img :src="singleAlbum.Url" alt="" class="aspect-square w-full rounded-lg object-cover" />
      <p class="font-noto-tc text-base text-secondary">{{ singleAlbum.Description }}</p>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useGetImageStore } from '~/stores/getImage'

const store = useGetImageStore()
const { userGetSingleAlbum } = store
const { singleAlbum } = storeToRefs(store)

const route = useRoute()
const artistID = route.params.artistID
const albumID = route.params.albumID

onMounted(async () => {
  await userGetSingleAlbum(albumID, artistID)
})
</script>

<style lang="scss" scoped></style>
