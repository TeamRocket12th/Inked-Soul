<template>
  <div>
    <div class="mb-8 grid grid-cols-3 items-center justify-center">
      <button class="h-12 w-12 cursor-pointer">
        <Icon
          name="ic:outline-keyboard-arrow-left"
          size="48"
          class="rounded-full border border-[#D0D0D0] text-secondary duration-200 hover:border-secondary"
        />
      </button>
      <!-- @click="toPreviousPage" -->
      <h4 class="text-center">上架作品集</h4>
      <div></div>
    </div>
    <label
      for="file"
      :class="{ 'border-[#DC3545]': isFileSizeAlert }"
      class="border-1 relative overflow-hidden rounded-lg border-black"
    >
      <UploadAlbumArea />
      <div class="mb-4 flex h-full flex-col items-center justify-center gap-[20px]">
        <Icon name="ic:baseline-add-circle-outline" class="h-[100px] w-[100px]" />
        <p>上傳您的原創作品集</p>
        <p>最大文件大小：4mb</p>
      </div>
      <img
        :src="url"
        alt=""
        class="absolute top-0 h-full w-full object-contain"
        :class="url ? 'bg-black' : ''"
      />
      <input
        id="file"
        type="file"
        accept=".jpg, .png, .svg "
        class="hidden"
        @change.stop="handleOnPreview"
      />
    </label>
    <label for="idea" class="mb-2 block">設計理念</label>
    <textarea
      id="idea"
      class="textarea mb-4 block w-full"
      placeholder="請填入創作想法、作品解說，30字內。"
      v-model="albumnIdea"
    ></textarea>
    <button class="w-full rounded bg-black p-3 text-white" @click="uploadAlbum()">確認上架</button>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
