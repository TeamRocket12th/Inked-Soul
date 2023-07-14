<template>
  <div class="relative h-[10vh] w-full">
    <div class="dropdown-bottom dropdown-end dropdown absolute right-0">
      <label
        tabindex="0"
        class="btn bg-black px-4 py-0 text-white focus:bg-gray-500 md:mr-4 lg:mr-12"
        @click.prevent="stretchShow()"
        >撰寫評價</label
      >
      <div
        tabindex="0"
        class="dropdown-content menu rounded-box absolute top-5 z-[1] w-[10rem] bg-base-100 p-2 sm:w-[15rem] md:w-[20rem] lg:w-[25rem] xl:w-[30rem] 2xl:w-[38rem]"
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
            <p>撰寫評語</p>
            <textarea
              v-model="txt"
              class="textarea-bordered textarea w-[60%]"
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
const store = useOrderStore()
const { stretchShow } = store

const rate = ref(0)
const updateRating = (num) => {
  rate.value = num
}
const txt = ref()
const originalDate = new Date()
const date = originalDate.toISOString()
const newDate = date.split('T')

const postComments = async () => {
  const comment = ref({
    star: rate.value,
    txt: txt.value,
    commentDate: newDate[0]
  })
  await useFetch('http://localhost:5005/comments', {
    method: 'POST',
    body: comment
  })
  console.log(comment)
}
</script>

<style scoped>
.comment-btn {
  direction: rtl;
}
</style>
