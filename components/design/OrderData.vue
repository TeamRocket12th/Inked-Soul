<template>
  <div class="mb-10">
    <h2 class="text-2xl">預約資料</h2>
    <div class="border-[1px] border-black p-4">
      <span>真實姓名</span>
      <label>
        <VField
          v-model="userData.name"
          name="真實姓名"
          rules="required"
          class="w-full border"
        />
        <VErrorMessage name="真實姓名" class="whitespace-nowrap" />
      </label>
      <span>聯絡電話</span>
      <label>
        <VField v-model="userData.tel" name="聯絡電話" rules="required" class="w-full border" />
        <VErrorMessage name="聯絡電話" class="whitespace-nowrap" />
      </label>
      <span>電子信箱</span>
      <label>
        <VField
          name="電子信箱"
          rules="required|email"
          class="w-full border"
          v-model="userData.email"
        />
        <VErrorMessage name="電子信箱" class="whitespace-nowrap" />
      </label>
      <div class="grid grid-cols-2">
        <!-- 月曆 -->
        <div>
          <p>預約日期</p>
          <div>
            <ClientOnly>
            <VDatePicker v-model="userData.date"
              :min-date="minDate">
              <template #default="{ togglePopover }">
                <button
                  class="rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white"
                  @click="togglePopover"
                >
                  {{date}}
                </button>
              </template>
            </VDatePicker>
          </ClientOnly>
          </div>
        </div>
        <div>
          <p>預約時段</p>
          <select v-model="userData.time">
            <option>上午（開店時間-12:00）</option>
            <option>下午（12:00-18:00）</option>
            <option>晚上（18:00-閉店時間）</option>
          </select>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script setup>
import { useOrderStore } from '~/stores/order'
import { storeToRefs } from 'pinia'
const store=useOrderStore()
const { userData } = storeToRefs(store)
const date = new Date()
date.setDate(date.getDate() + 5); 

const minDate = date.toISOString().slice(0, 10);  


</script>
