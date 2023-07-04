<template>
  <div>
    <button class="btn-neutral btn w-full text-white" onclick="my_modal_3.showModal()">
      確認付款
    </button>
    <dialog id="my_modal_3" class="modal">
      <form method="dialog" class="modal-box text-center">
        <button class="btn-ghost btn-sm btn-circle btn absolute right-2 top-2">
          <Icon name="ic:outline-clear" size="24" />
        </button>
        <h3 class="text-lg font-bold">確認無誤，撥款刺青師 ${{ props.deposit }}元</h3>
        <p class="py-4">
          提醒您，請再次確認完整訂單。 <br />
          訂單成立後，平台將會協助把訂金撥款給賣家。
        </p>
        <button class="btn-neutral btn px-5 text-white" @click="postOrder">確認付款</button>
      </form>
    </dialog>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useOrderStore } from '~/stores/order'
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
