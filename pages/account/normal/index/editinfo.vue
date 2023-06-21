<template>
  <div class="flex flex-col gap-20">
    <VForm class="grid grid-cols-2 gap-[36px]">
      <label class="flex flex-col">
        <span>名稱</span>
        <VField name="真實姓名" class="min-h-12 rounded-lg border" v-model="name"/>
      </label>
      <label class="flex flex-col">
        <span>手機</span>
        <VField name="手機" class="min-h-12 rounded-lg border" v-model="tel" />
      </label>

      <label class="flex flex-col">
        <span>電子信箱</span>
        <VField name="電子信箱" class="min-h-12 rounded-lg border" v-model="email" />
      </label>
      <label class="flex flex-col">
        <span>密碼</span>
        <VField name="密碼" type="password" class="min-h-12 rounded-lg border" />
      </label>
    </VForm>
    <button type="button" class="btn w-full" @click="editInfo">更新個人資料</button>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useAccountStore } from '~/stores/account'
const store = useAccountStore()
const { email, password,tel,name } = storeToRefs(store)
const { editInfo } = store
</script>
<style scoped></style>
