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
    <button type="button" class="btn-neutral btn mb-20 w-full bg-black text-white">
      更新個人資料
    </button>
    <UpdatePassword />
  </div>
</template>
<script setup>
import UpdatePersonalInfo from '~/components/admin/UpdatePersonalInfo.vue'
import UpdateStudioInfo from '~/components/admin/UpdateStudioInfo.vue'
import UpdateTime from '~/components/admin/UpdateTime.vue'
import UpdatePassword from '~/components/admin/UpdatePassword.vue'
import UpdatePersonalBrief from '~/components/admin/UpdatePersonalBrief.vue'
import UpdateStyle from '~/components/admin/UpdateStyle.vue'
</script>
<style scoped></style>
