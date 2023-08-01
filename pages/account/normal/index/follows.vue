<template>
  <div>
    <p v-show="!followingData">尚未追蹤刺青師</p>

    <div
      v-for="(item, index) in followingData"
      :key="index"
      to="item.ArtistId"
      class="flex justify-between border-b-2 border-primary py-5 hover:cursor-pointer"
      @click.self="toArtistPage(item.ArtistId)"
    >
      <div class="flex">
        <!-- 大頭照 -->
        <div
          class="artist-profile mr-2 h-16 w-16 rounded-xl bg-cover bg-center bg-no-repeat"
          :style="`background-image: url(${item.ArtistPhoto})`"
        ></div>
        <!-- 名稱+風格 -->
        <div v-if="typeof item.ArtistStyle === 'string'" class="flex flex-col justify-between">
          <h3>{{ item.ArtistName }}</h3>
          <ul class="flex gap-2">
            <li
              v-for="(style, key) in item.ArtistStyle.split(',')"
              :key="key"
              class="rounded-full border-[1px] border-primary px-4 py-1 text-sm"
            >
              {{ style }}
            </li>
          </ul>
        </div>
      </div>
      <div class="">
        <!-- 追蹤按鈕 -->
        <Icon
          name="ic:baseline-bookmark"
          size="24"
          class="cursor-pointer"
          @click.prevent="unFollow(item.ArtistId)"
        />
      </div>
    </div>
    <div v-if="allNum">
      <PaginationBtn :num="allNum" state="back" />
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useFollowsStore } from '~/stores/follows'
const store = useFollowsStore()
const { getFollows, unFollow } = store
const { followingData, allNum } = storeToRefs(store)

// 跳轉前往刺青師個人頁
const router = useRouter()
const toArtistPage = (id) => {
  router.push(`/artists/${id}`)
}
onMounted(() => {
  getFollows(1)
})
</script>

<style lang="scss" scoped></style>
