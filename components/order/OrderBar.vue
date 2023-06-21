<template>
  
    <tr class="h-[100px] hover:cursor-pointer hover:bg-gray-300"
        @click="jump(props.order.id)"
      >
        <td class="text-center">
          <img :src="`${props.order.image}`" class="w-[100px]" />
        </td>
        <td class="text-center">{{ props.order.name }}</td>
        <td class="text-center">{{ props.order.artist }}</td>
        <td class="text-center">{{ props.order.id }}</td>
        <td class="text-center">{{ props.order.orderDay }}</td>
        <td class="text-center">{{ props.order.date }}<br />{{ props.order.time }}</td>
        <td class="text-center">{{ props.order.deposit }}</td>
        <td class="text-center">{{ props.order.status }}</td>
      </tr>
  
</template>
<script setup>
const props=defineProps({
  order:{
    type:Object,
    required:true
  }
})

console.log(props.order)
const jump = (input) => {
  navigateTo(`/account/normal/${input}`)
}
</script>