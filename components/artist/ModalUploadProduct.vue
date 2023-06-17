<template>
  <div>
    <h3>上架認領圖</h3>
    <div class="grid grid-cols-2 gap-[20px]">
      <!-- upload-img -->
      <label for="file" class="relative rounded-lg border border-black">
        <div class="flex h-full flex-col items-center justify-center gap-[20px]">
          <Icon name="ic:baseline-add-circle-outline" class="h-[100px] w-[100px]" />
          <p>上傳您的原創認領圖</p>
          <p>最大文件大小：4mb</p>
        </div>
        <img
          :src="url"
          alt=""
          class="absolute top-[50%] h-auto w-full -translate-y-[50%] bg-gray-100"
        />
        <input
          type="file"
          accept=".jpg, .png, .svg "
          id="file"
          class="hidden"
          @change.stop="handleOnPreview"
        />
      </label>
      <!-- 產品資訊 -->
      <div>
        <VForm class="flex flex-col gap-[20px]">
          <label class="flex flex-col items-start">
            <span>作品名稱</span>
            <VField name="作品名稱" rules="required" class="formInput" placeholder="作品名稱" />
            <VErrorMessage name="作品名稱" class="whitespace-nowrap" />
          </label>
          <label class="flex flex-col items-start">
            <!-- 待改成 select -->
            <span>建議部位（最多選擇兩個部位）</span>
            <VField name="建議部位" rules="required" class="formInput" placeholder="建議部位" />
            <VErrorMessage name="建議部位" class="whitespace-nowrap" />
          </label>
          <label class="flex flex-col items-start">
            <span>作品尺寸（cm*cm）</span>
            <VField name="作品尺寸" rules="required" class="formInput" placeholder="12cm*12cm" />
            <VErrorMessage name="作品尺寸" class="whitespace-nowrap" />
          </label>
          <label class="flex flex-col items-start">
            <span>預計作業時間（時）</span>
            <VField name="預計作業時間" rules="required" class="formInput" placeholder="4小時" />
            <VErrorMessage name="預計作業時間" class="whitespace-nowrap" />
          </label>
        </VForm>
      </div>
    </div>
    <!-- 設計理念（30字內） -->
    <div>
      <VForm>
        <label class="flex flex-col">
          <span>設計理念（30字內）</span>
          <VField
            as="textarea"
            name="設計理念"
            rules="max:30"
            placeholder="填寫您的設計理念"
            class="textarea-bordered textarea min-h-[72px]"
          />
          <VErrorMessage name="設計理念" class="whitespace-nowrap" />
        </label>
        <div class="grid grid-cols-3 gap-3">
          <label class="flex flex-col items-start">
            <span>訂金（元）</span>
            <VField name="訂金" rules="required" class="formInput" placeholder="2000元" />
            <VErrorMessage name="訂金" class="whitespace-nowrap" />
          </label>
          <label class="flex flex-col items-start">
            <span>尾款（元）</span>
            <VField name="尾款" rules="required" class="formInput" placeholder="5000元" />
            <VErrorMessage name="尾款" class="whitespace-nowrap" />
          </label>
          <label class="flex flex-col items-start">
            <span>總金額（元）</span>
            <VField name="總金額" rules="required" class="formInput" placeholder="7000元" />
            <VErrorMessage name="總金額" class="whitespace-nowrap" />
          </label>
        </div>
        <p>
          <Icon
            name="ic:baseline-error-outline"
          />本平台僅收<strong>「訂金」</strong>，剩餘尾款請於預約當日與顧客交易。
        </p>
      </VForm>
      <UpdateStyle />
      <UpdateElement />
      <button type="button" class="btn w-full">更新個人資料</button>
    </div>
  </div>
</template>
<script setup>
import UpdateStyle from './UpdateStyle.vue'
import UpdateElement from './UpdateElement.vue'
const url = ref()
const handleOnPreview = (event) => {
  const file = event.target.files[0]
  if (file.size > 1024 * 1024 * 4) {
    return
  }

  url.value = URL.createObjectURL(event.target.files[0])
}
</script>
<style scoped></style>
