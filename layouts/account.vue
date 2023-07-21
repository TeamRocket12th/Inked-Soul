<template>
  <div class="grid h-screen grid-cols-2">
    <div class="relative">
      <img src="/account-left.jpg" alt="" class="h-screen object-cover" />
      <NuxtLink to="/" class="absolute left-0 right-0 top-[50%] -translate-y-[50%] text-center"
        ><div class="flex items-center justify-center gap-3">
          <h1>Logo</h1>
          <h2 class="font-heading-typo">Inked Soul</h2>
        </div>
      </NuxtLink>
    </div>

    <div class="flex flex-col items-center justify-center text-center">
      <div class="flex w-[70%] flex-col gap-10 rounded-lg border border-black p-10">
        <slot>
          <div>登入｜註冊｜忘記密碼｜重設密碼</div>
        </slot>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped></style>
