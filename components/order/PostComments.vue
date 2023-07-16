<template>
  <div class="relative h-[10vh] w-full">
    <div class="dropdown-bottom dropdown-end dropdown absolute right-0">
      <label
        tabindex="0"
        class="btn bg-black px-4 py-2 text-white focus:bg-[#D0D0D0] md:mr-4 lg:mr-12"
        @click.prevent="stretchShow()"
        >撰寫評價</label
      >
      <div
        tabindex="0"
        class="dropdown-content menu rounded-box absolute top-5 z-[1] w-[10rem] bg-base-100 p-2 sm:w-[15rem] md:w-[20rem] lg:w-[25rem] xl:w-[30rem] 2xl:w-[38rem]"
        @click.prevent="stretchShow()"
      >
        <!-- 星星 -->
        <div class="mb-4 flex items-center">
          <p class="mr-2">星級評價</p>
          <div class="rating rating-sm">
            <input type="radio" name="rating-5" class="mask mask-star" @change="updateRating(1)" />
            <input type="radio" name="rating-5" class="mask mask-star" @change="updateRating(2)" />
            <input type="radio" name="rating-5" class="mask mask-star" @change="updateRating(3)" />
            <input type="radio" name="rating-5" class="mask mask-star" @change="updateRating(4)" />
            <input type="radio" name="rating-5" class="mask mask-star" @change="updateRating(5)" />
          </div>
        </div>
        <!-- 文字輸入框 -->
        <div class="mb-2">
          <label class="flex justify-between">
            <p class="mr-2 w-20">撰寫評語</p>
            <textarea
              v-model="comment"
              class="textarea-bordered textarea w-full"
              maxlength="30"
            ></textarea>
          </label>
        </div>
        <div class="">
          <div class="row-reverse comment-btn absolute right-0">
            <button class="btn bg-black py-1 text-xs text-white" @click="postComments">評價</button>
            <p class="text-secondary">
              <Icon name="ic:baseline-warning-amber" />評價送出後將無法修改
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useOrderStore } from '~/stores/order'
import { storeToRefs } from 'pinia'

const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const APIBASE = runtimeConfig.public.APIBASE

const authToken = useCookie('token')

const store = useOrderStore()
const { stretchShow } = store
const { isComment } = storeToRefs(store)

const imageId = route.params.orderID
const comment = ref('')
const rate = ref(0)

const updateRating = (num) => {
  rate.value = num
}

const postComments = async () => {
  const commentInfo = ref({
    ImagesId: imageId,
    comment: comment.value,
    star: JSON.stringify(rate.value)
  })
  const { data, error } = await useFetch(`${APIBASE}/api/artistfinishcomment`, {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${authToken.value}`
    },
    method: 'POST',
    body: commentInfo.value
  })

  isComment.value = true
  console.log(data)
}
</script>

<style scoped>
.comment-btn {
  direction: rtl;
}
</style>
