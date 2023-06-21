<template>
  <div class="border-[1px] border-black rounded p-4">
    <VForm class="grid grid-cols-2 gap-4">
      <div>
        <p>名稱</p>
        <label class="w-[50%]">
          <VField name="名稱" :placeholder="nickname" class="border-[1px] border-gray w-full p-2"></VField>
        </label>
        <p>手機</p>
        <label class="w-[50%]">
          <VField name="手機" :placeholder="tel" class="border-[1px] border-gray w-full p-2"></VField>
        </label>
      </div>
      <div>
        <p>電子信箱</p>
        <label class="w-[50%]">
          <VField name="電子信箱" :placeholder="email" class="border-[1px] border-gray w-full p-2"></VField>
        </label>
        <div class="flex justify-between items-center">
          <div>
            <p>密碼</p>
            <p>{{passStr}}</p>
          </div>
          <button class="btn bg-black text-white">更改密碼</button>
        </div>
      </div>

    </VForm>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/getUser')
const {nickname,passwd,email,tel}=data.value.data
let passStr=''
for(let i=0;i<passwd.length;i++){
  passStr+=`*`
}
</script>
