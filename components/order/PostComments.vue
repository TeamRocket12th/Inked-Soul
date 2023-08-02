<template>
  <div class="relative h-[10vh] w-full">
    <div class="dropdown-bottom dropdown-end dropdown grid w-full grid-cols-9">
      <label
        tabindex="0"
        class="col-start-8 flex cursor-pointer items-center justify-center whitespace-nowrap"
        @click.prevent="stretchToggle()"
      >
        <button
          class="rounded-lg bg-black px-3 py-2 text-white focus:border-none focus:bg-[#D0D0D0]"
        >
          撰寫評價
        </button>
      </label>
      <div
        tabindex="0"
        class="dropdown-content absolute top-5 z-[1] w-full rounded-lg bg-base-100 p-2"
        @click="stretchToggle()"
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
        <div class="mb-10">
          <label class="flex justify-between">
            <p class="mr-2 w-20">撰寫評語</p>
            <textarea
              v-model="comment"
              class="textarea-bordered textarea min-h-[100px] w-full"
              placeholder="請填入30字(含)內評語"
              maxlength="30"
            ></textarea>
          </label>
        </div>
        <!-- 警示文字 -->
        <div class="">
          <div class="row-reverse comment-btn absolute right-0">
            <button
              class="mb-3 rounded-lg bg-black px-4 py-2 text-base font-normal text-white"
              @click="postComments"
            >
              評價
            </button>
            <div class="flex items-center gap-2 text-secondary">
              <p class="">評價送出後將無法修改</p>
              <Icon name="ic:baseline-error-outline" size="24" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useOrderStore } from '~/stores/order'

const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const APIBASE = runtimeConfig.public.APIBASE

const authToken = useCookie('token')

const store = useOrderStore()
const { stretchToggle } = store
const { isComment } = storeToRefs(store)

const imageId = route.params.orderID
const comment = ref('')
const rate = ref(5)

const updateRating = (num) => {
  rate.value = num
  console.log(rate.value)
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
}
</script>

<style scoped>
.comment-btn {
  direction: rtl;
}
</style>
