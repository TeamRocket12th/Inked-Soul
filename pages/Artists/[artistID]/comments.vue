<template>
  <div class="flex flex-col">
    <CommentItem :artistId="artistId" />
  </div>
</template>
<script setup>
const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const APIBASE = runtimeConfig.public.APIBASE

const artistId = route.params.artistId

const getComment = async () => {
  const { data } = await useFetch(`${APIBASE}/api/artistbookingpay`, {
    headers: { 'Content-type': 'application/json' },
    method: 'POST',
    body: {
      artistId: artistId,
      page: 1
    }
  })
  console.log(data)
}

onMounted(() => {
  nextTick(() => {
    getComment()
  })
})
</script>
