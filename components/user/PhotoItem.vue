<template>
  <div class="flex flex-col items-center gap-10 rounded px-[104] py-10">
    <div class="avatar flex flex-col items-center gap-2">
      <div class="group relative w-20 rounded-full">
        <label for="photo" class="cursor-pointer">
          <img v-if="!previewUrl" :src="Photo" alt="" class="bg-white object-cover object-center" />
          <img
            v-if="previewUrl"
            :src="previewUrl"
            alt=""
            class="bg-white object-cover object-center"
          />
        </label>
        <div
          class="group-hover:uploadPhoto bottom-0 left-0 right-0 top-0 h-full w-full group-hover:absolute"
        >
          <div class="h-full w-full">
            <label for="photo" class="flex h-full w-full items-center justify-center">
              <Icon name="ic:outline-photo-camera" size="20" class="text-white" />
            </label>
            <input
              id="photo"
              type="file"
              accept=".jpg, .png, .svg, .gif"
              class="hidden"
              @change="handleOnPreview"
            />
          </div>
        </div>
      </div>
      <h2>{{ nickname }}</h2>

      <button
        v-show="previewUrl"
        class="m-2 flex items-center gap-2 rounded-lg border border-black px-3 py-1"
        @click="postImg"
      >
        <Icon name="ic:baseline-upgrade" size="24" />
        <p>上傳大頭照</p>
      </button>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useAccountStore } from '~/stores/account'

const runtimeConfig = useRuntimeConfig()
const APIBASE = runtimeConfig.public.APIBASE
const authToken = useCookie('token')

const store = useAccountStore()
const { userInfoData, photo } = storeToRefs(store)
const { getUserInfo, handleDefaultInfo } = store

const nickname = computed(() => {
  return userInfoData.value.Nickname || 'xxx'
})

const Photo = computed(() => {
  return photo.value
})

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
    const res = $fetch(`${APIBASE}/api/uploaduserprofile`, {
      headers: {
        Authorization: `Bearer ${authToken.value}`
      },
      method: 'POST',
      body: formData
    })
    if (res.Message) {
      await getUserInfo()
    }
    previewUrl.value = false
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  handleDefaultInfo()
})
</script>
<style scoped></style>
