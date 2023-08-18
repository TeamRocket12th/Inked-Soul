<template>
  <div class="relative h-[10vh] w-full">
    <div class="dropdown-bottom dropdown-end dropdown grid w-full grid-cols-9">
      <label
        tabindex="0"
        class="col-start-8 flex cursor-pointer items-center justify-center whitespace-nowrap"
        @click.prevent="stretchToggle()"
      >
        <span class="rounded-lg bg-black px-3 py-2 text-white focus:border-none focus:bg-[#D0D0D0]">
          查看評價
        </span>
      </label>
      <div
        tabindex="0"
        class="dropdown-content absolute z-[1] w-full rounded-lg border border-primary bg-base-100 p-5"
        style="top: 68px"
        @click.prevent="stretchToggle()"
      >
        <div class="flex flex-row gap-1 bg-white p-3">
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
              <ul class="flex">
                <li v-for="(star, key) in commentData.Star" :key="key">
                  <Icon name="ic:baseline-star" size="20" class="p-0" />
                </li>
              </ul>
            </div>

            <p>{{ commentData.Comment }}</p>
            <div class="flex flex-row items-center gap-2 rounded-lg bg-[#F0F0F0]">
              <img
                :src="`${commentData.ImgUrl}`"
                alt=""
                class="h-[100px] w-[100px] rounded-lg border border-primary bg-white object-cover object-center"
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

const props = defineProps({
  imageId: {
    type: null,
    required: true
  }
})

const runtimeConfig = useRuntimeConfig()
const APIBASE = runtimeConfig.public.APIBASE
const authToken = useCookie('token')

const store = useOrderStore()
const { stretchToggle } = store

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
      imgid: props.imageId
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
