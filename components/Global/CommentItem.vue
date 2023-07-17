<template>
  <ul v-for="(item, key) in props.data" :key="key">
    <li class="flex flex-row gap-1 border-b border-[#D0D0D0] bg-white p-3">
      <img
        :src="`${item.BuPurchaserPhoto}`"
        alt=""
        class="h-6 w-6 rounded-full object-cover object-center"
      />
      <div class="flex w-full flex-col gap-3">
        <div class="flex flex-col">
          <div class="flex flex-row items-center gap-10">
            <p>{{ item.BuPurchaser }}</p>
            <p class="font-roboto-nl text-sm text-secondary">{{ commentTime[key] }}</p>
          </div>
          <ul class="flex flex-row">
            <li v-for="count in item.Star" :key="count">
              <Icon name="ic:baseline-star" />
            </li>
          </ul>
        </div>
        <p>{{ item.Comment }}</p>
        <div class="flex max-w-[500px] flex-row items-center gap-2 rounded-lg bg-primary">
          <img
            :src="`${item.ImgUrl}`"
            alt=""
            class="h-[100px] w-[100px] rounded-lg border border-primary object-cover object-center"
          />
          <div class="flex flex-col items-start justify-center">
            <p>{{ item.ImgName }}</p>
            <p>{{ item.ImgSize }}</p>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>
<script setup>
const props = defineProps({
  data: {
    required: true
  }
})

const commentTime = computed(() => {
  if (props.data) {
    return props.data.map((item) => {
      return item.CommentTime.slice(0, 10)
    })
  } else {
    return []
  }
})
</script>
<style scoped></style>
