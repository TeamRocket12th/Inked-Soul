<template>
  <div class="relative flex h-[64px] w-[824px] items-start">
    <!-- 選擇縣市 -->
    <div
      class="dropdown relative h-full"
      :class="route.path === '/artists' ? 'w-[80%]' : ' w-[40%]'"
    >
      <label
        tabindex="0"
        class="height-auto mb-5 flex h-full items-center gap-2 rounded-e-none rounded-s-lg border border-secondary bg-white p-5 focus:outline focus:outline-4 focus:outline-offset-0 focus:outline-black/50"
      >
        <Icon name="ic:outline-room" class="h-6 w-6" />
        <p v-if="cityArr.length === 0" class="text-[#D0D0D0]">選擇縣市</p>
        <div v-if="cityArr.length !== 0" class="flex text-black">
          <p v-for="(item, index) in cityArr" :key="index">{{ item }}<span>&nbsp;</span></p>
        </div>
      </label>
      <div
        class="dropdown-content menu rounded-box absolute left-0 z-[1] w-[824px] bg-base-100 p-2 shadow"
        @click.capture.self="clear('city')"
      >
        <ul class="mb-2 grid grid-cols-4 border-b-2 border-primary pb-2">
          <li class="text-center text-base font-bold">北部</li>
          <li class="text-center text-base font-bold">中部</li>
          <li class="text-center text-base font-bold">南部</li>
          <li class="text-center text-base font-bold">東部</li>
        </ul>
        <ul tabindex="0" class="grid grid-cols-4">
          <!-- 北部 -->
          <li class="mb-4">
            <ul class="ml-0 flex flex-col items-center gap-1 pl-0 before:w-0">
              <li v-for="(city, key) in taiwanCities.northern" :key="key">
                <button
                  :class="
                    cityArr.includes(city)
                      ? 'rounded-none bg-black text-white focus:bg-black'
                      : 'rounded-none bg-white text-black focus:bg-white'
                  "
                  @click.prevent="cityToggle(city)"
                >
                  {{ city }}
                </button>
              </li>
            </ul>
          </li>
          <!-- 中部 -->
          <li>
            <ul class="ml-0 flex flex-col items-center gap-1 pl-0 before:w-0">
              <li v-for="(city, key) in taiwanCities.central" :key="key">
                <button
                  :class="
                    cityArr.includes(city)
                      ? 'rounded-none bg-black text-white focus:bg-black'
                      : 'rounded-none bg-white text-black focus:bg-white'
                  "
                  @click="cityToggle(city)"
                >
                  {{ city }}
                </button>
              </li>
            </ul>
          </li>
          <!-- 南部 -->
          <li>
            <ul class="ml-0 flex flex-col items-center gap-1 pl-0 before:w-0">
              <li v-for="(city, key) in taiwanCities.southern" :key="key">
                <button
                  :class="
                    cityArr.includes(city)
                      ? 'rounded-none bg-black text-white focus:bg-black'
                      : 'rounded-none bg-white text-black focus:bg-white'
                  "
                  @click="cityToggle(city)"
                >
                  {{ city }}
                </button>
              </li>
            </ul>
          </li>
          <!-- 東部 -->
          <li>
            <ul class="ml-0 flex flex-col items-center gap-1 pl-0 before:w-0">
              <li v-for="(city, key) in taiwanCities.eastern" :key="key">
                <button
                  :class="
                    cityArr.includes(city)
                      ? 'rounded-none bg-black text-white focus:bg-black'
                      : 'rounded-none bg-white text-black focus:bg-white'
                  "
                  @click="cityToggle(city)"
                >
                  {{ city }}
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <!-- 選擇風格、元素 -->
    <div v-if="route.path !== '/artists'" class="dropdown h-full w-[40%]">
      <label
        tabindex="0"
        class="mb-5 flex h-full items-center gap-2 border border-secondary bg-white p-5 focus:outline focus:outline-4 focus:outline-offset-0 focus:outline-black/50"
      >
        <Icon name="ic:outline-tune" class="h-6 w-6" />
        <p v-if="searchSelect.length === 0" class="text-[#D0D0D0]">風格及元素</p>
        <div v-if="searchSelect.length !== 0" class="line-clamp-1 w-full">
          <span v-for="(item, index) in searchSelect" :key="index" class="text-black"
            >{{ item }}<span>&nbsp;</span></span
          >
        </div>
      </label>
      <ul
        tabindex="0"
        class="dropdown-content menu rounded-box absolute -right-[55%] z-[1] flex w-[824px] flex-wrap bg-base-100 p-5 shadow"
      >
        <!-- 所有風格 -->
        <li>
          <ul class="ml-0 flex flex-wrap border-b-[0.5px] border-primary pb-4 pl-0 before:w-0">
            <li>
              <button
                :class="styleArr.length === 0 ? 'chosenStyleBtn' : 'styleBtn'"
                @click="clear('style')"
              >
                所有風格
              </button>
            </li>
            <li v-for="(style, index) in styles" :key="index">
              <button
                :class="styleArr.includes(style) ? 'chosenStyleBtn' : 'styleBtn'"
                @click.prevent="styleToggle(style)"
              >
                {{ style }}
              </button>
            </li>
          </ul>
        </li>
        <!-- 所有元素 -->
        <li>
          <ul class="ml-0 flex flex-wrap pl-0 pt-4 before:w-0">
            <li>
              <button
                :class="elementArr.length === 0 ? 'chosenStyleBtn' : 'styleBtn'"
                @click="clear('element')"
              >
                所有元素
              </button>
            </li>
            <li v-for="(element, index) in elements" :key="index">
              <button
                :class="elementArr.includes(element) ? 'chosenStyleBtn' : 'styleBtn'"
                @click.prevent="elementToggle(element)"
              >
                {{ element }}
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <button type="button" class="searchBtn h-full w-[180px]" @click="searchDesign()">
      <slot></slot>
    </button>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useSearchStore } from '~/stores/search'
