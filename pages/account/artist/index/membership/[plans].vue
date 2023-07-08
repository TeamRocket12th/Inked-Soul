<template>
  <div class="grid grid-cols-9 gap-10">
    <div class="col-span-6">
      <VForm v-slot="{ errors, meta }" class="flex flex-1 flex-col gap-5 p-5">
        <h4>個人資料</h4>
        <div class="flex flex-col gap-2">
          <div class="flex flex-row items-center justify-between">
            <label for="realName" class="cursor-pointer">真實姓名 </label>
            <VErrorMessage name="真實姓名" class="whitespace-nowrap text-[#DC3545]" />
          </div>
          <div class="relative">
            <VField
              id="realName"
              v-model="tattooName"
              name="真實姓名"
              rules="required"
              class="formInput"
              placeholder="王小明"
              :class="{ 'border-[#DC3545]': errors.真實姓名 }"
            />
            <Icon
              name="ic:baseline-error-outline"
              class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
              v-if="errors.作品名稱"
            />
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <div class="flex flex-row items-center justify-between">
            <label for="phone" class="cursor-pointer">聯絡電話 </label>
            <VErrorMessage name="聯絡電話" class="whitespace-nowrap text-[#DC3545]" />
          </div>
          <div class="relative">
            <VField
              id="phone"
              v-model="tattooName"
              name="聯絡電話"
              rules="required"
              class="formInput"
              placeholder="0912345678"
              :class="{ 'border-[#DC3545]': errors.聯絡電話 }"
            />
            <Icon
              name="ic:baseline-error-outline"
              class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
              v-if="errors.聯絡電話"
            />
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <div class="flex flex-row items-center justify-between">
            <label for="email" class="cursor-pointer">電子信箱 </label>
            <VErrorMessage name="電子信箱" class="whitespace-nowrap text-[#DC3545]" />
          </div>
          <div class="relative">
            <VField
              id="email"
              v-model="tattooName"
              name="電子信箱"
              rules="required"
              class="formInput"
              placeholder="example@gmail.com"
              :class="{ 'border-[#DC3545]': errors.電子信箱 }"
            />
            <Icon
              name="ic:baseline-error-outline"
              class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
              v-if="errors.電子信箱"
            />
          </div>
        </div>
      </VForm>
    </div>

    <div class="col-span-3">
      <h4 class="mb-5">訂單內容</h4>
      <PlansCard :info="memberShipPlan" />
    </div>
  </div>
</template>
<script setup>
import PlansCard from '~/components/admin/PlansCard.vue'
const memberShipPlan = {
  title: '免費方案',
  price: '0',
  yourPlan: true,
  planInfo: ['不限時間', '免費上傳五張認領圖', '免費上傳五張作品集']
}
</script>
<style scoped></style>
