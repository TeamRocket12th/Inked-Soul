<template>
  <div v-if="allNum" class="join flex w-full justify-center">
    <button
      v-for="(item, index) in pageNumArr"
      :key="index"
      class="join-item btn focus:bg-black focus:text-white"
      :class="item === 0 ? 'bg-black text-white' : ''"
      @click="getAllOrder(role, item + 1)"
    >
      {{ item + 1 }}
      <!-- 預設"1"反黑 :class="item === 0 ? 'btn-active' : ''" -->
    </button>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useOrderStore } from '~/stores/order'
const store = useOrderStore()
const { getAllOrder } = store
const { allNum } = storeToRefs(store)

console.log('allNum', allNum)
const pageNum = ref()
const pageNumArr = ref([])

watch(allNum, (nV) => {
  pageNum.value = Math.ceil(allNum.value / 10)
  for (let i = 0; i < pageNum.value; i++) {
    pageNumArr.value.push(i)
  }
  console.log('pageNumArr', pageNumArr)
  return pageNumArr
})

// 發API
const cookie = useCookie('data')
const role = cookie.value.Role
// const sendRqst = (num) => {
//   console.log(cookie)
// if (cookie.value.Role === 'user') {
//   getAllOrder('user', num)
// }else if(cookie.value.Role==='artist'){

// }
// }

// 按鈕選擇樣式
const click = ref(true)
const clickFn = () => {
  console.log('click')
}
</script>

<style lang="scss" scoped></style>
