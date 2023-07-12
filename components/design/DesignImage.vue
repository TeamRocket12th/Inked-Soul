<template>
  <div class="flex w-full flex-col items-start gap-3 rounded-lg bg-white p-5 shadow">
    <img :src="`${props.designData.Url}`" alt="" class="w-full rounded-lg border object-contain" />
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
                <ShareModal />
              </ul>
            </div>
          </div>
        </div>
        <p class="text-secondary">{{ props.designData.Idea }}</p>
      </div>
      <ul class="flex flex-row items-center gap-2">
        <li v-for="(style, key) in props.designData.Style" class="rounded-full border px-3 py-1">
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
