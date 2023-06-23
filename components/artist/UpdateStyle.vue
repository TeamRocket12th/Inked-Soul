<template>
  <label>
    <span>
      <slot> 個人風格（選擇最多二個關鍵字來描述你的刺青風格） </slot>
    </span>
    <ul class="flex flex-wrap gap-2">
      <li v-for="(style, key) in styles" :key="key">
        <button
          @click="styleToggle(style)"
          ref="styleBtn"
          type="button"
          :class="{ 'bg-gray-200': personalStyle.includes(style) }"
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

const styles = [
  'Black and Grey 黑灰派',
  'Watercolor 水彩風',
  'Fine Line 單針',
  'Dotwork 點陣',
  'Old School 老派風',
  'Realism 寫實主義',
  'New School 新經典',
  'Blackwork 極黑風格',
  'Geometric 幾何',
  'New Traditional 新傳統',
  'Classic American 經典美式',
  'Traditional Japanese 日式傳統',
  '其他'
]
const personalStyle = ref([])

const styleToggle = (addStyle) => {
  const index = personalStyle.value.indexOf(addStyle)
  if (index === -1 && personalStyle.value.length < 2) {
    personalStyle.value.push(addStyle)
  } else if (index !== -1) {
    personalStyle.value.splice(index, 1)
  } else if (personalStyle.value.length === 2) {
    personalStyle.value.splice(0, 1, addStyle)
  }

  uploadTattooData.value.Style = personalStyle.value
}
</script>
<style scoped></style>
