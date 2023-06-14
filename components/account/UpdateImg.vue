<template>
  <div>
    <img :src="url" alt="" class="h-[150px] w-[100px] bg-gray-100" />
    <input type="file" accept=".jpg, .png, .svg " @change="handleOnPreview" />
  </div>
</template>
<script setup>
const url = ref()
const handleOnPreview = (event) => {
  url.value = URL.createObjectURL(event.target.files[0])
}
</script>
<style scoped></style>
