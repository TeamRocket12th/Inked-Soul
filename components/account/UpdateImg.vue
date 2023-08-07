<template>
  <div class="flex flex-col items-center gap-5">
    <label for="photo" class="h-[64px] w-[64px] rounded-lg bg-custom">
      <img
        v-if="previewImg"
        :src="previewImg"
        alt=""
        class="h-[64px] w-[64px] rounded-lg bg-custom object-cover object-center"
      />
    </label>

    <input
      id="photo"
      type="file"
      accept=".jpg, .png, .svg "
      class="hidden"
      @change="handleOnPreview"
    />
    <label
      for="photo"
      class="flex cursor-pointer items-center gap-2 rounded-lg border border-black px-3 py-1"
    >
      <Icon name="ic:baseline-upgrade" size="24" />
      <p>上傳大頭照</p>
    </label>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useVerify } from '~/stores/verify'

const store = useVerify()
const { verifyUserData } = storeToRefs(store)

const previewImg = ref()

const handleOnPreview = (event) => {
  const file = event.target.files[0]
  if (file.size > 1024 * 1024 * 4) {
    return
  }
  previewImg.value = URL.createObjectURL(event.target.files[0])
  verifyUserData.value.Photo = event.target.files[0]

  console.log(verifyUserData.value)
}
</script>
<style scoped></style>
