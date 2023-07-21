<template>
  <div class="flex w-full flex-col items-start gap-3 rounded-lg bg-white p-5 shadow">
    <div class="relative w-full overflow-hidden rounded-lg">
      <img
        :src="`${props.designData.Url}`"
        alt=""
        class="w-full rounded-lg border border-primary object-contain object-center"
      />
      <div v-if="props.designData.IsSoldout" class="soldOut absolute bottom-0 left-0 right-0 top-0">
        <p
          class="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] rounded-full bg-black bg-opacity-50 px-6 py-9 text-base font-bold text-white"
        >
          已售出
        </p>
      </div>
    </div>
    <div class="flex w-full flex-col gap-5">
      <div class="flex w-full flex-col items-start gap-2">
        <div class="flex w-full flex-row items-center justify-between">
          <h4>{{ props.designData.Name }}</h4>
          <div>
            <div class="dropdown-end dropdown">
              <label
                tabindex="0"
                class="btn-outline btn border-none bg-white hover:bg-white hover:text-black"
                ><Icon name="ic:outline-share" size="24"
              /></label>
              <ul tabindex="0" class="dropdown-content z-[1] w-52 rounded-lg bg-base-100">
                <ShareModal :current-page="`/designs/${props.id}`" />
              </ul>
            </div>
          </div>
        </div>
        <p class="text-secondary">{{ props.designData.Idea }}</p>
      </div>
      <ul class="flex flex-row items-center gap-2">
        <li
          v-for="(style, key) in props.designData.Style"
          :key="key"
          class="rounded-full border px-3 py-1"
        >
          {{ style }}
        </li>
      </ul>
    </div>
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
