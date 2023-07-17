<template>
  <div>
    <div class="flex flex-col overflow-hidden rounded-lg border border-[#D0D0D0]">
      <CommentItem :data="commentData" class="" />
    </div>
  </div>
</template>
<script setup>
const runtimeConfig = useRuntimeConfig()
const APIBASE = runtimeConfig.public.APIBASE
const authCookie = useCookie('data')

const artistId = authCookie.value.Id

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
