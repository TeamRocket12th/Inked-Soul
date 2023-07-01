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
import UpdatePersonalInfo from '~/components/admin/UpdatePersonalInfo.vue'
import UpdateStudioInfo from '~/components/admin/UpdateStudioInfo.vue'
import UpdateTime from '~/components/admin/UpdateTime.vue'
import UpdatePersonalBrief from '~/components/admin/UpdatePersonalBrief.vue'
import UpdateStyle from '~/components/admin/UpdateStyle.vue'
</script>
<style scoped></style>
