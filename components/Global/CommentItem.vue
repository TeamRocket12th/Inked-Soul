<template>
  <ul v-for="item in commentsData" :key="item.id" class="rounded-lg">
    <li class="flex flex-row gap-1 border-b bg-white p-3">
      <img
        :src="`${item.artistImage}`"
        alt=""
        class="h-6 w-6 rounded-full object-fill object-center"
      />
      <div class="flex w-full flex-col gap-3">
        <div class="flex flex-col">
          <div class="flex flex-row gap-10">
            <p>{{ item.artist }}</p>
            <p>{{ item.date }}</p>
          </div>
          <!-- 評價星星數 -->
          <ul class="flex flex-row">
            <li v-for="(star, key) in item.star" :key="key">
              <Icon name="ic:baseline-star" />
            </li>
          </ul>
        </div>

        <p>{{ item.comment }}</p>
        <div class="flex flex-row items-center gap-2 rounded-lg bg-[#F0F0F0]">
          <img :src="`${item.image}`" alt="" class="h-[100px] w-[100px] rounded-lg" />
          <p>{{ item.designName }}</p>
          <p>{{ item.size }}</p>
        </div>
      </div>
    </li>
  </ul>
</template>
<script setup>
const prop = defineProps({
  artistId: {
    require: true
  }
})

const { data } = await useFetch(`/api/getArtists/getComments/${prop.artistId}`)

///
const commentsData = ref([])
commentsData.value = data.value.data.comments
///
</script>
<style scoped></style>
