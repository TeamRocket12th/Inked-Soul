<template>
  <NuxtLayout name="account">
    <div class="flex flex-col gap-5">
      <h2>
        註冊成功！<br />
        繼續驗證刺青師身份
      </h2>
      <UpdateImg />
      <VerifyItem />
      <UpdateTime />
      <button type="button" class="btn-neutral btn w-full bg-black text-white">驗證身份</button>
      <div class="flex flex-row items-center gap-2">
        <Icon name="ic:baseline-error-outline" />
        需等待 3-5 日審核工作天
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup>
import UpdateImg from '~/components/account/UpdateImg.vue'
import VerifyItem from '~/components/account/VerifyItem.vue'
import UpdateTime from '~/components/artist/UpdateTime.vue'
definePageMeta({
  layout: false
})
</script>
<style scoped></style>
