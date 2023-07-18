<template>
  <div>
    <h2 class="border-b-2 border-primary pb-4">已追蹤刺青師名單</h2>
    <div
      v-for="(item, index) in followingData"
      :key="index"
      class="flex justify-between border-b-2 border-primary py-5"
    >
      <div class="flex">
        <!-- 大頭照 -->
        <div
          class="`artist-profile mr-2 h-16 w-16 rounded bg-contain bg-center bg-no-repeat"
          :style="`background-image: url(${item.ArtistPhoto})`"
        ></div>
        <!-- 名稱+風格 -->
        <div>
          <h3>{{ item.ArtistName }}</h3>
          <div class="flex">
            <!-- {{ item.ArtistStyle.split(',') }} -->
            <div
              v-for="(style, key) in item.ArtistStyle.split(',')"
              :key="key"
              class="rounded-full border-[1px] border-primary px-4 py-1"
            >
              {{ style }}
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <!-- 追蹤按鈕 -->
        <Icon name="ic:baseline-bookmark" size="36" @click="unFollow()" />
      </div>
    </div>
    <!-- <PaginationBtn/> -->
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useFollowsStore } from '~/stores/follows'
const store = useFollowsStore()
const { getFollows, unFollow } = store
const { followingData, allNum } = storeToRefs(store)

onMounted(() => {
  getFollows(1)
})
</script>

<style lang="scss" scoped></style>
