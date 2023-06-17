<template>
  <!-- 產品資訊 -->
  <VForm class="flex flex-col gap-[20px]">
    <label class="flex flex-col items-start">
      <span>作品名稱</span>
      <VField
        v-model="uploadTattoo.tatoo_name"
        name="作品名稱"
        rules="required"
        class="formInput"
        placeholder="作品名稱"
      />
      <VErrorMessage name="作品名稱" class="whitespace-nowrap" />
    </label>

    <div class="flex flex-col">
      <span>建議部位（最多選擇兩個部位）</span>
      <div class="dropdown-end dropdown">
        <label tabindex="0" class="btn my-1 mb-1 h-auto w-full py-2">
          <span v-for="(part, key) in selectBodyParts" :key="key">
            {{ part }}
          </span>
        </label>
        <ul
          tabindex="0"
          class="dropdown-content menu rounded-box z-10 w-full flex-nowrap overflow-scroll bg-base-100 p-2 shadow"
        >
          <li
            v-for="(part, key) in bodyParts"
            :key="key"
            @click="SelectRecommendPositions(part)"
            class="m-1"
          >
            <a :class="{ 'bg-gray-100': uploadTattoo.recommend_position.includes(part) }">{{
              part
            }}</a>
          </li>
        </ul>
      </div>
    </div>
    <label class="flex flex-col items-start">
      <span>作品尺寸（cm*cm）</span>
      <VField
        v-model="uploadTattoo.tattoo_size.height"
        name="作品尺寸"
        rules="required"
        class="formInput"
        placeholder="12cm*12cm"
      />
      <VErrorMessage name="作品尺寸" class="whitespace-nowrap" />
    </label>
    <label class="flex flex-col items-start">
      <span>預計作業時間（時）</span>
      <VField
        v-model="uploadTattoo.hour"
        name="預計作業時間"
        rules="required"
        class="formInput"
        placeholder="4小時"
      />
      <VErrorMessage name="預計作業時間" class="whitespace-nowrap" />
    </label>
  </VForm>
</template>
<script setup>
import { useUploadTattooStore } from '~/stores/uploadTattoo'
import { storeToRefs } from 'pinia'

const store = useUploadTattooStore()
const { uploadTattoo } = storeToRefs(store)

const bodyParts = [
  '全身',
  '頭部',
  '肩膀',
  '頸部',
  '鎖骨',
  '腹部',
  '背部',
  '腰部',
  '臀部',
  '手部',
  '腿部'
]
const selectBodyParts = ref([bodyParts[0]])

const SelectRecommendPositions = (part) => {
  const index = selectBodyParts.value.indexOf(part)
  if (index === -1 && selectBodyParts.value.length < 2) {
    selectBodyParts.value.push(part)
  } else if (index !== -1 && selectBodyParts.value.length !== 1) {
    selectBodyParts.value.splice(index, 1)
  } else if (selectBodyParts.value.length === 2) {
    selectBodyParts.value.splice(0, 1, part)
  }

  uploadTattoo.value.recommend_position = selectBodyParts.value
}
</script>
<style scoped></style>
