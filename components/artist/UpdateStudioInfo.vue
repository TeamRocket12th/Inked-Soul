<template>
  <div>
    <VForm class="flex flex-col">
      <h3>工作室資訊</h3>
      <label class="flex flex-col">
        <span>店名</span>
        <VField name="店名" class="min-h-12 rounded-lg border" />
      </label>
      <label class="flex flex-col">
        <span>營業登記號</span>
        <VField name="營業登記號" class="min-h-12 rounded-lg border" />
      </label>
      <label class="flex flex-col">
        <span>地址</span>
        <VField name="地址" class="min-h-12 rounded-lg border" />
      </label>
      <label class="flex flex-col">
        <span>電話</span>
        <VField name="電話" class="min-h-12 rounded-lg border" />
      </label>
    </VForm>
  </div>
</template>
<script setup></script>
<style scoped></style>
