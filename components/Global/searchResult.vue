<template>
  <div v-if="showResult" class="mb-8 flex w-full justify-between">
    <div class="flex">
      認領圖的
      <div class="text-left">
        <span v-if="cityArr.length === 0">全部</span>
        <span v-for="(item, index) in cityArr" :key="index" class="font-bold"
          >{{ item }}<span>&nbsp;</span></span
        ><span>&nbsp;</span>
        <span>縣市</span>
      </div>
      <div v-if="styleArr.length !== 0">
        <span v-if="styleArr.length === 0">全部</span>
        <span v-for="(item, index) in styleArr" :key="index" class="font-bold"
          >{{ item }}<span>&nbsp;</span></span
        ><span>&nbsp;</span>風格
      </div>
      <div v-if="elementArr.length !== 0">
        <span v-if="elementArr.length === 0">全部</span>
        <span v-for="(item, index) in elementArr" :key="index" class="font-bold"
          >{{ item }}<span>&nbsp;</span></span
        ><span>&nbsp;</span>元素
      </div>
      <div class="">，共{{ allDesignData.length || allArtistsData.length }}個結果</div>
    </div>

    <div class="cursor-pointer rounded-lg border bg-white p-1">
      <Icon name="ic:round-sync-alt" size="24" class="origin-center rotate-90" />
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useSearchStore } from '~/stores/search'
const store = useSearchStore()
const { allDesignData, allArtistsData, showResult, cityArr, styleArr, elementArr } =
  storeToRefs(store)
</script>

<style lang="scss" scoped></style>
