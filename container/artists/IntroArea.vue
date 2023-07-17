<template>
  <div class="flex flex-col items-center gap-10 rounded-lg bg-white p-5">
    <div class="flex w-full flex-col gap-3">
      <h2>{{ artistInfo.name }}</h2>
      <img :src="artistInfo.img" class="rounded-lg object-cover shadow" />
      <div class="flex flex-row items-center justify-between">
        <div class="flex flex-row items-center">
          <Icon
            :name="
              followingStatus === false ? 'ic:baseline-bookmark-border' : 'ic:baseline-bookmark'
            "
            class="h-6 w-6 hover:cursor-pointer"
            @click="followFn()"
          />
          {{ artistInfo.followers }}
        </div>
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
const store = useGetImageStore()
const { userGetTattooData } = store
const { allData } = storeToRefs(store)

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
const runtimeConfig = useRuntimeConfig()
const APIBASE = runtimeConfig.public.APIBASE
const authToken = useCookie('token')
const followingStatus = ref(false)
const followFn = () => {
  if (followingStatus.value === false) {
    nextTick(async () => {
      const { data } = await useFetch(`${APIBASE}/api/trackartists`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${authToken.value}`
        },
        query: {
          artistid: id
        }
      })
      followingStatus.value = true
      userGetTattooData(id, 1) // 待補page
    })
  } else if (followingStatus.value === true) {
    nextTick(async () => {
      const { data } = await useFetch(`${APIBASE}/api/canceltrackartists`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${authToken.value}`
        },
        query: {
          artistid: id
        }
      })
      followingStatus.value = false
      userGetTattooData(id, 1) // 待補page
    })
  }
}
// 取消追蹤

onMounted(() => {
  userGetTattooData(id, 1)
})
</script>
