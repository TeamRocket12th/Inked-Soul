<template>
  <div class="mx-[184px] mb-[115px] mt-[85px] grid grid-cols-12 gap-8">
    <div class="col-span-4 flex flex-col gap-[43px]">
      <BackEndHeadImg />
      <BackEndNavbar />
    </div>
    <div class="col-span-8 rounded border px-10 pb-[112px] pt-[60px]">
      <EditSelfArea />
      <button type="button" class="btn my-5 w-full">更新個人資料</button>
      <UpdateImg />
    </div>
  </div>
</template>
<script setup>
import BackEndHeadImg from '~/components/artist/BackEndHeadImg.vue'
import BackEndNavbar from '~/components/artist/BackEndNavbar.vue'
import EditSelfArea from '~/container/artists/EditSelfArea.vue'
import UpdateImg from '~/components/account/UpdateImg.vue'
</script>
<style scoped></style>
