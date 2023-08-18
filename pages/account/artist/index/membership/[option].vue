<template>
  <div class="grid grid-cols-9 gap-10">
    <div class="col-span-6">
      <VForm v-slot="{ errors, meta }" class="flex flex-col">
        <div class="flex flex-col gap-5 p-5">
          <h4>個人資料</h4>
          <div class="flex flex-col gap-2">
            <div class="flex flex-row items-center justify-between">
              <label for="realName" class="cursor-pointer">真實姓名 </label>
              <VErrorMessage name="真實姓名" class="whitespace-nowrap text-[#DC3545]" />
            </div>
            <div class="relative">
              <VField
                id="realName"
                v-model="paymentInfo.realName"
                name="真實姓名"
                rules="required"
                class="formInput"
                placeholder="王小明"
                :class="{ 'border-[#DC3545]': errors.真實姓名 }"
              />
              <Icon
                name="ic:baseline-error-outline"
                class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
                v-if="errors.作品名稱"
              />
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <div class="flex flex-row items-center justify-between">
              <label for="phone" class="cursor-pointer">聯絡電話 </label>
              <VErrorMessage name="聯絡電話" class="whitespace-nowrap text-[#DC3545]" />
            </div>
            <div class="relative">
              <VField
                id="phone"
                v-model="paymentInfo.phone"
                name="聯絡電話"
                rules="required|numeric"
                class="formInput"
                placeholder="0912345678"
                :class="{ 'border-[#DC3545]': errors.聯絡電話 }"
              />
              <Icon
                name="ic:baseline-error-outline"
                class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
                v-if="errors.聯絡電話"
              />
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <div class="flex flex-row items-center justify-between">
              <label for="email" class="cursor-pointer">電子信箱 </label>
              <VErrorMessage name="電子信箱" class="whitespace-nowrap text-[#DC3545]" />
            </div>
            <div class="relative">
              <VField
                id="email"
                v-model="paymentInfo.email"
                name="電子信箱"
                rules="required|email"
                class="formInput"
                placeholder="example@gmail.com"
                :class="{ 'border-[#DC3545]': errors.電子信箱 }"
              />
              <Icon
                name="ic:baseline-error-outline"
                class="absolute right-3 top-[50%] h-6 w-6 -translate-y-[50%] text-[#DC3545]"
                v-if="errors.電子信箱"
              />
            </div>
          </div>
        </div>

        <div class="flex flex-1 flex-col gap-5 p-5">
          <h4>付款方式</h4>
          <VField v-slot="{ value }" name="drink" as="select" class="formInput">
            <option value="" disabled>選擇付費方式</option>
            <option value="" :selected="value">線上信用卡付款</option>
          </VField>

          <div class="dropdown">
            <label
              tabindex="0"
              class="btn-outline btn mb-1 w-full justify-start border-[#D0D0D0] bg-white font-normal"
              >{{ paymentInfo.paymentOption }}</label
            >
            <ul
              tabindex="0"
              class="dropdown-content menu rounded-box z-[1] w-full bg-base-100 p-2 shadow"
            >
              <li @click="selectPayment('線上信用卡付款')"><a>線上信用卡付款</a></li>
            </ul>
          </div>
        </div>

        <div class="flex flex-1 flex-col gap-5 p-5">
          <h4>訂單金額</h4>
          <div class="flex flex-row justify-between">
            <div class="flex flex-wrap items-end">
              <p>{{ plan.title }}＄{{ plan.price }}</p>
              <!-- <p>（2023-07-02至2023-08-02）</p> -->
            </div>
            <div class="flex flex-wrap items-end">
              <h4>應付金額</h4>
              <h2 class="font-roboto-nl">＄{{ plan.price }}</h2>
            </div>
          </div>
        </div>
        <button :disabled="!meta.valid" class="btn-neutral btn bg-black text-white" type="button">
          確認付款
        </button>
      </VForm>
    </div>

    <div class="col-span-3">
      <h4 class="mb-5">訂單內容</h4>
      <PlansCard :info="plan.allInfo" class="bg-primary" />
    </div>
  </div>
</template>
<script setup>
import PlansCard from '~/components/admin/PlansCard.vue'
import { usePlanPaymentStore } from '~/stores/planPayment'
import { storeToRefs } from 'pinia'

const route = useRoute()
const store = usePlanPaymentStore()
const { paymentInfo } = storeToRefs(store)

const planInfo = [
  {
    title: '免費方案',
    price: '0',
    yourPlan: true,
    planInfo: ['不限時間', '免費上傳五張認領圖', '免費上傳五張作品集']
  },
  {
    title: '月費方案',
    price: '600',
    yourPlan: false,
    planInfo: ['一個月內', '無限上傳認領圖', '無限上傳作品集']
  },
  {
    title: '年費方案',
    price: '5000',
    yourPlan: false,
    planInfo: ['一年內', '無限上傳認領圖', '無限上傳作品集']
  }
]

const plan = reactive({
  title: '',
  price: '',
  allInfo: ''
})

const handleOption = () => {
  plan.title = planInfo[route.params.option].title
  plan.price = planInfo[route.params.option].price
  plan.allInfo = planInfo[route.params.option]
}

onMounted(() => {
  handleOption()
})

paymentInfo.value.paymentOption = '選擇付費方式'
const selectPayment = (option) => {
  paymentInfo.value.paymentOption = option
}
</script>
<style scoped></style>
