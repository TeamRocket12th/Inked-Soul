<template>
  <div class="mx-auto w-[30%] text-center">
    <Identity>
      <template #title>
        <h2>註冊帳戶</h2>
      </template>
    </Identity>
    <LoginItem>
      <template #confirm-passward>
        <ConfirmPassword />
      </template>
    </LoginItem>
  </div>
</template>
<script setup>
import Identity from '~/components/account/Identity.vue'
import LoginItem from '~/components/account/LoginItem.vue'
import ConfirmPassword from '~/components/account/ConfirmPassword.vue'
</script>
<style scoped></style>
