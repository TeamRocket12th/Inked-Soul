<template>
  <!-- 產品資訊 -->
  <div class="flex flex-col gap-[20px]">
    <div class="flex flex-col gap-2">
      <div class="flex flex-row items-center justify-between">
        <label for="tattooName" class="cursor-pointer">作品名稱 </label>
        <VErrorMessage name="作品名稱" class="whitespace-nowrap text-[#DC3545]" />
      </div>
      <div class="relative">
        <VField
          id="tattooName"
          v-model="uploadTattooData.picname"
          name="作品名稱"
          rules="required"
          class="formInput"
          placeholder="作品名稱"
          :class="{ 'border-[#DC3545]': props.errors.作品名稱 }"
        />
        <Icon
          v-if="props.errors.作品名稱"
          name="ic:baseline-error-outline"
          class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
        />
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <span>建議部位（最多選擇兩個部位）</span>
      <div class="dropdown-end dropdown">
        <label
          tabindex="0"
          class="btn-outline btn my-1 mb-1 h-auto w-full justify-between border-[#D0D0D0] py-2 hover:border-[#D0D0D0] hover:bg-white hover:text-black"
        >
          <div>
            <span v-if="selectBodyParts.length === 0" class="text-base font-normal text-custom">
              {{ '請選擇' }}</span
            >
            <span v-for="(part, key) in selectBodyParts" :key="key" class="mr-2">
              {{ part }}
            </span>
          </div>
          <Icon name="ic:baseline-keyboard-arrow-down" size="24" />
        </label>
        <ul
          tabindex="0"
          class="dropdown-content menu rounded-box z-10 w-full flex-nowrap overflow-scroll bg-base-100 p-2 shadow"
        >
          <li
            v-for="(part, key) in bodyParts"
            :key="key"
            class="m-1"
            @click="SelectRecommendPositions(part)"
          >
            <a :class="{ 'bg-gray-100': selectBodyParts.includes(part) }">{{ part }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <div class="flex flex-row items-center justify-between">
        <label for="studio" class="cursor-pointer">作品尺寸（cm*cm） </label>
        <VErrorMessage name="店名" class="whitespace-nowrap text-[#DC3545]" />
        <span class="whitespace-nowrap text-[#DC3545]"> {{ sizeErrorMessage }}</span>
      </div>
      <div class="relative">
        <input
          id="studio"
          v-model.lazy="tattooSize"
          type="text"
          placeholder="12cm*12cm"
          class="formInput"
          :class="{ 'border-[#DC3545]': sizeErrorMessage }"
        />
        <Icon
          v-if="sizeErrorMessage"
          name="ic:baseline-error-outline"
          class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
        />
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <div class="flex flex-row items-center justify-between">
        <label for="hour" class="cursor-pointer">預計作業時間（時）</label>
        <VErrorMessage name="預計作業時間" class="whitespace-nowrap text-[#DC3545]" />
      </div>
      <div class="relative">
        <VField
          id="hour"
          v-model="uploadTattooData.pichour"
          name="預計作業時間"
          rules="required"
          class="formInput"
          placeholder="4"
          :class="{ 'border-[#DC3545]': props.errors.預計作業時間 }"
        />
        <Icon
          v-if="props.errors.預計作業時間"
          name="ic:baseline-error-outline"
          class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useUploadTattooStore } from '~/stores/uploadTattoo'

const props = defineProps({
  errors: {
    type: null,
    required: true
  }
})

const store = useUploadTattooStore()
const { uploadTattooData, closeUpload } = storeToRefs(store)

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

// const tattooName = ref()
const selectBodyParts = ref([])
const tattooSize = ref('')
// const hour = ref()
const sizeErrorMessage = ref('')

// watch(tattooName, (_newValue, _oldValue) => {
//   uploadTattooData.value.picname = tattooName.value
// })
// watch(hour, (_newValue, _oldValue) => {
//   uploadTattooData.value.pichour = hour.value
// })

const SelectRecommendPositions = (part) => {
  const index = selectBodyParts.value.indexOf(part)
  if (index === -1 && selectBodyParts.value.length < 2) {
    selectBodyParts.value.push(part)
  } else if (index !== -1 && selectBodyParts.value.length !== 1) {
    selectBodyParts.value.splice(index, 1)
  } else if (selectBodyParts.value.length === 2) {
    selectBodyParts.value.splice(0, 1, part)
  }
  const bodypartStr = selectBodyParts.value.join(',')
  uploadTattooData.value.picbodypart = bodypartStr
}

watch(tattooSize, (newValue, _oldValue) => {
  if (/^\d+cm\*\d+cm$/.test(newValue)) {
    return
  }
  if (newValue) {
    if (/^\d+(\*|\s)\d+$/.test(newValue)) {
      const parts = newValue.split(/(\*|\s)/)
      tattooSize.value = `${parts[0]}cm*${parts[2]}cm`
      uploadTattooData.value.picsize = tattooSize.value
      sizeErrorMessage.value = ''
    } else if (/^\d+$/.test(newValue)) {
      tattooSize.value = `${newValue}cm*${newValue}cm`
      uploadTattooData.value.picsize = tattooSize.value
      sizeErrorMessage.value = ''
    } else {
      sizeErrorMessage.value = '尺寸格式不正確'
    }
  } else {
    sizeErrorMessage.value = '作品尺寸為必填'
  }
})

// 清除上一次上傳內容

// watch(
//   closeUpload,
//   (nv, ov) => {
//     console.log('closeUpload nV', nv)
//     console.log('closeUpload oV', ov)
//     console.log('closeUpload new value', closeUpload.value)
//     if (closeUpload.value === true) {
//       tattooName.value = ''
//       selectBodyParts.value = ''
//       tattooSize.value = ''
//       hour.value = ''
//     }
//   },
//   { deep: true },
//   { immediate: true }
// )
// watch(
//   () => closeUpload.value, // Wrap closeUpload in a function to track its value changes
//   (nv, ov) => {
//     console.log('closeUpload nV', nv)
//     console.log('closeUpload oV', ov)
//     console.log('closeUpload new value', closeUpload.value)
//     if (nv === true) {
//       tattooName.value = ''
//       selectBodyParts.value = ''
//       tattooSize.value = ''
//       hour.value = ''
//     }
//   },
//   { deep: true, immediate: true } // Options object should be a single argument
// )
</script>
<style scoped></style>
