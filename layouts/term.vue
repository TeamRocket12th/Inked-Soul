<template>
  <div class="container grid grid-cols-12 gap-8">
    <div class="col-span-3 flex flex-col gap-8">
      <h2>使用者條款</h2>
      <div class="rounded-lg border bg-white">
        <slot name="navbar">
          <!-- <NavbarItem /> -->
        </slot>
      </div>
    </div>
    <div class="col-span-9 self-start rounded-lg border bg-white p-10">
      <NuxtPage />
    </div>
  </div>
</template>
<script setup></script>
<style scoped></style>
