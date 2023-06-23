<template>
  <label>
    <span>元素（最多選擇兩項）</span>
    <ul class="flex flex-wrap gap-2">
      <li v-for="(style, key) in elements" :key="key">
        <button
          @click="styleToggle(style)"
          ref="styleBtn"
          type="button"
          :class="{ 'bg-gray-200': tattooElement.includes(style) }"
          class="whitespace-nowrap rounded-lg border px-3 py-[6px]"
        >
          {{ style }}
        </button>
      </li>
    </ul>
  </label>
</template>
<script setup>
import { useUploadTattooStore } from '~/stores/uploadTattoo'
import { storeToRefs } from 'pinia'

const store = useUploadTattooStore()
const { uploadTattooData } = storeToRefs(store)

const elements = [
  '動物',
  '植物',
  '人物',
  '機械',
  '自然界',
  '卡通',
  '宗教',
  '文字',
  '器官',
  '地圖',
  '靈魂',
  '其他'
]

// 要傳給 API 的值（需要轉換格式）
const tattooElement = ref([])

const styleToggle = (addStyle) => {
  const index = tattooElement.value.indexOf(addStyle)
  if (index === -1 && tattooElement.value.length < 2) {
    tattooElement.value.push(addStyle)
  } else if (index !== -1) {
    tattooElement.value.splice(index, 1)
  } else if (tattooElement.value.length === 2) {
    tattooElement.value.splice(0, 1, addStyle)
  }
  uploadTattooData.value.Element = tattooElement.value
}
</script>
<style scoped></style>
