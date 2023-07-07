<template>
  <NuxtLayout name="account">
    <Identity>
      <template #title>
        <h2>登入</h2>
      </template>
    </Identity>
    <LoginItem />
  </NuxtLayout>
</template>
<script setup>
import Identity from '~/components/account/Identity.vue'
import LoginItem from '~/components/account/LoginItem.vue'

definePageMeta({
  layout: false
})
const route = useRoute()
const email = ref(route.query.email)
const guid = ref(route.query.key)

const coverPwd = async () => {
  try {
    const res = await useFetch(
      `https://inkedsoul.rocket-coding.com/api/useremailpwd/?email=${email.value}&guid=${guid.value}`,
      {
        method: 'POST'
      }
    )
    const data = await res.data.value
    console.log(data)
  } catch {
    const error = await res.error.value
    console.log(error)
  }
}

onMounted(() => {
  if (email.value && guid.value) {
    console.log(email.value)
    console.log(guid.value)
    coverPwd()
  }
})
</script>
<style scoped></style>
