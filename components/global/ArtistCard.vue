<template>
  <div class="group relative overflow-hidden rounded-lg">
    <img
      v-if="props.data.Photo"
      :src="`${props.data.Photo}`"
      alt=""
      class="w-[416px h-[416px] object-cover"
    />
    <div
      class="absolute bottom-0 left-0 right-0 hidden bg-black bg-opacity-50 p-4 text-white duration-300 group-hover:block"
    >
      <div class="flex flex-col items-center gap-3 hover:flex">
        <p v-if="props.data.Nickname">{{ props.data.Nickname }}</p>
        <div class="flex flex-col items-center gap-3" v-if="typeof props.data.Style === 'string'">
          <span
            v-for="(item, index) in styleArr"
            :key="index"
            class="rounded-full border px-3 py-1 text-xs"
            >{{ item }}</span
          >
        </div>
      </div>
    </div>
    <!-- <p>{{ props.category }}</p> -->
    <!-- <p>{{ props.studioname }}</p> -->
    <!-- <button class="rounded bg-slate-200 p-2" @click="follow">追蹤</button> -->
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

const styleArr = ref()
styleArr.value = computed(() => {
  if (typeof props.data.Style === 'string') {
    styleArr.value = props.data.Style.split(',')

    return (styleArr.value = props.data.Style.split(','))
  }
})
</script>
