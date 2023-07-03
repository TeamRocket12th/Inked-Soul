<template>
  <div class="relative flex w-[800px] items-start">
    <!-- 選擇縣市 -->
    <div class="dropdown relative w-[40%]">
      <label
        tabindex="0"
        class="height-auto mb-5 flex items-center rounded-e-none rounded-s-lg border border-secondary bg-white p-5"
      >
        <Icon name="ic:outline-room" class="h-6 w-6" />
        <p class="text-[#D0D0D0]">選擇縣市</p>
      </label>

      <ul
        tabindex="0"
        class="dropdown-content menu rounded-box absolute left-0 z-[1] grid w-[800px] grid-cols-3 bg-base-100 p-2 shadow"
      >
        <li class="mb-4">
          <ul class="ml-0 flex flex-col items-center gap-3 pl-0 before:w-0">
            <p class="text-base font-bold">北部</p>
            <li v-for="(city, key) in taiwanCities.northern">
              {{ city }}
            </li>
          </ul>
        </li>
        <li>
          <ul class="ml-0 flex flex-col items-center gap-3 pl-0 before:w-0">
            <p class="text-base font-bold">中部</p>
            <li v-for="(city, key) in taiwanCities.central">
              {{ city }}
            </li>
          </ul>
        </li>
        <li>
          <ul class="ml-0 flex flex-col items-center gap-3 pl-0 before:w-0">
            <p class="text-base font-bold">南部</p>
            <li v-for="(city, key) in taiwanCities.southern">
              {{ city }}
            </li>
          </ul>
        </li>
        <li>
          <ul class="ml-0 flex flex-col items-center gap-3 pl-0 before:w-0">
            <p class="text-base font-bold">東部</p>
            <li v-for="(city, key) in taiwanCities.eastern">
              {{ city }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- 選擇風格、元素 -->
    <div class="dropdown w-[40%]">
      <label tabindex="0" class="mb-5 flex items-center border border-secondary bg-white p-5">
        <Icon name="ic:outline-tune" class="h-6 w-6" />
        <p class="text-[#D0D0D0]">風格及元素</p>
      </label>
      <ul
        tabindex="0"
        class="dropdown-content menu rounded-box absolute left-[-300px] z-[1] flex w-[800px] flex-wrap bg-base-100 p-2 shadow"
      >
        <li v-for="(style, index) in styles" :key="index">
          <button
            class="m-2 block inline-block whitespace-nowrap rounded-full border border-black p-2 focus:bg-black focus:text-white"
            type="button"
          >
            {{ style }}
          </button>
        </li>
      </ul>
    </div>
    <button
      type="button"
      class="btn-neutral btn h-fit rounded-none rounded-r-lg p-5 px-10 text-base"
    >
      搜尋認領圖
    </button>
  </div>
</template>
<script setup>
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

// const dropdown = ref(false)
// const clickOutside = (e) => {
//   dropdown.value = false
// }

// onMounted(() => {
//   window.addEventListener('click', clickOutside)
// })
</script>
<style scoped></style>
