<template>
  <div v-if="showResult" class="mb-8 flex w-full justify-between">
    <div class="flex items-center gap-2">
      認領圖的
      <div class="text-left">
        <span v-if="cityArr.length === 0" class="font-bold">全部</span>
        <span v-for="(item, index) in cityArr" :key="index" class="font-bold"
          >{{ item }}<span>&nbsp;</span></span
        ><span>&nbsp;</span>
        <span v-if="cityArr.length === 0" class="font-bold">縣市</span>
      </div>
      <div v-if="path === '/designs'" class="flex items-center">
        <span v-if="styleArr.length === 0" class="font-bold">全部</span>
        <div class="line-clamp-1 max-w-[200px] font-bold">
          <span v-for="(item, index) in styleArr" :key="index">{{ item }}<span>&nbsp;</span></span
          ><span>&nbsp;</span>
        </div>
        <span> 風格 </span>
      </div>
      <div v-if="path === '/designs'" class="flex items-center">
        <span v-if="elementArr.length === 0" class="font-bold">全部</span>
        <div class="line-clamp-1 max-w-[150px] font-bold">
          <span v-for="(item, index) in elementArr" :key="index">{{ item }}<span>&nbsp;</span></span
          ><span>&nbsp;</span>
        </div>
        <span> 元素 </span>
      </div>
      <div>，共{{ allNum ? allNum : 0 }}個結果</div>
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
const { showResult, cityArr, styleArr, elementArr, allNum } = storeToRefs(store)
const route = useRoute()
const path = route.path
</script>

<style lang="scss" scoped></style>
