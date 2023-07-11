<template>
  <div class="relative h-[10vh] w-full">
    <div class="dropdown-bottom dropdown-end dropdown absolute right-0">
      <label tabindex="0" class="btn m-1 bg-black px-4 py-0 text-white focus:bg-gray-500"
        >撰寫評價</label
      >
      <div
        tabindex="0"
        class="dropdown-content menu rounded-box absolute right-0 top-5 z-[1] w-[38rem] bg-base-100 p-2"
      >
        <!-- 星星 -->
        <div class="flex">
          <p>星級評價</p>
          <div class="rating">
            <input type="radio" name="rating-9" class="mask mask-star" @change="updateRating(1)" />
            <input type="radio" name="rating-9" class="mask mask-star" @change="updateRating(2)" />
            <input type="radio" name="rating-9" class="mask mask-star" @change="updateRating(3)" />
            <input type="radio" name="rating-9" class="mask mask-star" @change="updateRating(4)" />
            <input type="radio" name="rating-9" class="mask mask-star" @change="updateRating(5)" />
          </div>
        </div>
        <!-- 文字輸入框 -->
        <div>
          <label class="flex justify-between">
            <p>撰寫評語</p>
            <textarea
              v-model="txt"
              class="textarea-bordered textarea w-full"
              maxlength="30"
            ></textarea>
          </label>
        </div>
        <div class="relative w-full">
          <div class="row-reverse comment-btn absolute right-0">
            <button class="btn bg-black text-white" @click="postComments">送出評論</button>
            <p><Icon name="ic:baseline-warning-amber" />評論送出後將無法修改</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
