<template>
  <div>
    <nav class="flex justify-between items-center p-4">
      <div class="logo">
        <NuxtLink to="/" class="text-4xl">Inked Soul</NuxtLink>
      </div>
      <ul class="flex gap-4">
        <li>
          <NuxtLink>認領圖</NuxtLink>
        </li>
        <li>
          <NuxtLink>刺青師</NuxtLink>
        </li>
        <li>
          <NuxtLink>知識點</NuxtLink>
        </li>
        <li></li>
      </ul>
    </nav>
    <div class="">
      <slot></slot>
    </div>
    <footer class="flex justify-between items-center p-4">
      <div class="logo">
        <NuxtLink to="/" class="text-4xl">Inked Soul</NuxtLink>
      </div>
      <ul class="flex gap-4">
        <li>
          <NuxtLink>認領圖</NuxtLink>
        </li>
        <li>
          <NuxtLink>刺青師</NuxtLink>
        </li>
        <li>
          <NuxtLink>知識點</NuxtLink>
        </li>
        <li>
          <NuxtLink>使用者條款</NuxtLink>
        </li>
        <li>
          <NuxtLink>隱私條款</NuxtLink>
        </li>
        <li>
          <NuxtLink>申訴流程</NuxtLink>
        </li>
        <li>
          <NuxtLink>客服信箱</NuxtLink>
        </li>
      </ul>
    </footer>
  </div>
</template>
