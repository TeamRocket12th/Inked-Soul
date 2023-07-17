<template>
  <div class="flex flex-col overflow-hidden rounded-lg">
    <CommentItem :data="commentData" />
  </div>
</template>
<script setup>
const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const APIBASE = runtimeConfig.public.APIBASE

const artistId = route.params.artistID

const commentData = ref('')

const getComment = async () => {
  const { data: res } = await useFetch(`${APIBASE}/api/getartistallcomment`, {
    headers: { 'Content-type': 'application/json' },
    method: 'POST',
    query: {
      artistId: artistId,
      page: 1
    }
  })
  commentData.value = res.value.Data
}

onMounted(() => {
  nextTick(() => {
    getComment()
  })
})
</script>
