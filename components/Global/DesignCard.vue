<template>
  <div class="boreder-black group relative overflow-hidden rounded-lg border-2">
    <img :src="props.image" alt="" class="h-[200px]" :style="{ height: `${height}px` }" />
    <!-- 遮罩 -->
    <div
      class="z-1 absolute top-0 hidden h-full w-full flex-col-reverse bg-gradient-to-b from-transparent to-black p-2 group-hover:flex"
    >
      <div class="flex justify-between">
        <p class="text-white">{{ props.designName }}</p>
        <p class="text-white">${{ props.price }}</p>
      </div>
      <div class="flex items-center">
        <img :src="props.artistImg" alt="" class="mr-2 h-[40px] w-[40px] rounded-full" />
        <p class="text-white">{{ props.artistName }}</p>
      </div>
      <div>
        <p class="text-white">地區：{{ props.city }}</p>
        <p class="text-white">風格：{{ props.style }}</p>
        <p class="text-white">元素：{{ props.element }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  id: {
    required: true,
    type: Number
  },
  image: {
    required: true,
    type: String
  },
  designName: {
    required: true,
    type: String
  },
  artistName: {
    required: true,
    type: String
  },
  artistImg: {
    required: true,
    type: String
  },
  price: {
    required: true,
    type: Number
  },
  city: {
    required: true,
    type: String
  },
  style: {
    required: true,
    type: String // mockAPI回傳格式是字串，注意以後可能須改為陣列
  },
  element: {
    required: true,
    type: String // mockAPI回傳格式是字串，注意以後可能須改為陣列
  }
})

// 測試用
const random = ref(Math.floor(Math.random() * 150))
const height = computed(() => {
  return 200 + random.value
})
</script>
