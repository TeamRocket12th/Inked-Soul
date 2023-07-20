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
import { useOrderStore } from '~/stores/order'
import { useSearchStore } from '~/stores/search'
import { useGetImageStore } from '~/stores/getImage'
const orderStore = useOrderStore()
const { getAllOrder } = orderStore
const searchStore = useSearchStore()
const { getArtists } = searchStore
const imageStore = useGetImageStore()
const { userGetAlbum, getComment } = imageStore

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
const route = useRoute()
const path = route.path
const artistID = route.params.artistID

console.log('route', route)

const sendRqst = (num) => {
  if (path === '/designs') {
    getDesigns(num)
  } else if (path === '/artists') {
    getArtists(num)
  } else if (path === `/artists/${artistID}/albumn`) {
    userGetAlbum(artistID, num)
  } else if (path === `/artists/${artistID}/comments`) {
    getComment(artistID, num)
  } else if (cookie) {
    const role = cookie.value.Role
    getAllOrder(role, num)
  }
}

// 按鈕選擇樣式
const click = ref(true)
const clickFn = () => {
  console.log('click')
}
</script>

<style lang="scss" scoped></style>
