<template>
  <div>
    <div class="mb-6 grid grid-cols-2" style="gap: 36px">
      <div class="flex flex-col gap-5">
        <UpdatePersonalInfo />
        <UpdatePersonalBrief />
        <UpdateStyle />
      </div>
      <div class="flex flex-col gap-5">
        <UpdateStudioInfo />
        <UpdateTime />
      </div>
    </div>
    <button type="button" class="btn w-full">更新個人資料</button>
  </div>
</template>
<script setup>
import UpdatePersonalInfo from '~/components/artist/UpdatePersonalInfo.vue'
import UpdateStudioInfo from '~/components/artist/UpdateStudioInfo.vue'
import UpdateTime from '~/components/artist/UpdateTime.vue'
import UpdatePersonalBrief from '~/components/artist/UpdatePersonalBrief.vue'
import UpdateStyle from '~/components/artist/UpdateStyle.vue'
</script>
<style scoped></style>
