<template>
  <div>
    <div class="flex flex-col gap-20">
      <BannerItem>
        <template #default>
          <SearchBar>搜尋認領圖</SearchBar>
        </template>
      </BannerItem>
      <IntroItem />
      <ArtistArea />
      <FeatureItem />
      <GoTop />
    </div>
  </div>
</template>

<script setup>
import BannerItem from '~/components/home/BannerItem.vue'
import IntroItem from '~/components/home/IntroItem.vue'
import ArtistArea from '~/container/home/ArtistArea.vue'
import FeatureItem from '~/components/home/FeatureItem.vue'

const { meta } = useMeta()
useHead({
  title: meta.index.title, // 會蓋掉nuxt.config的設定
  meta: [{ name: 'description', content: meta.index.description }]
})
</script>
