<template>
  <div class="relative h-[10vh] w-full">
    <div class="dropdown-bottom dropdown-end dropdown absolute right-[16.5%] translate-x-[50%]">
      <label tabindex="0" class="btn rounded-lg bg-black px-4 py-2 text-white focus:bg-[#D0D0D0]"
        >撰寫評價</label
      >
      <div tabindex="0" class="dropdown-content menu absolute !-right-10 top-5 z-[1] w-[38rem]">
        <!-- 星星 -->
        <div class="mb-5 flex items-center gap-3">
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
        <label class="mb-[30px] flex items-start gap-3">
          <p class="whitespace-nowrap">撰寫評語</p>
          <textarea
            v-model="txt"
            class="textarea-bordered textarea h-[100px] w-full rounded-lg"
            placeholder="請填入30字(含)內評語"
            maxlength="30"
          ></textarea>
        </label>
        <div class="">
          <div class="row-reverse comment-btn absolute right-0">
            <button class="btn bg-black text-white" @click="postComments">評價</button>
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
