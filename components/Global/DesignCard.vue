<template>
  <div class="boreder-black group relative overflow-hidden rounded-lg border-2">
    <img
      :src="props.image"
      class="h-fit min-h-[200px] w-full bg-white object-contain object-center"
    />
    <!-- :style="{ height: `${height}px` }" -->
    <!-- 遮罩 -->
    <div
      class="z-1 designCard absolute top-0 hidden h-full w-full flex-col-reverse gap-3 p-5 group-hover:flex"
    >
      <div class="flex items-center justify-between">
        <p class="font-noto-tc font-bold text-white">{{ props.designName }}</p>
        <p class="font-roboto-nl font-bold text-white">$ {{ props.price }}</p>
      </div>
      <div class="flex items-center" :class="{ hidden: isArtistPage }">
        <img
          :src="props.artistImg"
          alt=""
          class="mr-2 h-[40px] w-[40px] rounded-lg object-cover object-center"
        />
        <p class="font-roboto-nl font-bold text-white">{{ props.artistName }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
const route = useRoute()
const isArtistPage = computed(() => {
  if (route.params.artistID) {
    return true
  } else {
    return false
  }
})

const props = defineProps({
  id: {
    type: null, // Number
    required: true
  },
  image: {
    type: null, // String
    required: true
  },
  designName: {
    type: null, // String
    required: true
  },
  artistName: {
    type: null, // String,
    required: true,
    default: 'dafeult artist name'
  },
  artistImg: {
    type: null, // String
    required: true
  },
  price: {
    type: null, // Number
    required: true
  }
})

// 測試用（製作瀑布流）
// const random = ref(Math.floor(Math.random() * 150))
// const height = computed(() => {
//   return 200 + random.value
// })
</script>
