<template>
  <div class="flex flex-col gap-20">
    <BannerItem>
      <template #default>
        <SearchBar />
      </template>
    </BannerItem>
    <IntroItem />
    <ArtistArea />
    <!-- <DesignArea /> -->
    <FeatureItem />
  </div>
</template>

<script setup>
import BannerItem from '~/components/home/BannerItem.vue'
import IntroItem from '~/components/home/IntroItem.vue'
import ArtistArea from '~/container/home/ArtistArea.vue'
import SearchBar from '~/components/Global/SearchBar.vue'
// import FeatureItem from '~/components/global/FeatureItem.vue'
// import DesignArea from '~/container/home/DesignArea.vue'
</script>
