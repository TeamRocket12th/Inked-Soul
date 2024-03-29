<template>
  <div>
    <h4 class="mb-10">工作室資訊</h4>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col gap-2">
        <div class="flex flex-row items-center justify-between">
          <label for="studio" class="cursor-pointer">店名* </label>
          <VErrorMessage name="店名" class="whitespace-nowrap text-[#DC3545]" />
        </div>
        <div class="relative">
          <VField
            v-if="artistInfoData.StudioName"
            id="studio"
            v-model="artistInfoData.StudioName"
            :rules="isUnder20"
            name="店名"
            class="formInput text-sm text-custom placeholder:text-[#D0D0D0]"
            :class="{ 'border-[#DC3545]': props.errors.店名 }"
            disabled
          />
          <!-- 正確的，因為篩選功能所以不能被改 -->
          <VField
            v-if="!artistInfoData.StudioName"
            id="studio"
            v-model="artistInfoData.StudioName"
            :rules="isUnder20"
            name="店名"
            class="formInput text-sm placeholder:text-[#D0D0D0]"
            :class="{ 'border-[#DC3545]': props.errors.店名 }"
            placeholder="請輸入店名"
          />
          <Icon
            v-if="props.errors.店名"
            name="ic:baseline-error-outline"
            class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
          />
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <div class="flex flex-row items-center justify-between">
          <label for="license" class="cursor-pointer">營利事業登記證*</label>
          <VErrorMessage name="營業登記號" class="whitespace-nowrap text-[#DC3545]" />
        </div>
        <div class="relative">
          <VField
            v-if="artistInfoData.License"
            id="license"
            v-model="artistInfoData.License"
            name="營業登記號"
            class="formInput text-sm text-[#D0D0D0]"
            :class="{ 'border-[#DC3545]': props.errors.營業登記號 }"
            placeholder="請輸入營業登記號"
            disabled
          />
          <!-- 正確的，因為篩選功能所以不能被改 -->
          <VField
            v-if="!artistInfoData.License"
            id="license"
            v-model="artistInfoData.License"
            name="營業登記號"
            class="formInput text-sm"
            :class="{ 'border-[#DC3545]': props.errors.營業登記號 }"
            placeholder="請輸入營業登記號"
          />
          <Icon
            v-if="props.errors.營業登記號"
            name="ic:baseline-error-outline"
            class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
          />
        </div>
      </div>

      <div class="flex flex-1 flex-col items-start gap-1">
        <span>縣市*</span>
        <div class="dropdown-end dropdown relative w-full">
          <label
            tabindex="0"
            class="btn-outline btn mb-1 w-full border-[#D0D0D0] font-normal hover:border-[#D0D0D0] hover:bg-white hover:text-black"
            >{{ studioLoaction }}</label
          >
          <Icon
            name="ic:baseline-keyboard-arrow-down"
            size="20"
            class="absolute right-4 top-[50%] -translate-y-[50%]"
          />
          <ul
            tabindex="0"
            class="dropdown-content menu rounded-box z-10 h-[300px] w-full flex-nowrap overflow-scroll bg-base-100 p-2 shadow"
          >
            <li
              v-for="(city, key) in taiwanCities"
              :key="key"
              class="m-1"
              @click="selectCity(city)"
            >
              <a
                :class="{
                  'bg-gray-100': studioLoaction.includes(city),
                  'pointer-events-none rounded-none border-b font-bold hover:bg-white':
                    errorSelect.includes(city)
                }"
                >{{ city }}</a
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <label for="address" class="cursor-pointer">地址* </label>
        <VField
          id="address"
          v-model="artistInfoData.Address"
          name="地址"
          class="formInput text-sm"
          placeholder="請輸入地址"
        />
      </div>
      <div class="flex flex-col gap-2">
        <div class="flex flex-row items-center justify-between">
          <label for="tel" class="cursor-pointer">電話* </label>
          <VErrorMessage name="電話" class="whitespace-nowrap text-[#DC3545]" />
        </div>
        <div class="relative">
          <VField
            id="tel"
            v-model="artistInfoData.Tel"
            :rules="isTel"
            name="電話"
            class="formInput text-sm"
            :class="{ 'border-[#DC3545]': props.errors.電話 }"
            placeholder="00-00000000"
          />
          <Icon
            v-if="props.errors.電話"
            name="ic:baseline-error-outline"
            class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useAccountStore } from '~/stores/account'

const store = useAccountStore()
const { artistInfoData } = storeToRefs(store)

const { isTel, isUnder20 } = useValidate()

const props = defineProps({
  errors: {
    type: null,
    required: true
  }
})

const taiwanCities = [
  '北部',
  '臺北市',
  '新北市',
  '基隆市',
  '桃園市',
  '新竹市',
  '新竹縣',
  '宜蘭縣',
  '中部',
  '臺中市',
  '苗栗縣',
  '彰化縣',
  '南投縣',
  '雲林縣',
  '南部',
  '高雄市',
  '臺南市',
  '嘉義市',
  '嘉義縣',
  '屏東縣',
  '澎湖縣',
  '東部',
  '臺東縣',
  '花蓮縣'
]
const errorSelect = ['地區', '北部', '中部', '南部', '東部']

const studioLoaction = ref(artistInfoData.value.City ? artistInfoData.value.City : '地區')
const selectCity = (city) => {
  if (!errorSelect.includes(city)) {
    studioLoaction.value = city
  }
}
</script>
<style scoped></style>
