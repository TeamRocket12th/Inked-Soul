<template>
  <footer class="bg-black px-[60px] text-white">
    <div class="flex flex-row justify-between py-8">
      <ul class="flex flex-row items-center gap-4">
        <li>
          <NuxtLink to="/designs">認領圖</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/artists">刺青師</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/tips">知識點</NuxtLink>
        </li>
      </ul>
      <Icon name="ic:outline-email" size="24" />
    </div>
    <hr />

    <div class="flex flex-row items-center justify-between py-[60px]">
      <div class="logo">
        <NuxtLink to="/" class="text-4xl">
          <div class="flex items-center justify-center gap-3">
            <img src="/logo-white.png" alt="" class="h-6 w-6" />
            <h2 class="font-heading-typo">Inked Soul</h2>
          </div>
        </NuxtLink>
      </div>
      <NuxtLink to="/term/userterm">使用者條款</NuxtLink>
    </div>
  </footer>
</template>
