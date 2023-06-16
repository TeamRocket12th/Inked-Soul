<template>
  <div>
    <button class="btn w-full" onclick="my_modal_3.showModal()">確認付款</button>
    <dialog id="my_modal_3" class="modal">
      <form method="dialog" class="modal-box">
        <button class="btn-ghost btn-sm btn-circle btn absolute right-2 top-2">✕</button>
        <h3 class="text-lg font-bold">確認無誤，將撥款訂金${{ props.deposit }}給刺青師</h3>
        <p class="py-4">
          提醒您，一旦確認完成訂單後，平台將會協助把訂金撥款給賣家。 請再次確認完整訂單。
        </p>
        <button class="mx-auto flex bg-gray-100 p-4" @click="postOrder">確認付款</button>
      </form>
    </dialog>
  </div>
</template>
<script setup>
import { useOrderStore } from '~/stores/order'
import { storeToRefs } from 'pinia'
const route = useRoute()
const designID = route.params.designID
const store = useOrderStore()
const { postOrder } = store
const { id } = storeToRefs(store)
id.value = designID
const props = defineProps({
  deposit: {
    type: Number,
    required: true
  }
})
</script>
