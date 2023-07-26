<template>
  <div>
    <p class="mb-2">元素（最多選擇兩項）</p>
    <ul class="flex flex-wrap gap-2">
      <li v-for="(style, key) in elements" :key="key">
        <button
          ref="styleBtn"
          type="button"
          :class="{ 'bg-black text-white': uploadTattooData.picelement.includes(style) }"
          class="whitespace-nowrap rounded-full border px-3 py-1"
          @click="styleToggle(style)"
        >
          {{ style }}
        </button>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useUploadTattooStore } from '~/stores/uploadTattoo'

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
// const tattooElement = ref([])

const styleToggle = (addStyle) => {
  const index = uploadTattooData.value.picelement.indexOf(addStyle)
  if (index === -1 && uploadTattooData.value.picelement.length < 2) {
    uploadTattooData.value.picelement.push(addStyle)
  } else if (index !== -1) {
    uploadTattooData.value.picelement.splice(index, 1)
  } else if (uploadTattooData.value.picelement.length === 2) {
    uploadTattooData.value.picelement.splice(0, 1, addStyle)
  }
  uploadTattooData.value.picelement.join()
  // uploadTattooData.value.picelement = elementStr
}
</script>
<style scoped></style>
