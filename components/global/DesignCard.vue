<template>
  <div class="boreder-black group relative overflow-hidden rounded-lg border-[1px]">
    <img
      v-if="props.data"
      :src="props.data.Url"
      class="h-fit min-h-[200px] w-full bg-white object-contain object-center"
    />
    <!-- 遮罩 -->
    <div
      v-if="props.data"
      class="z-1 designCard absolute top-0 hidden h-full w-full flex-col-reverse gap-3 p-5 group-hover:flex"
    >
      <div class="flex items-center justify-between">
        <p v-if="props.data.ImgName" class="font-noto-tc font-bold text-white">
          {{ props.data.ImgName }}
        </p>
        <p v-if="props.data.Name" class="font-noto-tc font-bold text-white">
          {{ props.data.Name }}
        </p>
        <p class="font-roboto-nl font-bold text-white">$ {{ props.data.Total }}</p>
      </div>
      <div class="flex items-center" :class="{ hidden: isArtistPage }">
        <img
          :src="props.data.Photo"
          loading="lazy"
          alt=""
          class="mr-2 h-6 w-6 rounded-lg bg-white object-cover object-center"
        />
        <p class="font-roboto-nl font-bold text-white">
          {{ props.data.Nickname }}
        </p>
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
  data: {
    type: Object,
    required: true
  }
})
</script>
