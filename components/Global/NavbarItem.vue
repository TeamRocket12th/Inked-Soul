<template>
  <nav
    class="flex items-center justify-between px-[60px] py-4 text-black shadow-md duration-200"
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
        <NuxtLink to="/account/login" v-if="!cookie"> <Icon name="mdi:account" /></NuxtLink>
        <div class="dropdown-end dropdown" v-if="cookie">
          <label tabindex="0" class="btn-ghost btn-circle avatar btn">
            <div class="w-10 rounded-full">
              <img :src="cookie.data.Photo" />
            </div>
          </label>
          <ul
            tabindex="0"
            class="dropdown-content menu rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 text-black shadow"
          >
            判斷是刺青師 or 一般用戶
            <li><NuxtLink to="/account/artist/editinfo">刺青師後台</NuxtLink></li>
            <li><NuxtLink to="/account/artist/editinfo">個人資料</NuxtLink></li>
            <li><NuxtLink to="/account/artist/membership">會員資格</NuxtLink></li>
            <li><a>作品集</a></li>
            <li><NuxtLink to="/account/artist/reservation">預約狀況</NuxtLink></li>
            <li><NuxtLink to="/account/artist/orderinfo">訂單資訊</NuxtLink></li>
            <li><a>獲得評價</a></li>
            <li><NuxtLink to="/account/login" @click="logout">登出</NuxtLink></li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>
<script setup>
const cookie = useCookie('token')
const route = useRoute()

const identity = cookie.value.data.Identity
const scrollY = ref('0')

const handleScroll = () => {
  scrollY.value = window.scrollY
}
if (process.client) {
  window.addEventListener('scroll', handleScroll)
}

const logout = () => {
  cookie.value = undefined || null
}
</script>
