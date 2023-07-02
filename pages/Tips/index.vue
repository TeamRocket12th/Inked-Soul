<template>
  <div class="container">
    <h2 class="mb-8">刺青知識點</h2>
    <ul class="grid grid-cols-3 gap-8">
      <li v-for="(item, key) in tipsData" :key="key">
        <NuxtLink :to="`/tips/${item.Id}`">
          <Suspense>
            <template #default>
              <TipsCard
                :image="item.Image"
                :title="item.Title"
                :date="item.Date"
                :content="item.Content"
              />
            </template>
            <template #fallback>
              <LoadingCard />
            </template>
          </Suspense>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script setup>
import TipsCard from '~/components/tips/TipsCard.vue'

const runtimeConfig = useRuntimeConfig()
const apiBase = runtimeConfig.public.apiBase

const tipsData = ref([])
const { data } = await useFetch(`${apiBase}/tips/all`)
tipsData.value = data.value.Data
</script>
