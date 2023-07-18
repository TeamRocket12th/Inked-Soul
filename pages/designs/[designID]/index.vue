<template>
  <div class="container">
    <!-- 麵包屑 -->
    <div class="breadcrumbs text-sm">
      <ul>
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
      </div>
      <DesignIntro v-if="designInfo" :design-data="designInfo" class="sticky top-[120px] h-fit">
        <template #price>
          <div>
            <p class="mb-[30px] text-end">
              <span class="text-base text-[#6C6C6C]"> 訂金 </span>
              <span class="text-4xl font-bold">${{ designInfo.Deposit }}</span>
            </p>
            <NuxtLink
              :to="!designInfo.IsSoldout ? `/designs/${designId}/order` : `/designs/${designId}`"
            >
              <button
                class="btn-neutral btn mb-3 w-full bg-black text-white"
                :disabled="designInfo.IsSoldout"
              >
                認領圖
              </button>
            </NuxtLink>
            <p class="mb-3 flex flex-row items-center gap-[18px]">
              <span>總金額 ${{ designInfo.Total }}</span>
              <span>尾款 ${{ designInfo.Balance }}</span>
            </p>

            <p class="flex flex-row items-start gap-2 text-[#6C6C6C]">
              <Icon name="ic:outline-error-outline" size="24" />
              <span> 本平台僅收「訂金」，<br />剩餘尾款請於預約當日與刺青師本人交易。 </span>
            </p>
          </div>
        </template>
      </DesignIntro>
    </div>
  </div>
</template>
<script setup>
import DesignImage from '~/components/design/DesignImage.vue'
import DesignIntro from '~/components/design/DesignIntro.vue'
import DesignComment from '~/components/design/DesignComment.vue'

const runtimeConfig = useRuntimeConfig()
const APIBASE = runtimeConfig.public.APIBASE
const authToken = useCookie('token')

const route = useRoute()
const designId = route.params.designID
const designInfo = ref()

const { data: design } = await useFetch(`${APIBASE}/api/getimage/imgid/${designId}`, {
  headers: { 'Content-type': 'application/json', Authorization: `Bearer ${authToken.value}` }
})

designInfo.value = design.value.Data
const artistName = ref(design.value.Data.ArtistName)
const artistId = ref(design.value.Data.ArtistID)
const designName = ref(design.value.Data.Name)
</script>
