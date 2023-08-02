<template>
  <div class="flex flex-col gap-5">
    <h4>更改密碼</h4>
    <VForm v-slot="{ errors, meta }" class="flex flex-col gap-5">
      <div class="relative flex flex-col gap-2">
        <div class="flex flex-row items-center justify-between">
          <label for="newPassword" class="cursor-pointer">新密碼</label>
          <VErrorMessage name="新密碼" class="whitespace-nowrap text-[#DC3545]" />
        </div>
        <div class="relative">
          <VField
            id="newPassword"
            v-model="newPassword"
            name="新密碼"
            :rules="isPassword"
            class="formInput"
            :class="{ 'border-[#DC3545]': errors.新密碼 }"
          />
          <Icon
            v-if="errors.新密碼"
            name="ic:baseline-error-outline"
            class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
          />
        </div>
      </div>
      <div class="relative flex flex-col gap-2">
        <div class="flex flex-row items-center justify-between">
          <label for="newPassword" class="cursor-pointer">確認新密碼</label>
          <VErrorMessage name="確認新密碼" class="whitespace-nowrap text-[#DC3545]" />
        </div>
        <div class="relative">
          <VField
            id="newPassword"
            v-model="confirmNewPassword"
            name="確認新密碼"
            rules="confirmed:@新密碼"
            class="formInput"
            :class="{ 'border-[#DC3545]': errors.確認新密碼 }"
          />
          <Icon
            v-if="errors.確認新密碼"
            name="ic:baseline-error-outline"
            class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
          />
        </div>
      </div>
      <button :disabled="!meta.valid" class="btn-basic btn-wide">更改密碼</button>
    </VForm>
  </div>
</template>
<script setup>
const { isPassword } = useValidate()

const newPassword = ref('')
const confirmNewPassword = ref('')
</script>
<style scoped></style>
