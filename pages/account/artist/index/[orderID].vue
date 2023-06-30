<template>
  <div>
    <OrderArea>
      <template #orderContext>
        <div class="flex flex-col items-center gap-5">
          <Icon name="ic:sharp-event-available" size="26" />
          <p>訂單成立</p>
          <p>請您於三日內確認本筆訂單，若未於三日內回覆，系統將自動取消訂單。</p>
        </div>
      </template>
      <template #steps>
        <ul class="steps">
          <li class="step-neutral step">訂單成立</li>
          <li class="step-neutral step">完成訂單</li>
          <li class="step">獲得評價</li>
        </ul>
      </template>
      <template #orderDetail>
        <OrderBar :order="order" />
      </template>
    </OrderArea>
    <div class="flex flex-row items-center">
      <!-- You can open the modal using ID.showModal() method -->
      <button class="btn" onclick="my_modal_3.showModal()">取消訂單</button>
      <dialog id="my_modal_3" class="modal">
        <form method="dialog" class="modal-box">
          <button class="btn-ghost btn-sm btn-circle btn absolute right-2 top-2">✕</button>
          <div class="flex flex-col items-center">
            <p>取消訂單</p>
            <p>
              請注意，一旦訂單取消，平台將協助退款給買家。 同時您的認領圖將被自動解除，
              請您重新上架，以便其他買家繼續認領。
            </p>
            <button class="btn">確認取消</button>
          </div>
        </form>
      </dialog>
      <button class="btn">接受訂單</button>
    </div>
  </div>
</template>

<script setup>
import OrderArea from '~/container/order/OrderArea'
import OrderBar from '~/components/order/OrderBar'

const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const cookie = useCookie('token')

const apiBase = runtimeConfig.public.apiBase
const orderID = route.params.orderID
const artistID = cookie.value.data.ID

const { data, error } = await useFetch(`${apiBase}/artist/${artistID}/${orderID}`)
const order = ref([])
// order.value = data.value.data
</script>
<style scoped></style>
