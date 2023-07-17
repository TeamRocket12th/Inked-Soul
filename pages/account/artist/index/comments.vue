<template>
  <div>
    <div class="overflow-hidden rounded-lg border border-[#D0D0D0]">
      <ul class="flex flex-col">
        <CommentItem v-for="(data, key) in commentData" :key="key" :data="data" />
      </ul>
    </div>
    <PageBtn
      :current-page="emitNewPage"
      :total-page="totalPage"
      @update-current-page="getEmitPage"
    />
  </div>
</template>
<script setup>
const runtimeConfig = useRuntimeConfig()
const APIBASE = runtimeConfig.public.APIBASE
const authCookie = useCookie('data')

const artistId = authCookie.value.Id

const commentData = ref('')
const emitNewPage = ref(1)
const getEmitPage = (newPage) => {
  emitNewPage.value = newPage
}

const getComment = async () => {
  const { data: res } = await useFetch(`${APIBASE}/api/getartistallcomment`, {
    headers: { 'Content-type': 'application/json' },
    method: 'POST',
    query: {
      artistId,
      page: emitNewPage.value
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
