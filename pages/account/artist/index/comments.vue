<template>
  <div>
    <div class="overflow-hidden rounded-lg border border-[#D0D0D0]">
      <ul class="flex flex-col">
        <CommentItem v-for="(data, key) in commentData" :key="key" :data="data" />
      </ul>
    </div>
    <!-- <PageBtn
      :current-page="emitNewPage"
      :total-page="totalPage"
      @update-current-page="getEmitPage"
    /> -->
    <div v-if="commentNum">
      <PaginationBtn :num="commentNum" state="back" />
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useOrderStore } from '~/stores/order'
const store = useOrderStore()
const { getComment } = store
const { commentNum, commentData } = storeToRefs(store)

const cookie = useCookie('data')
const artistID = cookie.value.Id

const emitNewPage = ref(1)
const getEmitPage = (newPage) => {
  emitNewPage.value = newPage
}

onMounted(() => {
  nextTick(() => {
    getComment(artistID, 1)
  })
})
</script>
