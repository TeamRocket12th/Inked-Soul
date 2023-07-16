<template>
  <div>
    <masonry-wall v-if="allData" :items="allData" :ssr-columns="3" :column-width="200" :gap="16">
      <template #default="{ item }">
        <div class="rounded-xl">
          <NuxtLink :key="item.Id" :to="`/designs/${item.Id}`">
            <DesignCard
              :id="item.Id"
              :image="item.Url"
              :design-name="item.ImgName"
              :artist-name="item.ArtistNickname"
              :artist-img="item.Photo"
              :price="item.Total"
            />
          </NuxtLink>
        </div>
      </template>
    </masonry-wall>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useGetImageStore } from '~/stores/getImage'
const store = useGetImageStore()
const { userGetTattooData } = store
const { allData } = storeToRefs(store)

const route = useRoute()
const id = route.params.artistID

onMounted(() => {
  userGetTattooData(id, 1)
})
</script>
