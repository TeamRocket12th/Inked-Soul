<template>
  <div class="relative h-[10vh] w-full">
    <div class="dropdown-bottom dropdown-end dropdown absolute right-0">
      <label
        tabindex="0"
        class="btn bg-black px-4 py-2 text-white focus:bg-[#D0D0D0] md:mr-4 lg:mr-12"
        @click.prevent="stretchShow()"
        >查看評價</label
      >
      <div
        tabindex="0"
        class="dropdown-content menu rounded-box absolute top-5 z-[1] w-[10rem] bg-base-100 p-2 sm:w-[15rem] md:w-[20rem] lg:w-[25rem] xl:w-[30rem] 2xl:w-[38rem]"
        @click.prevent="stretchShow()"
      >
        <div class="flex flex-row gap-1 border-b bg-white p-3">
          <img
            :src="`${commentData.BuPurchaserPhoto}`"
            alt=""
            class="h-6 w-6 rounded-full object-fill object-center"
          />
          <div class="flex w-full flex-col gap-3">
            <div class="flex flex-col">
              <div class="flex flex-row gap-10">
                <p>{{ commentData.BuPurchaser }}</p>
                <p>{{ commentTime }}</p>
              </div>
              <!-- 評價星星數 -->
              <ul class="flex flex-row">
                <li v-for="(star, key) in commentData.Star" :key="key">
                  <Icon name="ic:baseline-star" />
                </li>
              </ul>
            </div>

            <p>{{ commentData.Comment }}</p>
            <div class="flex flex-row items-center gap-2 rounded-lg bg-[#F0F0F0]">
              <img
                :src="`${commentData.ImgUrl}`"
                alt=""
                class="h-[100px] w-[100px] rounded-lg border border-primary object-fill object-center"
              />
              <div class="flex flex-col items-start">
                <p>{{ commentData.ImgName }}</p>
                <p>{{ commentData.ImgSize }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useOrderStore } from '~/stores/order'

const { imageId } = defineProps({
  imageId: {
    required: true
  }
})

const runtimeConfig = useRuntimeConfig()
const APIBASE = runtimeConfig.public.APIBASE
const authToken = useCookie('token')

const store = useOrderStore()
const { stretchShow } = store

const commentData = ref('')
const commentTime = computed(() => {
  if (commentData.value.CommentTime) {
    return commentData.value.CommentTime.slice(0, 10)
  }
})
const getComment = async () => {
  const { data } = await useFetch(`${APIBASE}/api/getfinishcomment`, {
    headers: { 'Content-type': 'application/json', Authorization: `Bearer ${authToken.value}` },
    method: 'POST',
    query: {
      imgid: imageId
    }
  })
  commentData.value = data.value.Data[0]
}

onMounted(() => {
  nextTick(() => {
    getComment()
  })
})
</script>

<style scoped>
.comment-btn {
  direction: rtl;
}
</style>
