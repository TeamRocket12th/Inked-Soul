<template>
  <div class="flex w-full flex-col items-start gap-3 rounded-lg bg-white p-5 shadow">
    <img
      :src="`${props.designData.image}`"
      alt=""
      class="w-full rounded-lg border object-contain"
    />
    <div class="flex w-full flex-col gap-5">
      <div class="flex w-full flex-col items-start gap-2">
        <div class="flex w-full flex-row items-center justify-between">
          <h4>{{ props.designData.designName }}</h4>
          <Icon name="ic:outline-share" />
        </div>
        <p class="text-secondary">{{ props.designData.description }}</p>
      </div>
      <ul class="flex flex-row items-center gap-2">
        <li v-for="(style, key) in props.designData.Style" class="rounded-full border px-3 py-1">
          {{ style }}
        </li>
      </ul>
    </div>

    <!-- <div>風格：{{ props.designData.Style }}</div> -->
    <!-- <div>元素：{{ props.designData.element }}</div> -->
  </div>
</template>
<script setup>
const props = defineProps({
  designData: {
    type: Object,
    required: true
  },
  id: {
    type: String,
    required: true
  }
})
</script>
