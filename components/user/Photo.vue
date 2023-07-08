<template>
  <div class="flex flex-col items-center gap-10 rounded border px-[104] py-10">
    <div class="avatar flex flex-col items-center">
      <div class="w-20 overflow-hidden rounded-full">
        <img :src="Photo" />
      </div>
      <h2>{{ NickName }}</h2>
    </div>
    <div class="flex flex-row items-center gap-[25px]">
      <button class="btn-outline btn rounded p-[10px]">免費會員</button>
    </div>
  </div>
</template>
<script setup>
const authCookie = useCookie('data')
const { Photo, NickName } = authCookie.value
</script>
<style scoped></style>
