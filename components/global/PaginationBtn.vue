<template>
  <div v-if="allOrderNum || allSearchNum" class="join flex w-full justify-center">
    <button
      v-for="(item, index) in pageNumArr"
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
const orderStore = useOrderStore()
const { getAllOrder } = orderStore
const { allNum: allOrderNum } = storeToRefs(orderStore)
const searchStore = useSearchStore()
const { getArtists, getDesigns } = searchStore
const { allNum: allSearchNum } = storeToRefs(searchStore)

const pageNum = ref()
const pageNumArr = ref([])

// watch(allOrderNum, (nV) => {
//   pageNum.value = Math.ceil(allOrderNum.value / 10)
//   for (let i = 0; i < pageNum.value; i++) {
//     pageNumArr.value.push(i)
//   }

//   return pageNumArr
// })

// watch(allSearchNum, (nV) => {
//   pageNum.value = Math.ceil(allSearchNum.value / 10)
//   for (let i = 0; i < pageNum.value; i++) {
//     pageNumArr.value.push(i)
//   }

//   return pageNumArr
// })

// 發API
const cookie = useCookie('data')
const route = useRoute()
const path = route.path
const sendRqst = (num) => {
  if (path === '/designs') {
    getDesigns(num)
  } else if (path === '/artists') {
    getArtists(num)
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
