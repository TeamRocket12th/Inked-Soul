<template>
  <div class="rounded p-[20px]">
    <ul class="flex flex-col">
      <NuxtLink
        v-for="(item, key) in menu"
        :key="key"
        :to="`/account/artist/${item.link || 'editinfo'}`"
        :class="{
          'bg-black text-white ': isActive(item.link),
          'hover:bg-primary': !isActive(item.link)
        }"
        class="flex flex-row items-center gap-3 rounded border-b py-[18.5px] pl-8 duration-200 ease-in last:border-0"
      >
        <Icon :name="item.icon" class="h-[25px] w-[25px]" />
        <p>
          {{ item.title }}
        </p>
      </NuxtLink>
    </ul>
  </div>
</template>
<script setup>
const menu = [
  {
    icon: 'ic:outline-account-circle',
    title: '編輯個人資料',
    link: 'editinfo'
  },
  {
    icon: 'ic:outline-how-to-reg',
    title: '會員資格',
    link: 'membership'
  },
  {
    icon: 'ic:outline-collections-bookmark',
    title: '認領圖',
    link: 'productlist'
  },
  {
    icon: 'ic:baseline-wallpaper',
    title: '作品集',
    link: 'albumn'
  },
  {
    icon: 'ic:outline-event-available',
    title: '預約狀況',
    link: 'reservation'
  },
  {
    icon: 'ic:round-list-alt',
    title: '訂單資訊',
    link: 'orderinfo'
  },
  {
    icon: 'ic:outline-stars',
    title: '獲得評價',
    link: 'comments'
  }
]

const route = useRoute()

const isActive = (link) => {
  const currentPath = route.path
  return currentPath.includes(link)
}
</script>
<style scoped></style>
