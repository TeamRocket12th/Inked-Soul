<template>
  <div class="flex flex-col gap-2">
    <div class="flex flex-row items-center justify-between">
      <label for="designIdea" class="cursor-pointer">設計理念（30字內）</label>
      <VErrorMessage name="設計理念" class="whitespace-nowrap text-[#DC3545]" />
    </div>
    <div class="relative">
      <VField
        id="designIdea"
        v-model="uploadTattooData.picidea"
        as="textarea"
        name="設計理念"
        rules="max:30"
        placeholder="填寫您的設計理念"
        class="textarea-bordered textarea min-h-[100px] w-full"
        :class="{ 'border-[#DC3545]': props.errors.設計理念 }"
      />
      <Icon
        v-if="props.errors.設計理念"
        name="ic:baseline-error-outline"
        class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
      />
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useUploadTattooStore } from '~/stores/uploadTattoo'

const store = useUploadTattooStore()
const { uploadTattooData } = storeToRefs(store)

const props = defineProps({
  errors: {
    type: null,
    required: true
  }
})
</script>
<style scoped></style>
