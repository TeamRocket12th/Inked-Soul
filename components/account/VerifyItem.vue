<template>
  <VForm v-slot="{ errors }" class="flex flex-col gap-10">
    <div class="flex flex-col items-start gap-2">
      <div class="flex w-full items-center justify-between">
        <label for="realname">真實姓名*</label>
        <VErrorMessage name="真實姓名" class="whitespace-nowrap text-[#DC3545]" />
      </div>
      <div class="relative w-full">
        <VField
          id="realname"
          v-model="temp"
          name="真實姓名"
          rules="required"
          class="w-full border-b border-black px-4 py-3 outline-none"
          placeholder="刺青師真實姓名"
          :class="{ 'border-[#DC3545]': errors.真實姓名 }"
        />
        <Icon
          v-if="errors.真實姓名"
          name="ic:baseline-error-outline"
          class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
        />
      </div>
    </div>
    <div class="flex flex-col items-start gap-2">
      <div class="flex w-full items-center justify-between">
        <label for="studio-name">店名*</label>
        <VErrorMessage name="店名" class="whitespace-nowrap text-[#DC3545]" />
      </div>
      <div class="relative w-full">
        <VField
          id="studio-name"
          v-model="temp"
          name="店名"
          rules="required"
          class="w-full border-b border-black px-4 py-3 outline-none"
          placeholder="完整工作室名稱"
          :class="{ 'border-[#DC3545]': errors.店名 }"
        />
        <Icon
          v-if="errors.店名"
          name="ic:baseline-error-outline"
          class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
        />
      </div>
    </div>
    <div class="flex flex-col items-start gap-2">
      <div class="flex w-full items-center justify-between">
        <label for="license">營利事業登記證號*</label>
        <VErrorMessage name="營登" class="whitespace-nowrap text-[#DC3545]" />
      </div>
      <div class="relative w-full">
        <VField
          id="license"
          v-model="temp"
          name="營登"
          rules="required"
          class="w-full border-b border-black px-4 py-3 outline-none"
          placeholder="例：字第●●●●●●號"
          :class="{ 'border-[#DC3545]': errors.營登 }"
        />
        <Icon
          v-if="errors.營登"
          name="ic:baseline-error-outline"
          class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
        />
      </div>
    </div>
    <div class="flex flex-col items-start gap-2">
      <div class="flex w-full items-center justify-between">
        <label for="address">地址*</label>
        <VErrorMessage name="地址" class="whitespace-nowrap text-[#DC3545]" />
      </div>
      <div class="relative w-full">
        <VField
          id="address"
          v-model="temp"
          name="地址"
          rules="required"
          class="w-full border-b border-black px-4 py-3 outline-none"
          placeholder="工作室鄉鎮市區、里鄰、門牌號碼"
          :class="{ 'border-[#DC3545]': errors.地址 }"
        />
        <Icon
          v-if="errors.地址"
          name="ic:baseline-error-outline"
          class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
        />
      </div>
    </div>
    <div class="flex flex-col items-start gap-2">
      <div class="flex w-full items-center justify-between">
        <label for="phone">電話*</label>
        <VErrorMessage name="電話" class="whitespace-nowrap text-[#DC3545]" />
      </div>
      <div class="relative w-full">
        <VField
          id="phone"
          v-model="temp"
          name="電話"
          rules="required"
          class="w-full border-b border-black px-4 py-3 outline-none"
          placeholder="工作室聯絡電話"
          :class="{ 'border-[#DC3545]': errors.電話 }"
        />
        <Icon
          v-if="errors.電話"
          name="ic:baseline-error-outline"
          class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
        />
      </div>
    </div>
  </VForm>
</template>
<script setup>
const temp = ref()
</script>
<style></style>
