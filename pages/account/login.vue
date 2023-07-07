<template>
  <NuxtLayout name="account">
    <Identity>
      <template #title>
        <h2>登入</h2>
      </template>
    </Identity>
    <LoginItem />
  </NuxtLayout>
</template>
<script setup>
import Identity from '~/components/account/Identity.vue'
import LoginItem from '~/components/account/LoginItem.vue'
definePageMeta({
  layout: false
})
</script>
<style scoped></style>
