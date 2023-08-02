<template>
  <div>
    <VForm v-slot="{ errors, meta }">
      <div class="mb-6 grid grid-cols-2 gap-[36px]">
        <div class="flex flex-col gap-5">
          <!-- 個人資料 -->
          <UpdatePersonalInfo :errors="errors" />
          <!-- 個人簡介 -->
          <UpdatePersonalBrief :errors="errors" />
          <!-- 風格 -->
          <UpdateStyle />
        </div>
        <div class="flex flex-col gap-5">
          <!-- 工作室資料 -->
          <UpdateStudioInfo :errors="errors" />
          <!-- 工休日 -->
          <UpdateTime :errors="errors" />
        </div>
      </div>
      <button
        type="button"
        :disabled="!meta.valid"
        class="btn-basic btn-wide mb-20"
        @click.prevent="editArtistInfo"
      >
        更新資訊
      </button>
    </VForm>

    <UpdatePassword />
  </div>
</template>
<script setup>
import { useAccountStore } from '~/stores/account'
import UpdatePersonalInfo from '~/components/admin/UpdatePersonalInfo.vue'
import UpdateStudioInfo from '~/components/admin/UpdateStudioInfo.vue'
import UpdateTime from '~/components/admin/UpdateTime.vue'
import UpdatePassword from '~/components/admin/UpdatePassword.vue'
import UpdatePersonalBrief from '~/components/admin/UpdatePersonalBrief.vue'
import UpdateStyle from '~/components/admin/UpdateStyle.vue'

const store = useAccountStore()
const { editArtistInfo } = store
</script>
<style scoped></style>
