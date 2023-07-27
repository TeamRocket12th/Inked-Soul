<template>
  <div v-if="newNumArr" class="mt-4 flex w-full justify-center">
    <button
      v-for="(item, index) in newNumArr.value"
      :key="index"
      class="my-2 my-2 rounded px-[10px] py-[2.5px] hover:cursor-pointer hover:bg-primary hover:text-black"
      :class="item + 1 === click ? 'bg-black text-white' : ''"
      @click="sendRqst(item + 1)"
    >
      {{ item + 1 }}
    </button>
  </div>
  <!-- <Swiper
    v-if="newNumArr"
    class="relative mt-4 !w-[150px]"
    :modules="[SwiperNavigation]"
    :slides-per-view="3"
  >
    <SwiperSlide v-for="(item, index) in newNumArr.value" :key="index">
      <button
        class="my-2 my-2 rounded px-[10px] py-[2.5px] hover:cursor-pointer hover:bg-primary hover:text-black"
        :class="item + 1 === click ? 'bg-black text-white' : ''"
        @click="sendRqst(item + 1)"
      >
        {{ item + 1 }}
      </button>
    </SwiperSlide>
    <SwiperNavigation /> 
    <SwiperControls />
  </Swiper> -->
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useOrderStore } from '~/stores/order'
import { useSearchStore } from '~/stores/search'
import { useGetImageStore } from '~/stores/getImage'
import { useUploadTattooStore } from '~/stores/uploadTattoo'
import { useFollowsStore } from '~/stores/follows'

// 所有認領圖頁
const searchStore = useSearchStore()
const { getArtists } = searchStore
// 刺青師前台所有作品集+所有評價
const imageStore = useGetImageStore()
const { userGetAlbum, getComment } = imageStore
// 刺青師後台所有認領圖+作品集
const tattooStore = useUploadTattooStore()
const { artistGetTattooData, getAlbumn } = tattooStore
const { radio } = storeToRefs(tattooStore)
// 刺青師後台所有訂單+評價
// 用戶後台取得所有訂單
const orderStore = useOrderStore()
const { getAllOrder, getComment: artistGetComment } = orderStore
// 用戶前台取得追蹤列表
const followStore = useFollowsStore()
const { getFollows } = followStore

// 點選樣式
const click = ref(1)

// 計算總數
const props = defineProps({
  num: {
    type: Number,
    required: true
  },
  state: {
    type: String,
    required: true
  }
})

// 計算頁數
const { num } = toRefs(props)

const pageNum = ref()
const newPageNum = computed(() => {
  if (props.state === 'front') {
    if (num.value % 30 !== 0) {
      pageNum.value = Math.ceil(num.value / 30)
      return pageNum
    } else if (num.value % 30 === 0) {
      pageNum.value = num.value / 30
      return pageNum
    }
  } else if (props.state === 'back') {
    if (num.value % 10 !== 0) {
      pageNum.value = Math.ceil(num.value / 10)
      return pageNum
    } else if (num.value % 10 === 0) {
      pageNum.value = num.value / 10
      return pageNum
    }
  }
})

const numArr = ref([])
const newNumArr = computed(() => {
  if (newNumArr.value === undefined) {
    for (let i = 0; i < newPageNum.value.value; i++) {
      numArr.value.push(i)
    }
    return numArr
  } else {
    newNumArr.value.value.length = 0
    for (let i = 0; i < newPageNum.value.value; i++) {
      numArr.value.push(i)
    }
    return numArr
  }
})

// 發API
const cookie = useCookie('data')
let role
if (cookie) {
  role = cookie.value.Role.toLowerCase()
}
const route = useRoute()
const path = route.path
const artistID = route.params.artistID
const artistIDback = cookie.value.Id

const sendRqst = (num) => {
  click.value = num
  if (path === '/artists') {
    // 所有認領圖頁
    getArtists(num)
  } else if (path === `/artists/${artistID}/albumn`) {
    // 刺青師前台取得所有作品集
    userGetAlbum(artistID, num)
  } else if (path === `/artists/${artistID}/comments`) {
    // 刺青師前台取得所有評價
    getComment(artistID, num)
  } else if (role === 'artist' && path === '/account/artist/productlist') {
    // 刺青師後台取得所有認領圖
    if (radio.value === 1) {
      artistGetTattooData('', num)
    } else if (radio.value === 2) {
      artistGetTattooData(false, num)
    } else if (radio.value === 3) {
      artistGetTattooData(true, num)
    }
  } else if (role === 'artist' && path === '/account/artist/albumn') {
    // 刺青師後台取得所有作品集
    getAlbumn(artistIDback, num)
  } else if (role === 'artist' && path === '/account/artist/comments') {
    // 刺青師後台取得所有評價
    artistGetComment(artistIDback, num)
  } else if (role === 'user' && path === '/account/normal/follows') {
    // 用戶後台取得追蹤列表
    getFollows(num)
  } else if (path === '/account/artist/orderinfo' || path === '/account/normal/orderRecords') {
    // 刺青師或用戶後台取得所有訂單
    getAllOrder(role, num)
  }
}

// 輪播樣式
// const swiper = new Swiper('.swiper', {
//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev'
//   }
// })
// const swiper = useSwiper()
</script>

<style scoped></style>
