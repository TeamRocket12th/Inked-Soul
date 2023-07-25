<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { configure } from 'vee-validate'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import 'v-calendar/dist/style.css'

configure({
  generateMessage: localize({ zh_TW: zhTW })
  // validateOnInput: true // 輸入文字時，就立即進行驗證
})

setLocale('zh_TW')
</script>

<style>
.vc-disabled {
  text-decoration: line-through;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
}

.backend-enter-active,
.backend-leave-active {
  transition: opacity 0.3s;
}

.backend-enter-from,
.backend-leave-to {
  opacity: 0;
}

.backend-enter-to,
.backend-leave-from {
  opacity: 1;
}
</style>
