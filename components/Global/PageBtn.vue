<template>
  <div class="mt-10 flex w-full items-center justify-center gap-3">
    <button
      v-for="(item, index) in props.totalPage"
      :key="index"
      class="min-w-[30px] rounded-lg px-[10px]"
      :class="{ 'bg-black text-white': props.currentPage === item }"
      @click="toPage(item)"
    >
      {{ item }}
    </button>
    <Icon name="ic:baseline-keyboard-arrow-right" size="24" @click="nextPage()" />
  </div>
</template>
<script setup>
const emits = defineEmits(['updateCurrentPage'])
const props = defineProps({
  totalPage: {
    type: null,
    required: true
  },
  currentPage: {
    type: null,
    required: true
  }
})

const page = ref(props.currentPage)
const toPage = (index) => {
  page.value = index
  emits('updateCurrentPage', page.value)
}

const nextPage = () => {
  toPage(page.value + 1)
}
</script>
<style scoped></style>

<!-- 分頁 -->
<!-- <PageBtn
      :current-page="emitNewPage"
      :total-page="totalPage"
      @update-current-page="getEmitPage"
    /> -->

<!-- const emitNewPage = ref(1)
const getEmitPage = (newPage) => {
  emitNewPage.value = newPage
} -->
