<template>
  <div class="flex flex-col">
    <CommentItem :artistId="id" />
  </div>
</template>
<script setup>
const route = useRoute()
const id = route.params.id
</script>
