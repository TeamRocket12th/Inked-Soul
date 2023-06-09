<template>
  <div class="mx-auto w-[30%] text-center">
    <Identity>
      <template #LoginTitle>
        <h2>登入帳戶</h2>
      </template>
    </Identity>
    <LoginItem />
  </div>
</template>
<script setup>
import Identity from '/components/account/Identity.vue'
import LoginItem from '/components/account/LoginItem.vue'
</script>
<style scoped></style>
