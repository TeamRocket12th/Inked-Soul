<template>
  <div class="flex flex-col items-center gap-10 rounded-lg bg-white p-5">
    <div class="flex w-full flex-col gap-3">
      <h2>{{ artistInfo.name }}</h2>
      <img
        :src="artistInfo.img"
        class="aspect-square rounded-lg object-cover object-center shadow"
      />
      <div class="flex flex-row items-center justify-between">
        <!-- 追蹤 -->
        <div v-if="show === true" class="flex flex-row items-center">
          <Icon
            :name="followStatus === false ? 'ic:baseline-bookmark-border' : 'ic:baseline-bookmark'"
            class="h-6 w-6 hover:cursor-pointer"
            @click="followFn()"
          />
          {{ artistInfo.followers }}
        </div>
        <!-- 分享 -->
        <div class="dropdown-end dropdown">
          <label tabindex="0" class="border-none bg-white hover:bg-white hover:text-black"
            ><Icon name="ic:outline-share" size="24"
          /></label>
          <ul tabindex="0" class="dropdown-content z-[1] w-52 bg-base-100">
            <ShareModal :current-page="`/artists`" />
          </ul>
        </div>
      </div>
    </div>

    <div class="flex w-full flex-col gap-3">
      <p class="bg-primary px-5 py-3">關於我</p>
      <p>資歷｜{{ artistInfo.exp }}年</p>
      <p>工作室｜{{ artistInfo.studio }}</p>
      <p class="item-center flex flex-row gap-2">
        <Icon name="ic:outline-phone" size="24" class="text-secondary" /> {{ artistInfo.tel }}
      </p>
      <p class="item-center flex flex-row gap-2">
        <Icon name="ic:outline-home" size="24" class="text-secondary" /> {{ artistInfo.add }}
      </p>
      <p class="item-center flex flex-row gap-2">
        <Icon name="ic:outline-access-time" size="24" class="text-secondary" />{{ artistInfo.time }}
      </p>
    </div>

    <div class="flex w-full flex-col gap-3">
      <p class="bg-primary px-5 py-3">作品風格</p>
      <p class="mb-2">{{ artistInfo.intro }}</p>
      <ul v-if="artistInfo.style !== null" class="flex flex-col items-start gap-2">
        <li
          v-for="(style, key) in styleArr"
          :key="key"
          class="rounded-full border-[0.5px] border-[#D0D0D0] px-3 py-1"
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
// 取得刺青師資料
const store = useGetImageStore()
const { userGetTattooData } = store
const { allData } = storeToRefs(store)
// 追蹤
const followStore = useFollowsStore()
const { follow, unFollow } = followStore
const { followStatus } = storeToRefs(followStore)

// 取得並渲染刺青師資料
const artistInfo = ref({})
const styleArr = ref()
watch(allData, (_newValue, _oldValue) => {
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

// 刺青師ID
const route = useRoute()
const id = route.params.artistID

// 點擊追蹤ICON
const followFn = () => {
  if (followStatus.value === false) {
    follow(id)
    setTimeout(() => {
      userGetTattooData(id, 1)
    }, 2000)
    followStatus.value = true
  } else if (followStatus.value === true) {
    unFollow(id)
    setTimeout(() => {
      userGetTattooData(id, 1)
    }, 2000)
    followStatus.value = false
  }
}
// 檢查追蹤狀態
const authToken = useCookie('token')
const runtimeConfig = useRuntimeConfig()
const APIBASE = runtimeConfig.public.APIBASE
const checkFollow = (artistID) => {
  nextTick(async () => {
    const { data } = await useFetch(`${APIBASE}/api/tracktheartist`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${authToken.value}`
      },
      query: {
        artistid: artistID
      }
    })
    console.log('檢查追蹤狀態', data)
    let msg = ''
    if (data.value.Message) {
      msg = data.value.Message
    } else if (data.value.message) {
      msg = data.value.message
    }
    if (msg === '使用者無追蹤此刺青師' || msg === '刺青師無追蹤此刺青師') {
      followStatus.value = false
    } else if (msg === '此使用者已追蹤此刺青師') {
      followStatus.value = true
    }
  })
}
// 刺青師不能追蹤自己
const show = ref(true)
const token = useCookie('data')
const role = ref()
let artistID

const prevent = () => {
  if (token.value) {
    role.value = token.value.Role
    artistID = token.value.Id
    if (role.value === 'artist' && artistID.toString() === id) {
      show.value = false
    }
  }
}

onMounted(() => {
  userGetTattooData(id, 1)
  // checkFollow(id)
  checkFollow(id)
  prevent()
})
</script>
