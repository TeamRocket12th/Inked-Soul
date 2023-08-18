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

const { meta } = useMeta()
useHead({
  title: meta.login.title,
  meta: [{ name: 'description', content: meta.login.description }]
})
</script>
<style scoped></style>
