<template>
  <div class="boreder-black rounded border-2">
    <img :src="`${props.photo}`" alt="" />
    <p>{{ $route.params.id }}</p>
    <p>{{ props.nickname }}</p>
    <p>{{ props.studio }}</p>
    <p>風格{{ props.style }}</p>
    <p>元素{{ props.element }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  nickname: {
    type: String,
    required: true
  },
  studio: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: true
  },
  style: {
    type: Array,
    required: true
  },
  element: {
    type: Array,
    required: true
  }
})

// const chStyle = [
//   '風格零',
//   '風格一',
//   '風格二',
//   '風格三',
//   '風格四',
//   '風格五',
//   '風格六',
//   '風格七',
//   '風格八',
//   '風格九',
//   '風格十',
//   '風格十一',
//   '風格十二',
//   '風格十三',
//   '風格十四',
//   '風格十五',
//   '風格十六'
// ]
// const chElement = [
//   '元素零',
//   '元素一',
//   '元素二',
//   '元素三',
//   '元素四',
//   '元素五',
//   '元素六',
//   '元素七',
//   '元素八',
//   '元素九',
//   '元素十',
//   '元素十一',
//   '元素十二',
//   '元素十三',
//   '元素十四',
//   '元素十五',
//   '元素十六'
// ]
// const chStyleString=[]
// const chElementString=[]
// props.style.forEach((item,index)=>{
//   chStyleString.push(chStyle[index])
// })
// props.element.forEach((item,index)=>{
//   chElementString.push(chElement[index])
// })
</script>
