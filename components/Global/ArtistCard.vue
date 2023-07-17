<template>
  <div class="group relative overflow-hidden rounded-lg">
    <img :src="`${props.image}`" alt="" class="w-[416px h-[416px] object-cover" />
    <div
      class="absolute bottom-0 left-0 right-0 hidden bg-black bg-opacity-50 p-4 text-white duration-300 group-hover:block"
    >
      <div class="flex flex-col items-center gap-3 hover:flex">
        <p>{{ props.nickname }}</p>
        <span
          v-for="(item, index) in styleArr"
          :key="index"
          class="rounded-full border px-3 py-1 text-xs"
          >{{ item }}</span
        >
      </div>
    </div>
    <!-- <p>{{ props.category }}</p> -->
    <!-- <p>{{ props.studioname }}</p> -->
    <!-- <button class="rounded bg-slate-200 p-2" @click="follow">追蹤</button> -->
  </div>
</template>

<script setup>
const props = defineProps({
  image: {
    // type: String,
    required: true
  },
  nickname: {
    // type: String,
    required: true
  },
  category: {
    // type: Array,
    required: true
  }
})

const styleArr = computed(() => {
  if (props.category) {
    styleArr.value = props.category.split(',')
  }
})
</script>
