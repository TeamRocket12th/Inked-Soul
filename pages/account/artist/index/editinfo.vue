<template>
  <EditArea />
</template>
<script setup>
import EditArea from '~/container/admin/EditArea.vue'
import { useAccountStore } from '~/stores/account'

const store = useAccountStore()
const { getArtistInfo } = store

onMounted(() => {
  nextTick(() => {
    getArtistInfo()
  })
})
</script>
<style scoped></style>
