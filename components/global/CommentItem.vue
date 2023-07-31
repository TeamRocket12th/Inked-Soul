<template>
  <li
    :class="{ 'border-primary': false }"
    class="flex flex-row gap-1 border-b border-[#D0D0D0] bg-white p-5 last:border-b-0"
  >
    <img
      :src="`${props.data.BuPurchaserPhoto}`"
      alt=""
      class="h-6 w-6 rounded-full bg-white object-cover object-center"
    />

    <div class="flex w-full flex-col gap-3">
      <div class="flex flex-col">
        <div class="flex flex-row items-center gap-10">
          <p>{{ props.data.BuPurchaser }}</p>
          <p class="font-roboto-nl text-sm text-secondary">{{ commentTime }}</p>
        </div>
        <ul class="flex flex-row">
          <li v-for="count in props.data.Star" :key="count">
            <Icon name="ic:baseline-star" />
          </li>
        </ul>
      </div>
      <p>{{ props.data.Comment }}</p>
      <div class="flex max-w-[500px] flex-row items-center gap-2 rounded-lg bg-primary">
        <img
          :src="`${props.data.ImgUrl}`"
          alt=""
          class="h-[100px] w-[100px] rounded-lg border border-primary bg-white object-cover object-center"
        />
        <div class="flex flex-col items-start justify-center">
          <p>{{ props.data.ImgName }}</p>
          <p>{{ props.data.ImgSize }}</p>
        </div>
      </div>
    </div>
  </li>
</template>
<script setup>
const props = defineProps({
  data: {
    type: null,
    required: true
  }
})

const commentTime = computed(() => {
  if (props.data) {
    return props.data.CommentTime.slice(0, 10)
  } else {
    return []
  }
})
</script>
<style scoped></style>
