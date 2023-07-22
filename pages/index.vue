<template>
  <div class="flex flex-col gap-20">
    <BannerItem>
      <template #default>
        <SearchBar>搜尋認領圖</SearchBar>
      </template>
    </BannerItem>
    <IntroItem />
    <ArtistArea />
    <FeatureItem />
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
  viewport: meta.commonSettings.viewport, //不會蓋掉nuxt.config的設定
  meta: [{ name: meta.index.name, content: meta.index.content }],
  link: meta.index.link
})
//   viewport: meta.commentSettings.viewport,
</script>
