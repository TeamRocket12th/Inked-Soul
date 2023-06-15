<template>
  <VForm class="flex flex-col">
    <label class="flex flex-col">
      <span>個人簡介（30字內）</span>
      <VField
        as="textarea"
        name="個人簡介"
        rules="max:30"
        placeholder="填寫您的個人簡介"
        class="textarea-bordered textarea min-h-[72px]"
      />
      <VErrorMessage name="個人簡介" class="whitespace-nowrap" />
    </label>
  </VForm>
</template>
<script setup></script>
<style scoped></style>
