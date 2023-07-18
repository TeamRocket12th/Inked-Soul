<template>
  <div class="flex flex-col items-center gap-10 rounded-lg bg-white p-5">
    <div class="flex w-full flex-col gap-3">
      <h2>{{ artistInfo.name }}</h2>
      <img :src="artistInfo.img" class="rounded-lg object-cover shadow" />
      <div class="flex flex-row items-center justify-between">
        <!-- 追蹤 -->
        <div class="flex flex-row items-center">
          <Icon
            :name="followStatus === false ? 'ic:baseline-bookmark-border' : 'ic:baseline-bookmark'"
            class="h-6 w-6 hover:cursor-pointer"
            @click="followFn()"
          />
          {{ artistInfo.followers }}
        </div>
        <!-- 分享 -->
        <div>
          <div class="dropdown-end dropdown">
            <label
              tabindex="0"
              class="btn-outline btn border-none bg-white hover:bg-white hover:text-black"
              ><Icon name="ic:outline-share" size="24"
            /></label>
            <ul tabindex="0" class="dropdown-content z-[1] w-52 bg-base-100">
              <ShareModal />
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="flex w-full flex-col gap-3">
      <p class="bg-primary px-5 py-3">關於我</p>
      <p>資歷｜{{ artistInfo.exp }}年</p>
      <p>工作室｜{{ artistInfo.studio }}</p>
      <p class="item-center flex flex-row gap-2">
        <Icon name="ic:outline-phone" class="h-6 w-6" /> {{ artistInfo.tel }}
      </p>
      <p class="item-center flex flex-row gap-2">
        <Icon name="ic:outline-home" class="h-6 w-6" /> {{ artistInfo.add }}
      </p>
      <p class="item-center flex flex-row gap-2">
        <Icon name="ic:outline-access-time" class="h-6 w-6" />{{ artistInfo.time }}
      </p>
    </div>

    <div class="flex w-full flex-col gap-3">
      <p class="bg-primary px-5 py-3">作品風格</p>
      <p class="mb-2">{{ artistInfo.intro }}</p>
      <ul class="flex flex-col items-start gap-2" v-if="artistInfo.style !== null">
        <li
          v-for="(style, key) in styleArr"
          :key="key"
          class="rounded-full border border-[#D0D0D0] px-3 py-1"
        >
          {{ style }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useGetImageStore } from '~/stores/getImage'
import { useFollowsStore } from '~/stores/follows'
const store = useGetImageStore()
const { userGetTattooData } = store
const { allData } = storeToRefs(store)

const followStore = useFollowsStore()
const { checkFollow, follow, unFollow } = followStore
const { followStatus } = storeToRefs(followStore)

const artistInfo = ref({})
const styleArr = ref()
watch(allData, (nV) => {
  artistInfo.value.name = allData.value[0].ArtistNickname
  artistInfo.value.img = allData.value[0].Photo
  artistInfo.value.followers = allData.value[0].Follower
  artistInfo.value.exp = allData.value[0].Experience
  artistInfo.value.studio = allData.value[0].StudioName
  artistInfo.value.tel = allData.value[0].Phone
  artistInfo.value.add = allData.value[0].Address
  artistInfo.value.time = `${allData.value[0].StartTime}-${allData.value[0].EndTime}`
  artistInfo.value.intro = allData.value[0].Intro
  // artistInfo.value.style = allData.value[0].Style
  styleArr.value = allData.value[0].Style.split(',')
  return { artistInfo, styleArr }
})

const route = useRoute()
const id = route.params.artistID

// 追蹤
const followFn = async () => {
  if (followStatus.value === false) {
    await follow(id)
    userGetTattooData(id, 1)
  } else if (followStatus.value === true) {
    await unFollow(id)
    userGetTattooData(id, 1)
  }
}

onMounted(() => {
  userGetTattooData(id, 1)
  // checkFollow(id)
})
</script>
