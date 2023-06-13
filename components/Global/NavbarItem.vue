<template>
  <nav class="flex items-center justify-between p-4">
    <h1 class="logo">
      <NuxtLink to="/" class="text-4xl">Inked Soul</NuxtLink>
    </h1>
    <ul class="flex gap-4">
      <li>
        <NuxtLink to="/designs">認領圖</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/artists">刺青師</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/tips">知識點</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/account/login"> <Icon name="mdi:account" /></NuxtLink>
      </li>
    </ul>
  </nav>
</template>
