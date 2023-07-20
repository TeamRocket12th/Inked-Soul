<template>
  <div v-if="props.num" class="join flex w-full justify-center">
    <button
      v-for="(item, index) in numArr"
      :key="index"
      class="join-item btn focus:bg-black focus:text-white"
      :class="item === 0 ? 'bg-black text-white' : ''"
      @click="sendRqst(item + 1)"
    >
      {{ item + 1 }}
      <!-- 預設"1"反黑 :class="item === 0 ? 'btn-active' : ''" -->
    </button>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useOrderStore } from '~/stores/order'
import { useSearchStore } from '~/stores/search'
import { useGetImageStore } from '~/stores/getImage'
import { useUploadTattooStore } from '~/stores/uploadTattoo'

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
const orderStore = useOrderStore()
const { getAllOrder, getComment: artistGetComment } = orderStore

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
let pageNum = 0
if (props.state === 'front') {
  if (props.num % 30 !== 0) {
    pageNum = Math.ceil(props.num / 30)
  } else if (props.num % 30 === 0) {
    pageNum = props.num / 30
  }
} else if (props.state === 'back') {
  if (props.num % 10 !== 0) {
    pageNum = Math.ceil(props.num / 10)
  } else if (props.num % 10 === 0) {
    pageNum = props.num / 10
  }
}

const numArr = []
for (let i = 0; i < pageNum; i++) {
  numArr.push(i)
}

// 發API
const cookie = useCookie('data')
const role = cookie.value.Role.toLowerCase()
const route = useRoute()
const path = route.path
const artistID = route.params.artistID
const artistIDback = cookie.value.Id

console.log('route', route)
console.log('cookie', cookie)

const sendRqst = (num) => {
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
  } else if (role === 'artist' && path === '/account/artist/orderinfo') {
    // 刺青師後台取得所有訂單
    getAllOrder(role, num)
  } else if (role === 'artist' && path === '/account/artist/comments') {
    // 刺青師後台取得所有評價
    artistGetComment(artistIDback, num)
  }
}

// 按鈕選擇樣式
const click = ref(true)
const clickFn = () => {
  console.log('click')
}
</script>

<style lang="scss" scoped></style>
