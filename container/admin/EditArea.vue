<template>
  <div>
    <VForm v-slot="{ errors, meta }">
      <div class="mb-6 grid grid-cols-2 gap-[36px]">
        <div class="flex flex-col gap-5">
          <UpdatePersonalInfo :errors="errors" />
          <UpdatePersonalBrief :errors="errors" />
          <UpdateStyle />
        </div>
        <div class="flex flex-col gap-5">
          <UpdateStudioInfo :errors="errors" />
          <UpdateTime :errors="errors" />
        </div>
      </div>
      <button
        type="button"
        @click="editArtistInfo"
        :disabled="!meta.valid"
        class="btn-neutral btn mb-20 w-full bg-black text-white"
      >
        更新個人資料
      </button>
    </VForm>

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

import { useAccountStore } from '~/stores/account'

const store = useAccountStore()
const { editArtistInfo } = store
</script>
<style scoped></style>
