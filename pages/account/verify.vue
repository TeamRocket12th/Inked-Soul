<template>
  <NuxtLayout name="account">
    <div class="flex flex-col gap-[60px] py-10">
      <h2>
        註冊成功！<br />
        繼續驗證刺青師身份
      </h2>
      <div class="flex gap-[60px]">
        <UpdateImg />
        <div class="flex flex-col gap-10">
          <VerifyItem />
          <div>
            <button type="button" class="defaultBtn mb-3">驗證身份</button>
            <div class="flex flex-row items-center gap-2 text-secondary">
              <Icon name="ic:baseline-error-outline" size="24" />
              需等待 3-5 日審核工作天
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup>
import UpdateImg from '~/components/account/UpdateImg.vue'
import VerifyItem from '~/components/account/VerifyItem.vue'
definePageMeta({
  layout: false
})
</script>
<style scoped></style>
