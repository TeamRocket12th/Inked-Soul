<template>
  <div>
    <p>單一用戶的追蹤刺青師總表</p>
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()
const APIBASE = runtimeConfig.public.APIBASE
// 取得追蹤刺青師列表
const followingData = ref()
// const getFollowings = () => {
//   nextTick(async()=>{})
//   const {data}=await useFetch(`${APIBASE}/api/`)
// }
onMounted(() => {
  getFollowings()
})
</script>

<style lang="scss" scoped></style>
