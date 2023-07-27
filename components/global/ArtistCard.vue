<template>
  <div
    class="group relative flex h-[416px] w-full items-center justify-center overflow-hidden rounded-lg bg-white"
  >
    <img
      v-if="props.data.Photo"
      :src="`${props.data.Photo}`"
      alt=""
      class="h-full w-full object-cover"
    />
    <!-- 遮罩 -->
    <div class="mask hidden group-hover:block"></div>

    <div
      class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white duration-300"
    >
      <div class="flex flex-col items-center gap-3 hover:flex">
        <p v-if="props.data.Nickname" class="font-xl font-bold">{{ props.data.Nickname }}</p>
        <div v-if="typeof props.data.Style === 'string'" class="flex items-center gap-3">
          <span
            v-for="(item, index) in styleArr.value"
            :key="index"
            class="rounded-full border-[0.5px] px-3 py-1 text-xs"
            >{{ item }}</span
          >
        </div>
      </div>
    </div>
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
    return props.data.Style.split(',')
  }
})
</script>
<style scoped>
.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.4) 67.71%,
    rgba(0, 0, 0, 0.5) 100%
  );
}
</style>
