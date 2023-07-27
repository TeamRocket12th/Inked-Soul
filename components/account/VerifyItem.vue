<template>
  <VForm v-slot="{ errors, meta }" class="flex flex-col gap-2">
    <label class="flex flex-col items-start gap-1">
      <span class="mb-1">真實姓名</span>
      <div class="relative w-full">
        <VField
          v-model="temp"
          name="真實姓名"
          rules="required"
          class="formInput"
          placeholder="真實姓名"
          :class="{ 'border-[#DC3545]': errors.真實姓名 }"
        />
        <Icon
          v-if="errors.真實姓名"
          name="ic:baseline-error-outline"
          class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
        />
      </div>

      <div class="h-[14px]">
        <VErrorMessage name="真實姓名" class="whitespace-nowrap text-[#DC3545]" />
      </div>
    </label>
    <label class="flex flex-col items-start gap-1">
      <span class="mb-1">店名</span>
      <div class="relative w-full">
        <VField
          v-model="temp"
          name="店名"
          type="password"
          rules="required"
          class="formInput"
          placeholder="店名"
          :class="{ 'border-[#DC3545]': errors.店名 }"
        />
        <Icon
          v-if="errors.店名"
          name="ic:baseline-error-outline"
          class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
        />
      </div>
      <div class="h-[14px]">
        <VErrorMessage name="店名" class="whitespace-nowrap text-[#DC3545]" />
      </div>
    </label>
    <label class="flex flex-col items-start gap-1">
      <span class="mb-1">營業登記證號</span>
      <div class="relative w-full">
        <VField
          v-model="temp"
          name="營業登記證號"
          type="password"
          rules="required"
          class="formInput"
          placeholder="營業登記證號"
          :class="{ 'border-[#DC3545]': errors.營業登記證號 }"
        />
        <Icon
          v-if="errors.營業登記證號"
          name="ic:baseline-error-outline"
          class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
        />
      </div>
      <div class="h-[14px]">
        <VErrorMessage name="營業登記證號" class="whitespace-nowrap text-[#DC3545]" />
      </div>
    </label>
    <label class="flex flex-col items-start gap-1">
      <span class="mb-1">地址</span>
      <div class="relative w-full">
        <VField
          v-model="temp"
          name="地址"
          type="password"
          rules="required"
          class="formInput"
          placeholder="地址"
          :class="{ 'border-[#DC3545]': errors.地址 }"
        />
        <Icon
          v-if="errors.地址"
          name="ic:baseline-error-outline"
          class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
        />
      </div>
      <div class="h-[14px]">
        <VErrorMessage name="地址" class="whitespace-nowrap text-[#DC3545]" />
      </div>
    </label>
    <label class="flex flex-col items-start gap-1">
      <span class="mb-1">市話</span>
      <div class="relative w-full">
        <VField
          v-model="temp"
          name="市話"
          type="password"
          rules="required"
          class="formInput"
          placeholder="市話"
          :class="{ 'border-[#DC3545]': errors.市話 }"
        />
        <Icon
          v-if="errors.市話"
          name="ic:baseline-error-outline"
          class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
        />
      </div>
      <div class="h-[14px]">
        <VErrorMessage name="市話" class="whitespace-nowrap text-[#DC3545]" />
      </div>
    </label>
  </VForm>
</template>
<script setup>
const temp = ref()
</script>
<style></style>
