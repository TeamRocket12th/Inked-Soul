<template>
  <div class="relative flex flex-row items-start">
    <details class="dropdown mb-32">
      <summary
        class="mb-5 flex flex-row items-center gap-2 rounded-l-lg border border-secondary bg-white p-5"
      >
        <Icon name="ic:outline-room" class="h-6 w-6" />
        <p class="text-[#D0D0D0]">選擇縣市</p>
      </summary>
      <ul
        class="dropdown-content menu z-[1] flex w-[388px] flex-row gap-10 rounded-lg bg-base-100 p-5 shadow"
      >
        <li>
          <ul class="ml-0 flex flex-col items-center gap-3 pl-0 before:w-0">
            <p class="pb-3 text-base font-bold">北部</p>
            <li v-for="(city, key) in taiwanCities.northern">
              {{ city }}
            </li>
          </ul>
        </li>
        <li>
          <ul class="ml-0 flex flex-col items-center gap-3 pl-0 before:w-0">
            <p class="pb-3 text-base font-bold">中部</p>
            <li v-for="(city, key) in taiwanCities.central">
              {{ city }}
            </li>
          </ul>
        </li>
        <li>
          <ul class="ml-0 flex flex-col items-center gap-3 pl-0 before:w-0">
            <p class="pb-3 text-base font-bold">南部</p>
            <li v-for="(city, key) in taiwanCities.southern">
              {{ city }}
            </li>
          </ul>
        </li>
        <li>
          <ul class="ml-0 flex flex-col items-center gap-3 pl-0 before:w-0">
            <p class="pb-3 text-base font-bold">東部</p>
            <li v-for="(city, key) in taiwanCities.eastern">
              {{ city }}
            </li>
          </ul>
        </li>
      </ul>
    </details>
    <details
      class="dropdown static mb-32"
      @click.stop="dropdown = true"
      :open="dropdown === false ? false : true"
    >
      <summary class="mb-5 flex flex-row items-center gap-2 border border-secondary bg-white p-5">
        <Icon name="ic:outline-tune" class="h-6 w-6" />
        <p class="text-[#D0D0D0]">風格及元素</p>
      </summary>

      <ul
        class="dropdown-content menu absolute left-0 right-0 z-[1] w-full rounded-lg bg-base-100 p-2 shadow"
      >
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </details>
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

const dropdown = ref(false)
const clickOutside = (e) => {
  dropdown.value = false
}

onMounted(() => {
  window.addEventListener('click', clickOutside)
})
</script>
<style scoped></style>
