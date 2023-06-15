<template>
  <div class="rounded border p-[20px]">
    <ul class="flex flex-col">
      <li
        v-for="(item, key) in menu"
        :key="key"
        class="flex flex-row items-center gap-3 border-b py-[18.5px] pl-8 last:border-0"
      >
        <Icon :name="item.icon" class="h-[25px] w-[25px]" />
        <p>
          {{ item.title }}
        </p>
      </li>
    </ul>
  </div>
</template>
<script setup>
const menu = [
  {
    icon: 'ic:outline-account-circle',
    title: '編輯個人資料'
  },
  {
    icon: 'ic:outline-how-to-reg',
    title: '會員資格'
  },
  {
    icon: 'ic:outline-collections-bookmark',
    title: '認領圖'
  },
  {
    icon: 'ic:baseline-wallpaper',
    title: '作品集'
  },
  {
    icon: 'ic:outline-event-available',
    title: '預約狀況'
  },
  {
    icon: 'ic:round-list-alt',
    title: '訂單資訊'
  },
  {
    icon: 'ic:outline-stars',
    title: '獲得評價'
  }
]

// const toggleComponent = ()=>{

// }
</script>
<style scoped></style>
