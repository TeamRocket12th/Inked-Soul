<template>
  <div class="flex flex-col items-center gap-10 rounded border px-[104] py-10">
    <div class="avatar flex flex-col items-center">
      <div class="w-20 overflow-hidden rounded-full">
        <img :src="Photo" />
      </div>
      <h2>{{ Nickname }}</h2>
    </div>
    <div class="flex flex-row items-center gap-[25px]">
      <button class="btn-outline btn rounded p-[10px]">免費會員</button>
    </div>
  </div>
</template>
<script setup>
import { useAccountStore } from '~/stores/account'
import { storeToRefs } from 'pinia'

const store = useAccountStore()
const { userInfoData } = storeToRefs(store)

// const Photo = computed(() => {
//   return userInfoData.value.Photo
// })
const Nickname = computed(() => {
  return userInfoData.value.Nickname
})

const authCookie = useCookie('data')
const { Photo } = authCookie.value
</script>
<style scoped></style>