const store = useSearchStore()
const { allDesignData, allArtistsData, cityArr, styleArr, elementArr, showResult, isSearch } =
  storeToRefs(store)
const { getDesigns, getArtists } = store

const taiwanCities = {
  northern: ['臺北市', '新北市', '基隆市', '桃園市', '新竹市', '新竹縣', '宜蘭縣'],
  central: ['臺中市', '苗栗縣', '彰化縣', '南投縣', '雲林縣'],
  southern: ['高雄市', '臺南市', '嘉義市', '嘉義縣', '屏東縣', '澎湖縣'],
  eastern: ['臺東縣', '花蓮縣']
}
const styles = [
  'Black and Grey 黑灰派',
  'Watercolor 水彩風',
  'Fine Line 單針',
  'Dotwork 點陣',
  'Old School 老派風',
  'Realism 寫實主義',
  'New School 新經典',
  'Blackwork 極黑風格',
  'Geometric 幾何',
  'New Traditional 新傳統',
  'Classic American 經典美式',
  'Traditional Japanese 日式傳統',
  '其他'
]
const elements = [
  '動物',
  '植物',
  '人物',
  '機械',
  '自然界',
  '卡通',
  '宗教',
  '文字',
  '器官',
  '地圖',
  '靈魂',
  '其他'
]

// render 選擇的風格與元素
const searchSelect = ref([])

// 選擇城市
const cityToggle = (input) => {
  const cityIndex = cityArr.value.indexOf(input)
  if (cityArr.value.length === 0) {
    cityArr.value.push(input)
  } else if (cityArr.value.length !== 0 && cityIndex === -1) {
    cityArr.value.push(input)
    cityArr.value.shift()
  } else if (cityArr.value.length !== 0 && cityIndex !== -1) {
    cityArr.value = []
  }
}
// 選擇風格
const styleToggle = (input) => {
  const styleIndex = styleArr.value.indexOf(input)
  const selectIndex = searchSelect.value.indexOf(input)
  if (styleIndex === -1) {
    styleArr.value.push(input)
    searchSelect.value.push(input)
  } else if (styleIndex !== -1) {
    styleArr.value.splice(styleIndex, 1)
    searchSelect.value.splice(selectIndex, 1)
  }
}
// 選擇元素
const elementToggle = (input) => {
  const elementIndex = elementArr.value.indexOf(input)
  const selectIndex = searchSelect.value.indexOf(input)
  if (elementIndex === -1) {
    elementArr.value.push(input)
    searchSelect.value.push(input)
  } else if (elementIndex !== -1) {
    elementArr.value.splice(elementIndex, 1)
    searchSelect.value.splice(selectIndex, 1)
  }
}
// 清除選擇
const clear = (input) => {
  if (input === 'style') {
    searchSelect.value = searchSelect.value.filter((item) => !styleArr.value.includes(item))
    styleArr.value = []
  } else if (input === 'element') {
    searchSelect.value = searchSelect.value.filter((item) => !elementArr.value.includes(item))
    elementArr.value = []
  } else if (input === 'city') {
    console.log('clear city')
    cityArr.value = []
  }
}

// 搜尋
const route = useRoute()
const searchDesign = () => {
  showResult.value = true
  isSearch.value = true
  allDesignData.value = []

  if (route.path === '/') {
    navigateTo('/designs')
  } else if (route.path === '/designs') {
    allDesignData.value = []
    getDesigns(1)
  } else if (route.path === '/artists') {
    allArtistsData.value = []
    getArtists(1)
  }
}

// onMounted(() => {
//   window.addEventListener('click', clickOutside)
// })
</script>
<style scoped></style>
