<template>
  <div>
    <!-- <p>刺青師ID：{{ route.params.artistID }}</p> -->
    <div class="container grid grid-cols-3 gap-8">
      <IntroArea class="h-fit shadow" />
      <div class="col-span-2 flex flex-col gap-10">
        <ul class="flex flex-row items-center">
          <li
            class="min-w-[120px] border-b-2 pb-[14px] text-center"
            :class="{
              'border-b-black': !currentPage.includes('albumn') && !currentPage.includes('comments')
            }"
          >
            <NuxtLink :to="`/artists/${id}/`" class="px-[28px] pb-[14px]">認領圖</NuxtLink>
          </li>
          <li
            class="pb min-w-[120px] border-b-2 pb-[14px] text-center"
            :class="{ 'border-b-black': currentPage.includes('albumn') }"
          >
            <NuxtLink :to="`/artists/${id}/albumn`" class="px-[28px] pb-[14px]">作品集</NuxtLink>
          </li>
          <li
            class="min-w-[120px] border-b-2 pb-[14px] text-center"
            :class="{ 'border-b-black': currentPage.includes('comments') }"
          >
            <NuxtLink :to="`/artists/${id}/comments`" class="px-[28px] pb-[14px]">評價</NuxtLink>
          </li>
        </ul>
        <NuxtPage />
      </div>
    </div>
  </div>
</template>
<script setup>
import IntroArea from '~/container/artists/IntroArea'
const route = useRoute()
const id = route.params.artistID

const currentPage = computed(() => {
  return route.path
})
</script>
