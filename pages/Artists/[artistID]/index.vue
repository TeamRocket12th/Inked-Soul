<template>
  <div class="relative">
    <masonry-wall
      v-if="allDesignData"
      :items="allDesignData"
      :ssr-columns="3"
      :column-width="200"
      :gap="16"
    >
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
    <div ref="root" class="absolute bottom-[200px] py-20"></div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useGetImageStore } from '~/stores/getImage'

const store = useGetImageStore()
const { allDesignData, isPending } = storeToRefs(store)
const { userGetTattooData } = store

const route = useRoute()
const id = route.params.artistID

const page = ref(0)
const skip = ref(0)
const root = ref(null)

const initIntersectionObserver = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        page.value += 1
        skip.value += 1
      }
    })
  })
  if (!isPending.value) {
    observer.observe(root.value)
  }
}

watch(page, (nextPage) => {
  userGetTattooData(id, nextPage)
})

onMounted(() => {
  initIntersectionObserver()
})
</script>
