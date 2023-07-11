<template>
  <div class="flex flex-col items-center">
    <img
      :src="previewUrl"
      alt=""
      class="h-[100px] w-[100px] rounded-lg bg-gray-100 object-cover object-center"
    />
    <input type="file" accept=".jpg, .png, .svg " @change="handleOnPreview" />
    <button @click="postImg" class="m-2 rounded border p-2">post</button>
  </div>
</template>
<script setup>
import { useAccountStore } from '~/stores/account'
import { storeToRefs } from 'pinia'

const runtimeConfig = useRuntimeConfig()
const APIBASE = runtimeConfig.public.APIBASE

const store = useAccountStore()
const { photo } = storeToRefs(store)
const { getUserInfo, getArtistInfo } = store

const authToken = useCookie('token')

const previewUrl = ref()
const userImage = ref()

const handleOnPreview = (event) => {
  const file = event.target.files[0]
  if (file.size > 1024 * 1024 * 4) {
    return
  }
  previewUrl.value = URL.createObjectURL(event.target.files[0])
  userImage.value = event.target.files[0]
}

const postImg = async () => {
  const formData = new FormData()
  formData.append('file', userImage.value)
  try {
    const { data, error } = useFetch(`${APIBASE}/api/uploaduserprofile`, {
      headers: {
        Authorization: `Bearer ${authToken.value}`
      },
      method: 'POST',
      body: formData
    })

    if (error.value) {
      console.log('err', error.value)
    } else {
      console.log('data', data.value)

      await getUserInfo()
      previewUrl.value = photo.value
    }
  } catch (error) {
    console.log(error)
  }
}
</script>
<style scoped></style>
