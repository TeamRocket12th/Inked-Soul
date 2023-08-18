<template>
  <div ref="searchBar" class="relative flex h-[64px] min-w-[308px] md:w-[500px] lg:w-[824px]">
    <!-- 選擇縣市 -->
    <div
      class="dropdown relative h-full"
      :class="route.path === '/artists' ? `md:w-[320px] lg:w-[644px]` : `md:w-[150px] lg:w-[322px]`"
    >
      <div v-if="route.path !== '/artists'" class="h-[0px] md:w-[10px] lg:w-[322px]"></div>
      <div
        v-if="route.path === '/artists'"
        class="h-[0px] min-w-[128px] md:w-[320px] lg:w-[644px]"
      ></div>
      <label
        tabindex="0"
        class="z-1 indicator mb-5 flex h-full w-full items-center rounded-e-none rounded-s-lg border border-secondary bg-white p-4 lg:p-5"
      >
        <!-- 外框 focus:outline focus:outline-4 focus:outline-offset-0 focus:outline-black/50 -->
        <!-- 數字標示 -->
        <span
          v-if="isMobile && cityArr.length !== 0"
          class="badge badge-secondary indicator-start indicator-item h-6 w-6 rounded-full border-none bg-black text-white"
          >{{ cityArr.length }}</span
        >
        <!-- 欄位 -->
        <div tabindex="0" class="flex cursor-pointer items-center">
          <Icon name="ic:outline-room" size="24" class="mr-1 lg:mr-2" />
          <p
            v-if="cityArr.length === 0"
            class="hidden text-ellipsis text-xs text-[#D0D0D0] md:block md:text-sm lg:text-base"
          >
            選擇縣市
          </p>
          <div v-if="cityArr.length !== 0 && width >= 768" class="flex text-black">
            <p v-for="(item, index) in cityArr" :key="index">{{ item }}<span>&nbsp;</span></p>
          </div>
        </div>
      </label>

      <div
        class="dropdown-content menu absolute left-0 z-[1] rounded-lg bg-base-100 p-2 shadow md:w-[500px] lg:w-[824px]"
        @click.capture.self="clear('city')"
      >
        <div class="h-[0px] min-w-[308px] md:w-[500px] lg:w-[824px]"></div>
        <ul v-if="width >= 768" class="mb-2 grid w-full grid-cols-4 border-b-2 border-primary pb-2">
          <li class="text-center text-base font-bold">北部</li>
          <li class="text-center text-base font-bold">中部</li>
          <li class="text-center text-base font-bold">南部</li>
          <li class="text-center text-base font-bold">東部</li>
        </ul>
        <ul v-if="width >= 768" tabindex="0" class="grid grid-cols-4">
          <!-- 北部 -->
          <li class="mb-4">
            <ul class="ml-0 flex flex-col items-center gap-1 pl-0 before:w-0">
              <li v-for="(city, key) in taiwanCities.northern" :key="key">
                <button
                  :class="
                    cityArr.includes(city)
                      ? 'rounded-none bg-black text-xs text-white focus:bg-black md:text-sm'
                      : 'rounded-none bg-white text-xs text-black focus:bg-white md:text-sm'
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
                      ? 'rounded-none bg-black text-xs text-white focus:bg-black md:text-sm'
                      : 'rounded-none bg-white text-xs text-black focus:bg-white md:text-sm'
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
                      ? 'rounded-none bg-black text-xs text-white focus:bg-black md:text-sm'
                      : 'rounded-none bg-white text-xs text-black focus:bg-white md:text-sm'
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
                      ? 'rounded-none bg-black text-xs text-white focus:bg-black md:text-sm'
                      : 'rounded-none bg-white text-xs text-black focus:bg-white md:text-sm'
                  "
                  @click="cityToggle(city)"
                >
                  {{ city }}
                </button>
              </li>
            </ul>
          </li>
        </ul>
        <!-- 手機板地區選項 -->
        <ul v-if="width < 768">
          <li>
            <p class="text-center text-base font-bold">北部</p>
            <ul class="flex flex-wrap">
              <li v-for="(city, key) in taiwanCities.northern" :key="key">
                <button
                  :class="
                    cityArr.includes(city)
                      ? 'rounded-none bg-black text-xs text-white focus:bg-black md:text-sm'
                      : 'rounded-none bg-white text-xs text-black focus:bg-white md:text-sm'
                  "
                  @click.prevent="cityToggle(city)"
                >
                  {{ city }}
                </button>
              </li>
            </ul>
          </li>
          <li>
            <p class="text-center text-base font-bold">中部</p>
            <ul class="flex flex-wrap">
              <li v-for="(city, key) in taiwanCities.central" :key="key">
                <button
                  :class="
                    cityArr.includes(city)
                      ? 'rounded-none bg-black text-xs text-white focus:bg-black md:text-sm'
                      : 'rounded-none bg-white text-xs text-black focus:bg-white md:text-sm'
                  "
                  @click="cityToggle(city)"
                >
                  {{ city }}
                </button>
              </li>
            </ul>
          </li>
          <li>
            <p class="text-center text-base font-bold">南部</p>
            <ul class="flex flex-wrap">
              <li v-for="(city, key) in taiwanCities.southern" :key="key">
                <button
                  :class="
                    cityArr.includes(city)
                      ? 'rounded-none bg-black text-xs text-white focus:bg-black md:text-sm'
                      : 'rounded-none bg-white text-xs text-black focus:bg-white md:text-sm'
                  "
                  @click="cityToggle(city)"
                >
                  {{ city }}
                </button>
              </li>
            </ul>
          </li>
          <li>
            <p class="text-center text-base font-bold">東部</p>
            <ul class="flex flex-wrap">
              <li v-for="(city, key) in taiwanCities.eastern" :key="key">
                <button
                  :class="
                    cityArr.includes(city)
                      ? 'rounded-none bg-black text-xs text-white focus:bg-black md:text-sm'
                      : 'rounded-none bg-white text-xs text-black focus:bg-white md:text-sm'
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
    <div v-if="route.path !== '/artists'" class="dropdown h-full md:w-[170px] lg:w-[322px]">
      <div class="h-[0px] md:w-[170px] lg:w-[322px]"></div>
      <label
        tabindex="0"
        class="indicator mb-5 flex h-full w-full items-center border border-secondary bg-white p-4 lg:p-5"
      >
        <!-- 外框 focus:outline focus:outline-4 focus:outline-offset-0 focus:outline-black/50  -->
        <!-- 數字標示 -->
        <span
          v-if="isMobile && searchSelect.length !== 0"
          class="badge badge-secondary indicator-start indicator-item h-6 w-6 rounded-full border-none bg-black text-white"
          >{{ searchSelect.length }}</span
        >
        <!-- 欄位 -->
        <div tabindex="0" class="flex cursor-pointer items-center">
          <div class="mr-1 lg:mr-2">
            <Icon name="ic:outline-tune" size="24" />
          </div>
          <p
            v-if="searchSelect.length === 0"
            class="hidden text-ellipsis text-xs text-[#D0D0D0] sm:text-xs md:block md:text-sm lg:text-base"
          >
            風格及元素
          </p>
          <div v-if="searchSelect.length !== 0" class="hidden md:line-clamp-1">
            <span v-for="(item, index) in searchSelect" :key="index" class="text-black"
              >{{ item }}<span>&nbsp;</span></span
            >
          </div>
        </div>
      </label>
      <!-- 風格元素選項 -->
      <ul
        tabindex="0"
        class="dropdown-content menu absolute -left-[77px] z-[1] flex min-w-[308px] flex-wrap rounded-lg bg-base-100 p-5 shadow md:-left-[150px] md:w-[500px] lg:-left-[322px] lg:w-[824px]"
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
    <button type="button" class="searchBtn h-full !w-[180px]" @click="searchDesign()">
      <slot></slot>
    </button>
  </div>
