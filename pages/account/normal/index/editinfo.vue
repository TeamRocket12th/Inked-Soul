<template>
  <div class="">
    <div class="mb-10 w-full rounded-lg border-[1px] border-black p-5">
      <h2>個人資料</h2>
      <VForm class="mb-4">
        <label class="mb-4 flex flex-col">
          <span>名稱</span>
          <VField v-model="name" name="真實姓名" class="min-h-12 block w-full rounded-lg border" />
        </label>
        <label class="mb-4 flex flex-col">
          <span>手機</span>
          <VField v-model="tel" name="手機" class="min-h-12 rounded-lg border" />
        </label>

        <label class="flex flex-col">
          <span>電子信箱</span>
          <VField v-model="email" name="電子信箱" class="min-h-12 rounded-lg border" disabled />
        </label>
      </VForm>
      <button type="button" class="btn w-full bg-black text-white" @click="editInfo">
        更新個人資料
      </button>
    </div>
    <div class="w-full rounded-lg border-[1px] border-black p-5">
      <h2>更改密碼</h2>
      <VForm class="mb-4">
        <label class="mb-4 flex flex-col">
          <span>新密碼</span>
          <VField name="密碼" type="password" class="min-h-12 rounded-lg border" disabled />
        </label>
        <label class="mb-4 flex flex-col">
          <span>確認新密碼</span>
          <VField name="密碼" type="password" class="min-h-12 rounded-lg border" disabled />
        </label>
      </VForm>
      <button type="button" class="btn w-full bg-black text-white" @click="editInfo">
        更改密碼
      </button>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useAccountStore } from '~/stores/account'
const store = useAccountStore()
const { email, password, tel, name } = storeToRefs(store)
const { editInfo } = store
</script>
<style scoped></style>
