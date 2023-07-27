<template>
  <div class="container">
    <h2 class="mb-8">刺青知識點</h2>
    <ul class="grid grid-cols-3 gap-8">
      <li v-for="(item, key) in tipsData" :key="key">
        <NuxtLink :to="`/tips/${item.Id}`">
          <Suspense>
            <template #default>
              <TipsCard
                :time="1000"
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

// const runtimeConfig = useRuntimeConfig()
// const apiBase = runtimeConfig.public.apiBase

const tipsData = ref(null)
// const { data } = await useFetch(`${apiBase}/tips/all`)

tipsData.value = [
  {
    Id: 1,
    Image: '/tips/1.jpg',
    Title: '紋身的藝術表達 ｜ 探索紋身如何傳達身份故事',
    Date: '2023-03-25',
    Content:
      '刺青是一種獨特而美麗的身體藝術。但它需要適當的養護但它需要適當的養護但它需要適當的養護但它需要的養護'
  },
  {
    Id: 2,
    Image: '/tips/2.jpg',
    Title: '刺青歷史脈絡 ｜ 深入探索刺青意義',
    Date: '2023-03-25',
    Content:
      '刺青是一種獨特而美麗的身體藝術，但它需要適當的養護以確保長久的美觀和健康。這篇文章將為您提供有關如這篇文章將為您提供有關如'
  },
  {
    Id: 3,
    Image: '/tips/3.jpg',
    Title: '不同刺青風格解析',
    Date: '2023-03-25',
    Content:
      '刺青是一種獨特而美麗的身體藝術。但它需要適當的養護但它需要適當的養護但它需要適當的養護但它需要的養護'
  },
  {
    Id: 4,
    Image: '/tips/4.jpg',
    Title: '刺青設計指南',
    Date: '2023-03-25',
    Content:
      '刺青是一種獨特而美麗的身體藝術。但它需要適當的養護但它需要適當的養護但它需要適當的養護但它需要的養護'
  },
  {
    Id: 5,
    Image: '/tips/5.jpg',
    Title: '紋身的藝術表達 ｜ 探索紋身如何傳達身份故事',
    Date: '2023-03-25',
    Content: '刺青風格介紹：探索黑灰派、日式傳統和水彩等刺青風格的特點。'
  },
  {
    Id: 6,
    Image: '/tips/6.jpg',
    Title: '刺青護理秘訣 ｜ 保持刺青的鮮艷和健康',
    Date: '2023-03-25',
    Content:
      '當您完成一個刺青後，適當的護理對於保護和維護這個藝術品至關重要。以下是一些關鍵的刺青護理指南，幫助您在創作的美麗圖案上展現最佳的效果。'
  },
  {
    Id: 7,
    Image: '/tips/7.jpg',
    Title: '紋身的藝術表達 ｜ 探索紋身如何傳達身份故事',
    Date: '2023-03-25',
    Content:
      '避免游泳。在刺青未完全癒合之前，避免在游泳池、海洋或熱水浴缸中浸泡。水中的化學物質和細菌可能會對刺青造成損害。'
  },
  {
    Id: 8,
    Image: '/tips/8.jpg',
    Title: '刺青後的約束與注意事項',
    Date: '2023-03-25',
    Content:
      '如果您有任何不適或異常反應，請立即向醫療專業人員尋求幫助。讓您的刺青成為您的自豪，遵從這些護理指南，讓您的藝術品在時間的考驗中保持美'
  },
  {
    Id: 9,
    Image: '/tips/9.jpg',
    Title: '紋身的藝術表達 ｜ 探索紋身如何傳達身份故事',
    Date: '2023-03-25',
    Content: '每位刺青師可能會給出特定的護理建議。請遵從他們的指示，並向他們尋求任何疑問或問題。'
  }
]

// tipsData.value = data.value.Data
</script>
