<template>
  <div @click.capture="stretchHide()">
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
import { storeToRefs } from 'pinia'
import { useOrderStore } from '~/stores/order'
const store = useOrderStore()
const { stretch } = storeToRefs(store)
const { stretchHide } = store

configure({
  generateMessage: localize({ zh_TW: zhTW })
  // validateOnInput: true // 輸入文字時，就立即進行驗證
})

setLocale('zh_TW')
</script>
