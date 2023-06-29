<template>
  <div class="flex flex-col">
    <CommentItem :artist-id="cookie.data.ID" />
  </div>
</template>
<script setup>
// import CommentItem from '~/components/global/CommentItem.vue'
const cookie = useCookie('token')
</script>
<style scoped></style>
