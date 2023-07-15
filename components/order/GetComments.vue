<template>
  <div class="relative h-[10vh] w-full">
    <div class="dropdown-bottom dropdown-end dropdown absolute right-0">
      <label
        tabindex="0"
        class="btn bg-black px-4 py-2 text-white focus:bg-[#D0D0D0] md:mr-4 lg:mr-12"
        @click.prevent="stretchShow()"
        >看評價</label
      >
      <div
        tabindex="0"
        class="dropdown-content menu rounded-box absolute top-5 z-[1] w-[10rem] bg-base-100 p-2 sm:w-[15rem] md:w-[20rem] lg:w-[25rem] xl:w-[30rem] 2xl:w-[38rem]"
        @click.prevent="stretchShow()"
      >
        <div class="flex flex-row gap-1 border-b bg-white p-3">
          <img
            :src="`${commentsData.Data.UserImages}`"
            alt=""
            class="h-6 w-6 rounded-full object-fill object-center"
          />
          <div class="flex w-full flex-col gap-3">
            <div class="flex flex-col">
              <div class="flex flex-row gap-10">
                <p>{{}}</p>
                <p>{{}}</p>
              </div>
              <!-- 評價星星數 -->
              <ul class="flex flex-row">
                <li v-for="(star, key) in commentsData.Data.star" :key="key">
                  <Icon name="ic:baseline-star" />
                </li>
              </ul>
            </div>

            <p>{{}}</p>
            <div class="flex flex-row items-center gap-2 rounded-lg bg-[#F0F0F0]">
              <img
                :src="`${commentsData.OrderInfo.DesignImages}`"
                alt=""
                class="h-[100px] w-[100px] rounded-lg"
              />
              <p>{{}}</p>
              <p>{{}}</p>
            </div>
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

const commentsData = reactive({
  Data: {
    UserImages: 'url',
    UserName: '',
    CommentDate: '2023-08-03',
    star: '4',
    Comment: ''
  },
  OrderInfo: {
    DesignImages: 'url',
    DesignName: '認領圖名',
    Size: '12cm*12cm'
  }
})
</script>

<style scoped>
.comment-btn {
  direction: rtl;
}
</style>
