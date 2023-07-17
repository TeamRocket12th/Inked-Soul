<template>
  <div class="rounded p-[20px]">
    <ul class="flex flex-col">
      <NuxtLink
        v-for="(item, key) in menu"
        :key="key"
        :to="`/account/normal/${item.link}`"
        :class="{ 'bg-black text-white hover:bg-none': isActive(item.link) }"
        class="flex flex-row items-center gap-3 rounded border-b py-[18.5px] pl-8 last:border-0 hover:bg-primary"
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
    icon: 'ic:outline-list-alt',
    title: '訂單資訊',
    link: 'orderRecords'
  },
  {
    icon: 'ic:outline-bookmark-border',
    title: '追蹤刺青師',
    link: 'follows'
  }
  // {
  //   icon: 'ic:outline-stars',
  //   title: '我的評價',
  //   link: 'comments'
  // }
]

const route = useRoute()

const isActive = (link) => {
  const currentPath = route.path
  return currentPath.includes(link)
}
</script>
<style scoped></style>
