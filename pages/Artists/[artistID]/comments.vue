<template>
  <div>
    <div v-for="item in commentsData" :key="item.id" class="mb-4 w-full">
      <div class="mb-2 flex justify-between">
        <div class="flex items-center">
          <img :src="`${item.artistImage}`" class="mr-4 w-[50px] rounded-full" />
          <span class="mr-8">{{ item.artist }}</span>
          <span>{{ item.date }}</span>
        </div>
        <div>星等{{ item.star }}</div>
      </div>
      <div class="flex">
        <img :src="`${item.image}`" />
        <div class="bg-slate-200">{{ item.comment }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
const route = useRoute()
const id = route.params.id
const { data } = await useFetch(`/api/getArtists/getComments/${id}`)
const commentsData = ref([])
commentsData.value = data.value.data.comments
</script>
