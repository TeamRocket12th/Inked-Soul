<template>
  <div>
    <p class="mb-2">
      <slot> 個人風格（選擇最多二個關鍵字來描述你的刺青風格） </slot>
    </p>
    <ul class="flex flex-wrap gap-2">
      <li v-for="(style, key) in styles" :key="key">
        <button
          ref="styleBtn"
          type="button"
          :class="{ 'bg-black text-white': uploadTattooData.picstyle.includes(style) }"
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
import { useAccountStore } from '~/stores/account'

const editStore = useAccountStore()
const { artistInfoData, inputArtistInfoData } = storeToRefs(editStore)

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
// const personalStyle = ref(artistInfoData.value.Style ? artistInfoData.value.Style.split(',') : [])

const styleToggle = (addStyle) => {
  const index = uploadTattooData.value.picstyle.indexOf(addStyle)
  if (index === -1 && uploadTattooData.value.picstyle.length < 2) {
    uploadTattooData.value.picstyle.push(addStyle)
  } else if (index !== -1) {
    uploadTattooData.value.picstyle.splice(index, 1)
  } else if (uploadTattooData.value.picstyle.length === 2) {
    uploadTattooData.value.picstyle.splice(0, 1, addStyle)
  }

  // 上傳刺青風格
  const result = uploadTattooData.value.picstyle.join()
  // 編輯個人風格
  inputArtistInfoData.value.Style = result
}

onMounted(() => {
  uploadTattooData.value.picstyle = artistInfoData.value.Style
    ? artistInfoData.value.Style.split(',')
    : []
})
</script>
<style scoped></style>
