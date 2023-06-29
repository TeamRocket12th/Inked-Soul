<template>
  <div class="flex flex-col">
    <CommentItem :artistId="id" />
  </div>
</template>
<script setup>
// import CommentItem from '~/components/global/CommentItem.vue'
const route = useRoute()
const id = route.params.id
</script>
