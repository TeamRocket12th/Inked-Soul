<template>
  <div class="mb-[90px] w-full">
    <p class="mb-6 font-bold">留言區</p>
    <div class="mb-5 flex w-full flex-row items-center justify-between gap-5">
      <input
        type="text"
        placeholder="發表留言"
        class="w-full border-b border-black bg-transparent px-6 py-3 outline-none"
      />
      <button type="button" class="btn-neutral btn">留言</button>
    </div>
    <ul class="flex flex-col gap-7">
      <li class="flex flex-row items-center gap-3">
        <img src="" alt="" class="h-9 w-9 rounded-full" />
        <div class="flex flex-col">
          <div class="flex flex-row items-center gap-3">
            <p>cat</p>
            <p>2023-05-24</p>
          </div>
          <p>我可以在購買刺青圖片後做修改嗎？</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
const runtimeConfig = useRuntimeConfig()
const apiBase = runtimeConfig.public.apiBase
const route = useRoute()

const postComment = () => {
  const { data, error } = useFetch()
}

// v-for="(comment, key) in data.value.Data"
// {{comment.Photo}}
// {{comment.Nickname}}
// {{comment.Date}}
// {{comment.Content}}
const { data, error } = await useFetch(`${apiBase}/design/comment/${route.params.designID}`)
// console.log('fetch', data.value)
</script>
<style scoped></style>
