<template>
  <NuxtLayout name="account">
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
  </NuxtLayout>
</template>
<script setup>
import Identity from '~/components/account/Identity.vue'
import LoginItem from '~/components/account/LoginItem.vue'
import ConfirmPassword from '~/components/account/ConfirmPassword.vue'
definePageMeta({
  layout: false
})
</script>
<style scoped></style>
