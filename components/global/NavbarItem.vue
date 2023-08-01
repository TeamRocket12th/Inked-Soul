<template>
  <nav
    class="fixed top-0 z-50 flex w-full flex-wrap items-center justify-between px-3 py-4 text-black shadow-md duration-200 ease-in-out md:min-h-[80px] md:flex-row md:px-[60px]"
    :class="[
      { 'text-white shadow-none': scrollY < 250 && route.path === '/' },
      { 'bg-[#FFF] ': route.path !== '/' },
      { 'bg-[#FFF] text-black': scrollY > 250 }
    ]"
  >
    <NuxtLink to="/">
      <div class="flex items-center justify-center gap-5">
        <img :src="logoImage" alt="" class="h-10" />
        <h2 class="font-heading-typo leading-[120%]">Inked Soul</h2>
      </div>
    </NuxtLink>

    <!-- 手機版 -->
    <div class="cursor-pointer md:hidden" @click="toggleMenu()">
      <Icon name="ic:baseline-menu" size="24" />
    </div>
    <div
      class="flex h-screen w-full flex-col bg-white py-5 text-[20px] leading-6 text-black"
      :class="{ hidden: showMenu }"
      @click="toggleMenu()"
    >
      <div class="flex flex-col gap-3 border-b px-8 py-5">
        <NuxtLink
          to="/account/login"
          class="defaultBtn w-fit border border-custom bg-transparent text-secondary hover:text-secondary"
          >登入</NuxtLink
        >
        <NuxtLink to="/account/signup" class="defaultBtn w-fit">註冊</NuxtLink>
      </div>
      <ul class="border-b py-5">
        <li>
          <NuxtLink
            to="/designs"
            class="block cursor-pointer px-8 py-4"
            :class="route.path === '/designs' ? 'text-black' : ''"
            >認領圖</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/artists"
            class="block cursor-pointer px-8 py-4"
            :class="route.path === '/artists' ? 'text-black' : ''"
            >刺青師</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/tips"
            class="block cursor-pointer px-8 py-4 md:mr-6"
            :class="route.path === '/tips' ? 'text-black' : ''"
            >知識點</NuxtLink
          >
        </li>
      </ul>
      <ul class="py-5">
        <li>
          <NuxtLink
            to="/term/appealflow"
            class="block cursor-pointer px-8 py-4 md:mr-6"
            :class="route.path === '/tips' ? 'text-black' : ''"
            >客服信箱</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/tips"
            class="block cursor-pointer px-8 py-4 md:mr-6"
            :class="route.path === '/tips' ? 'text-black' : ''"
            >知識點</NuxtLink
          >
        </li>
      </ul>
    </div>

    <!-- 電腦版 -->
    <ul class="hidden items-center md:flex">
      <li class="h-auto w-auto">
        <NuxtLink
          to="/designs"
          class="px-4 py-2"
          :class="route.path === '/designs' ? 'text-black' : ''"
          >認領圖</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/artists"
          class="px-4 py-2"
          :class="route.path === '/artists' ? 'text-black' : ''"
          >刺青師</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/tips"
          class="mr-6 px-4 py-2"
          :class="route.path === '/tips' ? 'text-black' : ''"
          >知識點</NuxtLink
        >
      </li>
      <li class="flex items-center">
        <NuxtLink v-if="!authToken" to="/account/login" class="flex items-center">
          <Icon name="mdi:account" size="24" class="self-auto"
        /></NuxtLink>
        <div v-if="authToken" class="dropdown-end dropdown">
          <label tabindex="0" class="avatar cursor-pointer align-middle">
            <div
              class="w-10 bg-white"
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
              <NuxtLink to="/account/artist/editinfo" class="rounded-none px-8 py-4">
                <Icon name="ic:outline-account-circle" size="24" />
                <p>編輯個人資料</p>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/account/artist/membership" class="rounded-none border-b px-8 py-4">
                <Icon name="ic:outline-how-to-reg" size="24" />
                <p>會員資格</p>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/account/artist/productlist" class="rounded-none px-8 py-4">
                <Icon name="ic:outline-collections-bookmark" size="24" />
                <p>認領圖</p>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/account/artist/albumn" class="rounded-none border-b px-8 py-4">
                <Icon name="ic:baseline-wallpaper" size="24" />
                <p>作品集</p>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/account/artist/reservation" class="rounded-none px-8 py-4">
                <Icon name="ic:outline-event-available" size="24" />
                <p>預約狀況</p>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/account/artist/orderinfo" class="rounded-none px-8 py-4">
                <Icon name="ic:round-list-alt" size="24" />
                <p>訂單資訊</p>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/account/artist/comments" class="rounded-none border-b px-8 py-4">
                <Icon name="ic:outline-stars" size="24" />
                <p>獲得評價</p>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/account/login" class="rounded-none px-8 py-4" @click="logout">
                <Icon name="ic:baseline-log-out" size="24" />
                <p>登出</p>
              </NuxtLink>
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
              <NuxtLink to="/account/normal/editinfo" class="rounded-none px-8 py-4">
                <Icon name="ic:outline-account-circle" size="24" />
                <p>編輯個人資料</p>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/account/normal/orderRecords" class="rounded-none px-8 py-4">
                <Icon name="ic:outline-list-alt" size="24" />
                <p>訂單資訊</p>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/account/normal/follows" class="rounded-none border-b px-8 py-4">
                <Icon name="ic:outline-bookmark-border" size="24" />
                <p>追蹤刺青師</p></NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/account/login" class="rounded-none px-8 py-4" @click="logout">
                <Icon name="ic:baseline-log-out" size="24" />
                <p>登出</p></NuxtLink
              >
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useAccountStore } from '~/stores/account'

const route = useRoute()
const authToken = useCookie('token')
const authCookie = useCookie('data')

const store = useAccountStore()
const { userInfoData, photo, artistInfoData } = storeToRefs(store)
const { getUserInfo, getArtistInfo, logout } = store

const { Role, Email } = authCookie.value ? authCookie.value : ''

const scrollY = ref('0')

const handleScroll = () => {
  scrollY.value = window.scrollY
}
if (process.client) {
  window.addEventListener('scroll', handleScroll)
}

const Photo = computed(() => {
  return photo.value
})
const Nickname = computed(() => {
  return (
    userInfoData.value.Nickname ||
    artistInfoData.value.Nickname ||
    authCookie.value.Nickname ||
    'xxx'
  )
})
const logoImage = computed(() => {
  if (scrollY.value < 250 && route.path === '/') {
    return '/logo-white.png'
  } else {
    return '/logo.png'
  }
})

watchEffect(() => {
  if (authCookie.value) {
    if (authCookie.value.Role.toLowerCase() === 'artist') {
      getArtistInfo()
    } else if (authCookie.value.Role.toLowerCase() === 'user') {
      getUserInfo()
    }
  }
})

// RWD
const showMenu = ref(true)
const toggleMenu = () => {
  showMenu.value = !showMenu.value
}
</script>
