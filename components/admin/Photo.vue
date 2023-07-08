<template>
  <div class="flex flex-col items-center gap-10 px-[104] py-10">
    <div class="avatar flex flex-col items-center">
      <div class="w-20 rounded-lg">
        <img :src="Photo" />
      </div>
      <h2>{{ NickName }}</h2>
    </div>
    <div class="flex flex-row items-center gap-[25px]">
      <button class="btn-outline btn rounded px-6 py-3">免費會員</button>
      <div class="flex flex-row items-center">
        <Icon name="ic:baseline-bookmark-border" class="h-6 w-6" />
        {{ Follower }}
      </div>
    </div>
  </div>
</template>
<script setup>
const authCookie = useCookie('data')
const { Photo, NickName, MemberShip, Follower } = authCookie.value
</script>
<style scoped></style>