</template>
<script setup>
import { useWindowSize } from 'vue-window-size'
import { storeToRefs } from 'pinia'
import { useSearchStore } from '~/stores/search'
const store = useSearchStore()
const {
  allDesignData,
  allArtistsData,
  cityArr,
  styleArr,
  elementArr,
  showResult,
  isSearch,
  searchSelect
} = storeToRefs(store)
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

// 監聽視窗寬度
const isMobile = ref(false)
const { width } = useWindowSize()
watch(width, (_newValue) => {
  if (_newValue <= 768) {
    isMobile.value = true
  } else {
    isMobile.value = false
  }
})
onMounted(() => {
  if (width.value <= 768) {
    isMobile.value = true
  }
})

// 監聽搜尋欄寬度
const searchBar = ref(null)
const searchBarWidth = ref(0)
const optionBoxWidth = ref(0)
const optionBoxWidth2 = ref(0)
let searchbar
function handleResize() {
  searchBarWidth.value = searchbar.offsetWidth
  optionBoxWidth.value = (searchBarWidth.value - 180) / 2
  optionBoxWidth2.value = searchBarWidth.value - 180
}
watch(searchBarWidth, () => {
  handleResize()
})
onMounted(() => {
  searchbar = searchBar.value
  handleResize()
  window.addEventListener('resize', handleResize)
})

// onBeforeUnmount(() => {
//   window.removeEventListener('resize', handleResize)
// })
</script>
<style scoped></style>
