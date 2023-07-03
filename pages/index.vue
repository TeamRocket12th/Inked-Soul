<template>
  <div class="flex flex-col gap-20">
    <BannerItem>
      <template #default>
        <SearchBar />
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
</script>
