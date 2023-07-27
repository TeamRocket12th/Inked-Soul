<template>
  <div class="mb-[90px] w-full">
    <p class="mb-6 font-bold">留言區</p>
    <div class="mb-5 flex w-full items-center gap-5">
      <input
        v-model="comment"
        type="text"
        placeholder="發表留言"
        class="w-full border-b border-black bg-transparent px-6 py-3 outline-none placeholder:text-custom"
      />
      <button type="button" class="defaultBtn w-[64px] whitespace-nowrap" @click="postComment">
        留言
      </button>
    </div>
    <ul class="mb-5 flex flex-col gap-7">
      <transition-group>
        <li
          v-for="(item, key) in commentList.slice(0, displayComments)"
          :key="key"
          class="flex flex-row items-center gap-3"
        >
          <img
            :src="item.photo"
            :class="item.role === 'user' ? 'rounded-full' : 'rounded-lg'"
            class="h-9 w-9 bg-white object-cover object-center"
          />
          <div class="flex flex-col">
            <div class="flex flex-row items-center gap-3 font-roboto-nl">
              <p class="text-base">{{ item.name }}</p>
              <p class="text-xs text-secondary">{{ item.time }}</p>
            </div>
            <p class="font-noto-tc">{{ item.content }}</p>
          </div>
        </li>
      </transition-group>
    </ul>

    <div
      v-if="commentList.length > displayComments"
      class="flex cursor-pointer flex-col items-center"
      @click="showMoreComment()"
    >
      <p class="text-base text-secondary">更多留言</p>
      <Icon name="ic:outline-keyboard-arrow-down" size="24" />
    </div>
  </div>
</template>
<script setup>
const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const APIBASE = runtimeConfig.public.APIBASE
const authToken = useCookie('token')

const commentList = ref([])
const comment = ref()
const displayComments = ref(2)

const imageId = route.params.designID
const postComment = async () => {
  if (comment.value) {
    const { data } = await useFetch(`${APIBASE}/api/imgmessage`, {
      headers: { 'Content-type': 'application/json', Authorization: `Bearer ${authToken.value}` },
      method: 'POST',
      body: {
        ImagesId: imageId,
        Message: comment.value
      }
    })
    comment.value = ''
    if (data.value.Status) {
      getComment()
    } else {
      console.log('請登入')
    }
  } else {
    console.log('請輸入')
  }
}

const getComment = async () => {
  const { data } = await useFetch(`${APIBASE}/api/getimgmessage`, {
    headers: { 'Content-type': 'application/json' },
    query: {
      imgid: imageId
    }
  })
  if (data.value.Data) {
    commentList.value = data.value.Data.map((item) => {
      if (item.Role === 'artist') {
        return {
          role: 'artist',
          name: item.ArtistName,
          photo: item.ArtistPhoto,
          content: item.Message,
          time: item.InitTime.slice(0, 10)
        }
      } else if (item.Role === 'user') {
        return {
          role: 'user',
          name: item.UserName,
          photo: item.UserPhoto,
          content: item.Message,
          time: item.InitTime.slice(0, 10)
        }
      } else {
        return ''
      }
    })
  }
}

const showMoreComment = () => {
  const addMore = 2

  const totalComments = commentList.value.length
  displayComments.value = Math.min(displayComments.value + addMore, totalComments)
}

onMounted(() => {
  nextTick(() => {
    getComment()
  })
})
</script>
<style scoped></style>
