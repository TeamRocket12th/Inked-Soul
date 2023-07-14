<template>
  <ul class="grid grid-cols-9 font-roboto-nl text-xl font-bold">
    <li class="col-start-2 flex flex-col items-center gap-1">
      <div
        :class="{ 'bg-black text-white': props.currentStatus >= 1 }"
        class="flex h-16 w-16 items-center justify-center rounded-full border border-black"
      >
        <p>01</p>
      </div>
      <p class="text-base">訂單成立</p>
      <p v-if="props.currentStatus" class="font-noto-tc text-sm font-normal">
        {{ doneDate.Step01 }}
      </p>
    </li>
    <li class="col-span-2 col-start-3 px-10 pt-8">
      <div class="border-b border-secondary"></div>
    </li>
    <li class="col-start-5 flex flex-col items-center gap-1">
      <div
        :class="{ 'bg-black text-white': props.currentStatus >= 2 }"
        class="flex h-16 w-16 items-center justify-center rounded-full border border-black"
      >
        <p>02</p>
      </div>
      <p class="text-base">完成訂單</p>
      <p v-if="props.currentStatus >= 2" class="font-noto-tc text-sm font-normal">
        {{ doneDate.Step02 }}
      </p>
    </li>
    <li class="col-span-2 col-start-6 px-10 pt-8">
      <div class="border-b border-secondary"></div>
    </li>
    <li class="col-start-8 flex flex-col items-center gap-1">
      <div
        :class="{ 'bg-black text-white': props.currentStatus >= 3 }"
        class="flex h-16 w-16 items-center justify-center rounded-full border border-black"
      >
        <p>03</p>
      </div>
      <p class="whitespace-nowrap text-base">{{ step3Info.title }}</p>
      <p v-if="props.currentStatus >= 3" class="font-noto-tc text-sm font-normal">
        {{ doneDate.Step03 }}
      </p>
      <!-- <button
        v-if="props.currentStatus >= 3"
        class="btn-neutral btn w-[96px] rounded-lg bg-black px-4 py-2 text-white"
      >
        {{ step3Info.commentBtn }}
      </button> -->
    </li>
  </ul>
</template>
<script setup>
const props = defineProps({
  currentStatus: {
    required: true
  },
  stepDate: {
    required: true
  },
  role: {
    required: true,
    type: String
  }
})

const doneDate = reactive({
  Step01: '',
  Step02: '',
  Step03: '',
  Step04: '',
  Step05: ''
})

const { stepDate } = toRefs(props)

watch(
  stepDate,
  (newStepDate) => {
    for (const key in doneDate) {
      if (newStepDate[key].OrderDate) {
        doneDate[key] = newStepDate[key].OrderDate.slice(0, 10)
      } else {
        doneDate[key] = ''
      }
    }
  },
  {
    immediate: true
  }
)

const step3Info = reactive({
  title: '',
  commentBtn: ''
})

const checkRole = () => {
  if (props.role === 'user') {
    step3Info.title = '評價刺青師'
    step3Info.commentBtn = '撰寫評價'
  }
  if (props.role === 'artist') {
    step3Info.title = '獲得評價'
    step3Info.commentBtn = '看評價'
  }
}

onMounted(() => {
  checkRole()
})
</script>
<style scoped></style>
