<template>
  <div>
    <slot name="title"></slot>
    <div class="flex flex-row justify-between">
      <label for="client">
        <input type="radio" name="client" v-model="identity" value="client" />
        <span>一般身份</span>
      </label>
      <label for="artist">
        <input type="radio" name="artist" v-model="identity" value="artist" />
        <span>刺青師身份</span>
      </label>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useAccountStore } from '~/stores/account'

const store = useAccountStore()
const { identity } = storeToRefs(store)
</script>
<style scoped></style>
