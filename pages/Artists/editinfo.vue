<template>
  <div class="mx-[184px] mb-[115px] mt-[85px] grid grid-cols-12 gap-8">
    <div class="col-span-4 flex flex-col gap-[43px]">
      <BackEndHeadImg />
      <BackEndNavbar />
    </div>
    <div class="col-span-8 rounded border px-10 pb-[112px] pt-[60px]">
      {{ currentTab }}
      <EditSelfArea />
      <BackEndMemberShip />
      <component :is="currentTab"></component>
    </div>
  </div>
</template>
<script setup>
import BackEndHeadImg from '~/components/artist/BackEndHeadImg.vue'
import BackEndNavbar from '~/components/artist/BackEndNavbar.vue'
import EditSelfArea from '~/container/artists/EditSelfArea.vue'
import BackEndMemberShip from '~/components/artist/BackEndMemberShip.vue'

import { useArtistNavbarStore } from '~/stores/artistNavbar'
import { storeToRefs } from 'pinia'

const store = useArtistNavbarStore()
const { currentTab } = storeToRefs(store)
// console.log(typeof currentTab.value)
// watch(currentTab, () => {
//   console.log(currentTab.value)
// })
</script>
<style scoped></style>
