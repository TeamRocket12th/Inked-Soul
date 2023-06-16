<template>
  <div>
    <h3>個人資料</h3>
    <VForm class="flex flex-col">
      <label class="flex flex-col">
        <span>真實姓名</span>
        <VField name="真實姓名" class="min-h-12 rounded-lg border" />
      </label>
      <label class="flex flex-col">
        <span>名稱</span>
        <VField name="名稱" class="min-h-12 rounded-lg border" />
      </label>
      <label class="flex flex-col">
        <span>手機</span>
        <VField name="手機" class="min-h-12 rounded-lg border" />
      </label>
      <label class="flex flex-col">
        <span>電子信箱</span>
        <VField name="電子信箱" class="min-h-12 rounded-lg border" />
      </label>
      <label class="flex flex-col">
        <span>密碼</span>
        <VField name="密碼" type="password" class="min-h-12 rounded-lg border" />
      </label>
    </VForm>
  </div>
</template>
<script setup></script>
<style scoped></style>
