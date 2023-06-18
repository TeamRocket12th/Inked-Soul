<template>
  <div class="container grid grid-cols-3">
    <div class="">
      <div class=""></div>
      <ul>
        <li v-for="(item, index) in userBackstageNav" :key="index">
          <NuxtLink :to="`/account/user/${item.route}`" class="flex">
            <Icon :name="item.icon" size:24 />
            <p>{{ item.text }}</p>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="col-span-2">
      <NuxtPage />
    </div>
  </div>
</template>
<script setup>
const userBackstageNav = [
  {
    icon: 'ic:outline-account-circle',
    text: '編輯個人資料',
    route: ''
  },
  {
    icon: 'ic:baseline-bookmark',
    text: '追蹤刺青師',
    route: 'follows'
  },
  {
    icon: 'ic:outline-monetization-on',
    text: '交易紀錄',
    route: 'orderRecords'
  },
  {
    icon: 'ic:outline-stars',
    text: '我的評價',
    route: 'comments'
  }
]
</script>
