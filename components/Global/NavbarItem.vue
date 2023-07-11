<template>
  <nav
    class="flex min-h-[114px] items-center justify-between px-[60px] py-4 text-secondary shadow-md duration-200 ease-in-out"
    :class="[
      { 'text-white': scrollY < 400 && route.path === '/' },
      { 'bg-[#FFF] text-black': route.path !== '/' },
      { 'bg-[#FFF]': scrollY > 400 }
    ]"
  >
    <h1 class="logo">
      <NuxtLink to="/" class="text-4xl">Inked Soul</NuxtLink>
    </h1>
    <ul class="flex flex-row items-center gap-4">
      <li>
        <NuxtLink to="/designs">認領圖</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/artists">刺青師</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/tips">知識點</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/account/login" v-if="!authToken">
          <Icon name="mdi:account" size="24"
        /></NuxtLink>
        <div class="dropdown-end dropdown" v-if="authToken">
          <label tabindex="0" class="avatar cursor-pointer align-middle">
            <div
              class="w-10"
              :class="{
                'rounded-lg': Role === 'artist' || Role === 'Artist',
                'rounded-full': Role === 'user' || Role === 'User'
              }"
            >
              <img :src="Photo" />
            </div>
          </label>
          <ul
            v-if="Role === 'artist' || Role === 'Artist'"
            tabindex="0"
            class="dropdown-content menu menu-sm z-[1] mt-10 w-[326px] rounded-lg border border-[D0D0D0] bg-base-100 p-5 text-black shadow"
          >
            <div class="mb-5 flex flex-row items-center gap-4">
              <div class="avatar">
                <div class="h-12 w-12 rounded-lg">
                  <img :src="Photo" alt="" />
                </div>
              </div>
              <div class="flex flex-col items-start">
                <p class="font-bold">{{ Nickname }}</p>
                <p class="text-base text-secondary">{{ Email }}</p>
              </div>
            </div>
            <li>
              <NuxtLink to="/account/artist/editinfo" class="rounded-none border-b px-8 py-4"
                >刺青師後台</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/account/artist/editinfo" class="rounded-none px-8 py-4"
                >個人資料</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/account/artist/membership" class="rounded-none px-8 py-4"
                >會員資格</NuxtLink
              >
            </li>
            <li><NuxtLink class="rounded-none border-b px-8 py-4">作品集</NuxtLink></li>
            <li>
              <NuxtLink to="/account/artist/reservation" class="rounded-none px-8 py-4"
                >預約狀況</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/account/artist/orderinfo" class="rounded-none px-8 py-4"
                >訂單資訊</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/account/artist/comments" class="rounded-none border-b px-8 py-4"
                >獲得評價</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/account/login" @click="logout" class="rounded-none px-8 py-4"
                >登出</NuxtLink
              >
            </li>
          </ul>
          <ul
            v-if="Role === 'user' || Role === 'User'"
            tabindex="0"
            class="dropdown-content menu menu-sm z-[1] mt-10 w-[326px] rounded-lg border border-[D0D0D0] bg-base-100 p-5 text-black shadow"
          >
            <div class="mb-5 flex flex-row items-center gap-4">
              <div class="avatar">
                <div class="h-12 w-12 rounded-full">
                  <img :src="Photo" alt="" />
                </div>
              </div>
              <div class="flex flex-col items-start">
                <p class="font-bold">{{ Nickname }}</p>
                <p class="text-base text-secondary">{{ Email }}</p>
              </div>
            </div>
            <li>
              <NuxtLink to="/artists" class="rounded-none border-b px-8 py-4">加入刺青師</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/account/normal/editinfo" class="rounded-none px-8 py-4"
                >編輯個人資料</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/account/normal/orderRecords" class="rounded-none px-8 py-4"
                >交易紀錄</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/account/normal/follows" class="rounded-none border-b px-8 py-4"
                >追蹤刺青師</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/account/login" @click="logout" class="rounded-none px-8 py-4"
                >登出</NuxtLink
              >
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>
<script setup>
import { useAccountStore } from '~/stores/account'
import { storeToRefs } from 'pinia'

const route = useRoute()
const authToken = useCookie('token')
const authCookie = useCookie('data')

const store = useAccountStore()
const { userInfoData } = storeToRefs(store)

const { Role, Email } = authCookie.value ? authCookie.value : ''

const Photo = ref('')
// const Nickname = ref('')
const Nickname = computed(() => {
  return userInfoData.value.Nickname
})

const scrollY = ref('0')

const handleScroll = () => {
  scrollY.value = window.scrollY
}
if (process.client) {
  window.addEventListener('scroll', handleScroll)
}

const logout = () => {
  authToken.value = undefined || null
  authCookie.value = undefined || null
}

const isLogin = () => {
  if (!authToken.value) {
    return
  } else {
    Photo.value = authCookie.value.Photo
    Nickname.value = authCookie.value.Nickname
    console.log('nickname', Nickname.value)

    // 因為 API 回傳 null 有兩個type string|object
    if (Photo.value === 'null' || !Photo.value) {
      const defaultPhoto =
        'https://images.unsplash.com/photo-1601921004897-b7d582836990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHNrZXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'

      authCookie.value.Photo = defaultPhoto // 賦值到 cookie
      Photo.value = authCookie.value.Photo // 賦值到 變數
    }
    if (Nickname.value === 'null' || !Nickname.value) {
      console.log('nickname error', Nickname.value)
      const defaultNickname = 'xxx'
      authCookie.value.Nickname = defaultNickname
      Nickname.value = authCookie.value.Nickname
    }
  }
}

onMounted(() => {
  isLogin()
})
</script>
