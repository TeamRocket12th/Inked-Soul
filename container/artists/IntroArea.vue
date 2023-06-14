<template>
  <div v-if="props">
    <img :src="props.artistData.photo" />
    <p>{{ props.artistData.studioName }}</p>
    <p>{{ props.artistData.plocation }}</p>
    <p>營業時間：{{ props.artistData.businessHours }}</p>
    <p>資歷：{{ props.artistData.experience }}</p>
    <p>連絡電話：{{ props.artistData.tel }}</p>
    <div>
      <div v-for="(item, index) in chStyleArr" :key="index" class="badge">{{ item }}</div>
    </div>
  </div>
</template>
<script setup>
import { useChNameStore } from '~/stores/useChNameStore'
const chNameStore = useChNameStore()
const props = defineProps({
  artistData: {
    type: Object,
    required: true
  }
})

// 風格編號轉文字
const chStyleArr = ref([])
props.artistData.style.forEach((item) => {
  chStyleArr.value.push(chNameStore.chStyle[item])
})
</script>
