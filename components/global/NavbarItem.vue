<template>
  <nav
    class="flex min-h-[80px] items-center justify-between px-[60px] py-4 text-black shadow-md duration-200 ease-in-out"
    :class="[
      { 'text-white shadow-none': scrollY < 250 && route.path === '/' },
      { 'bg-[#FFF] text-black': route.path !== '/' },
      { 'bg-[#FFF]': scrollY > 250 }
    ]"
  >
    <NuxtLink to="/">
      <div class="flex items-center justify-center gap-3">
        <img :src="logoImage" alt="" class="h-6 w-6" />
        <h2 class="font-heading-typo">Inked Soul</h2>
      </div>
    </NuxtLink>
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
        <NuxtLink v-if="!authToken" to="/account/login">
          <Icon name="mdi:account" size="24"
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
const { getUserInfo, getArtistInfo } = store

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

const logout = () => {
  authToken.value = undefined || null
  authCookie.value = undefined || null
}

watchEffect(() => {
  if (authCookie.value) {
    if (authCookie.value.Role.toLowerCase() === 'artist') {
      getArtistInfo()
    } else if (authCookie.value.Role.toLowerCase() === 'user') {
      getUserInfo()
    }
  }
})
</script>
