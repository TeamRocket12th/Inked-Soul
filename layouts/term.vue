<template>
  <div class="container grid grid-cols-12 gap-8">
    <h2 class="col-span-12">使用者條款</h2>
    <div class="col-span-3 flex flex-col gap-8">
      <!-- <slot name="navbar"> </slot>
         -->
      <ul class="rounded-lg bg-white p-5">
        <NuxtLink
          v-for="(item, key) in menu"
          :key="key"
          :to="`/term/${item.link}`"
          class="block border-b duration-200 ease-in last:border-0"
          :class="{
            'bg-black text-white ': isActive(item.link),
            'hover:bg-primary': !isActive(item.link)
          }"
        >
          <p class="py-4 pl-8 font-noto-tc text-[20px] font-bold">
            {{ item.title }}
          </p>
        </NuxtLink>
      </ul>
    </div>
    <div class="col-span-9 self-start rounded-lg bg-white p-5">
      <NuxtPage />
    </div>
  </div>
</template>
<script setup>
const menu = [
  { title: '使用者條款', link: 'userterm' },
  { title: '隱私條款', link: 'privacyterms' },
  { title: '申訴流程', link: 'appealflow' }
]

const route = useRoute()

const isActive = (link) => {
  const currentPath = route.path
  return currentPath.includes(link)
}
</script>
<style scoped></style>
