<template>
  <tr class="h-[100px]">
    <td class="text-center">
      <img :src="`${props.order.image}`" class="w-[100px]" />
    </td>
    <td class="text-center">{{ props.order.name }}</td>
    <td class="text-center">{{ props.order.artist }}</td>
    <td class="text-center">{{ props.order.id }}</td>
    <td class="text-center">{{ props.order.orderDay }}</td>
    <td class="text-center">{{ props.order.date }}<br />{{ props.order.time }}</td>
    <td class="text-center">{{ props.order.deposit }}</td>
    <td class="group relative text-center hover:underline">
      {{ props.order.status }}
      <div
        v-if="props.status === '已評價'"
        class="absolute right-0 top-16 hidden w-[300px] border-[1px] border-black p-4 group-hover:block"
      >
        <div class="flex justify-between">
          <div class="flex">
            <img :src="`${props.order.artistImg}`" alt="" class="rounede-full w-[20%]" />
            <span>{{ props.order.artist }}</span>
          </div>
          <p>{{ props.order.commentDate }}</p>
        </div>
        <div class="flex">
          <Icon :name="`${item}`" size:24 v-for="(item, index) in starArr" :key="index" />
        </div>
        <div class="">
          <p>{{ props.order.comment }}</p>
        </div>
      </div>
    </td>
  </tr>
</template>
<script setup>
const props = defineProps({
  order: {
    type: Object,
    required: true
  },
  status: {
    type: String,
    required: true
  }
})

const starAmount = props.order.star
const starArr = []
for (let i = 0; i < starAmount; i++) {
  starArr.push('ic:baseline-star')
}
</script>
