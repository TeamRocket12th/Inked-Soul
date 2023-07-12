<template>
  <div>
    <div v-if="showResult" class="mb-8 flex w-full justify-between">
      <p class="text-left">
        刺青師的
        <span v-if="cityArr.length === 0">全部</span>
        <span v-for="(item, index) in cityArr" :key="index" class="font-bold"
          >{{ item }}<span>&nbsp;</span></span
        ><span>&nbsp;</span>縣市 ， 共{{ allArtistsData.length }}個結果
      </p>
      <div class="cursor-pointer rounded-lg border bg-white p-1">
        <Icon name="ic:round-sync-alt" size="24" class="origin-center rotate-90" />
      </div>
    </div>
    <div class="grid w-full grid-cols-3 gap-8">
      <NuxtLink v-for="item in allArtistsData" :key="item.id" :to="`/artists/${item.Id}`">
        <ArtistCard
          :image="item.Photo"
          :nickname="item.Nickname"
          :category="item.style"
        ></ArtistCard>
      </NuxtLink>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useSearchStore } from '~/stores/search'
const store = useSearchStore()
const { allArtistsData, cityArr, showResult } = storeToRefs(store)

const runtimeConfig = useRuntimeConfig()
const APIBASE = runtimeConfig.public.APIBASE
const { data } = await useFetch(`${APIBASE}/api/searchartist`, {
  method: 'POST',
  body: {
    City: '',
    Style: '',
    Element: ''
  }
})
allArtistsData.value = data.value.Data
</script>
