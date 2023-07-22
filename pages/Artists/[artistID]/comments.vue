<template>
  <div class="overflow-hidden rounded-lg">
    <ul class="flex flex-col">
      <CommentItem v-for="(data, key) in commentData" :key="key" :data="data" />
    </ul>
    <div v-if="allCommentNum">
      <PaginationBtn :num="allCommentNum" state="front" />
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useGetImageStore } from '~/stores/getImage'
const store = useGetImageStore()
const { getComment } = store
const { commentData, allCommentNum } = storeToRefs(store)

const route = useRoute()
const artistId = route.params.artistID

onMounted(() => {
  getComment(artistId, 1)
})
</script>
