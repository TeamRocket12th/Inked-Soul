<template>
  <div class="flex flex-col items-center">
    <img :src="url" alt="" class="h-[100px] w-[100px] rounded-lg bg-gray-100" />
    <input type="file" accept=".jpg, .png, .svg " @change="handleOnPreview" />
    <!-- <button @click="postImg" class="m-2 rounded border p-2">post</button> -->
  </div>
</template>
<script setup>
const url = ref()
const handleOnPreview = (event) => {
  const file = event.target.files[0]
  if (file.size > 1024 * 1024 * 4) {
    // 檔案不能大於 4 MB
    return
  }

  // 兩種轉換格式 (待確認哪個可以)
  // 1)
  url.value = URL.createObjectURL(event.target.files[0])

  // 2)
  // if (file) {
  //   const reader = new FileReader()
  //   reader.readAsDataURL(file)
  //   reader.onload = () => {
  //     url.value = reader.result
  //   }
  // }
}

const postImg = () => {
  const formData = new FormData()
  formData.append('img', url.value)
  for (let [key, value] of formData.entries()) {
    // console.log(key + ',' + value)
  }
}
</script>
<style scoped></style>
