<template>
  <div class="container">
    <!-- 麵包屑 -->
    <div class="breadcrumbs text-sm">
      <ul class="text-secondary">
        <li><NuxtLink to="/">首頁</NuxtLink></li>
        <li>
          <NuxtLink :to="`/artists/${artistId}`">{{ artistName }}</NuxtLink>
        </li>
        <li>
          <NuxtLink :to="`/designs/${designId}`" class="underline">{{ designName }}</NuxtLink>
        </li>
      </ul>
    </div>
    <!-- 認領圖資訊 -->
    <div class="grid grid-cols-3 gap-8">
      <div class="col-span-2 flex flex-col gap-10">
        <DesignImage v-if="designInfo" :id="designId" :design-data="designInfo" />
        <DesignComment />
        <!-- 刺青師的其他認領圖 -->
        <div class="relative">
          <h4 class="mb-8 text-center font-noto-tc">刺青師的其他認領圖</h4>
          <masonry-wall
            v-if="allDesignData"
            :items="allDesignData"
            :ssr-columns="2"
            :column-width="300"
            :gap="32"
          >
            <template #default="{ item }">
              <div class="rounded-xl">
                <NuxtLink :key="item.Id" :to="`/designs/${item.Id}`">
                  <DesignCard
                    :id="item.Id"
                    :image="item.Url"
                    :design-name="item.ImgName"
                    :artist-name="item.ArtistNickname"
                    :artist-img="item.Photo"
                    :price="item.Total"
                  />
                </NuxtLink>
              </div>
            </template>
          </masonry-wall>
          <div ref="root" class="absolute bottom-[200px] py-20"></div>
        </div>
      </div>
      <DesignIntro
        v-if="designInfo"
        :design-data="designInfo"
        class="sticky h-fit duration-500 ease-in-out"
        :style="{ top: scrollY > 89 && scrollY < 1200 ? '90px' : '50px' }"
      >
        <!-- :class="{ 'top-[90px]': scrollY > 90 && scrollY < 400 }" -->
        <template #price>
          <div>
            <p class="mb-[30px] text-end">
              <span class="text-base text-[#6C6C6C]"> 訂金 </span>
              <span class="text-4xl font-bold">${{ deposit }}</span>
            </p>
            <NuxtLink
              :to="!designInfo.IsSoldout ? `/designs/${designId}/order` : `/designs/${designId}`"
            >
              <button class="defaultBtn mb-3 py-5 text-[20px]" :disabled="designInfo.IsSoldout">
                <span class=""> 認領圖 </span>
              </button>
            </NuxtLink>
            <p class="mb-3 flex flex-row items-center gap-[18px]">
              <span>總金額 ${{ totalPrice }}</span>
              <span>尾款 ${{ balance }}</span>
            </p>

            <p class="flex flex-row items-start gap-2 text-[#6C6C6C]">
              <Icon name="ic:outline-error-outline" size="24" />
              <span> 本平台僅收「三成訂金」，剩餘尾款請於預約當日與刺青師本人交易。 </span>
            </p>
          </div>
        </template>
      </DesignIntro>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import DesignImage from '~/components/design/DesignImage.vue'
import DesignIntro from '~/components/design/DesignIntro.vue'
import DesignComment from '~/components/design/DesignComment.vue'
import { useGetImageStore } from '~/stores/getImage'

const store = useGetImageStore()
const { allDesignData, isPending, isNoResult } = storeToRefs(store)
const { userGetTattooData } = store

const runtimeConfig = useRuntimeConfig()
const APIBASE = runtimeConfig.public.APIBASE
const authToken = useCookie('token')

const route = useRoute()

const page = ref(0)
const root = ref(null)
const scrollY = ref('0')

const designId = route.params.designID
const designInfo = ref()

const { data: design } = await useFetch(`${APIBASE}/api/getimage/imgid/${designId}`, {
  headers: { 'Content-type': 'application/json', Authorization: `Bearer ${authToken.value}` }
})

designInfo.value = design.value.Data
const artistName = ref(design.value.Data.ArtistName)
const artistId = ref(design.value.Data.ArtistID)
const designName = ref(design.value.Data.Name)
const deposit = ref(designInfo.value.Deposit.toLocaleString())
const totalPrice = ref(designInfo.value.Total.toLocaleString())
const balance = ref(designInfo.value.Balance.toLocaleString())

const initIntersectionObserver = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0 && !isNoResult.value) {
        page.value += 1
      }
    })
  })
  if (!isPending.value) {
    observer.observe(root.value)
  }
}

watch(page, (nextPage) => {
  userGetTattooData(artistId, nextPage)
})

const handleScroll = () => {
  scrollY.value = window.scrollY
}
if (process.client) {
  window.addEventListener('scroll', handleScroll)
}

onMounted(() => {
  initIntersectionObserver()
})
</script>
