<template>
  <div v-if="props" class="flex flex-col items-center gap-10 rounded-lg bg-white p-5">
    <div class="flex w-full flex-col gap-3">
      <h2>{{ props.artistData.nickname }}</h2>
      <img :src="props.artistData.photo" class="rounded-lg object-cover" />
      <div class="flex flex-row items-center justify-between">
        <div class="flex flex-row items-center">
          <Icon name="ic:baseline-bookmark" class="h-6 w-6" />
          {{ props.artistData.Follower }}
        </div>
        <Icon name="ic:outline-share" class="h-6 w-6" />
      </div>
    </div>

    <div class="flex w-full flex-col gap-3">
      <p class="bg-primary px-5 py-3">關於我</p>
      <p>資歷｜{{ props.artistData.experience }}年</p>
      <p>工作室｜{{ props.artistData.studioName }}</p>
      <p class="item-center flex flex-row gap-2">
        <Icon name="ic:outline-phone" class="h-6 w-6" /> {{ props.artistData.tel }}
      </p>
      <p class="item-center flex flex-row gap-2">
        <Icon name="ic:outline-home" class="h-6 w-6" /> {{ props.artistData.location }}
      </p>
      <p class="item-center flex flex-row gap-2">
        <Icon name="ic:outline-access-time" class="h-6 w-6" />{{ props.artistData.businessHours }}
      </p>
    </div>

    <div class="flex w-full flex-col gap-3">
      <p class="bg-primary px-5 py-3">作品風格</p>
      <p class="mb-2">{{ props.artistData.Intro }}</p>
      <ul class="flex flex-col items-start gap-2">
        <li
          v-for="(style, key) in props.artistData.Style"
          :key="key"
          class="rounded-full border border-[#D0D0D0] px-3 py-1"
        >
          {{ style }}
        </li>
      </ul>
    </div>

    <!-- <div>
      <div v-for="(item, index) in chStyleArr" :key="index" class="badge">{{ item }}</div>
    </div> -->
  </div>
</template>
<script setup>
// import { useChNameStore } from '~/stores/useChNameStore'
// const chNameStore = useChNameStore()
const props = defineProps({
  artistData: {
    type: Object,
    required: true
  }
})

// 風格編號轉文字
// const chStyleArr = ref([])
// props.artistData.style.forEach((item) => {
//   chStyleArr.value.push(chNameStore.chStyle[item])
// })
</script>
