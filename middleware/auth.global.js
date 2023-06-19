import { useAccountStore } from '~/stores/account'

export default defineNuxtRouteMiddleware((to, from) => {
  const store = useAccountStore()
  const { checkAuth } = store

  if (to.path.includes('user' || 'artist')) {
    checkAuth()
    const router = useRouter()
    const cookie = useCookie('token')
    const auth1 = cookie.value?.token

    // 📍 持續監聽 token，如果沒有 token 就跳頁
    // setInterval(() => {
    const auth2 = useCookie('token')
    if (auth1 !== auth2.value?.token) {
      router.replace('/account/login')
    }
    // }, 3000)

    if (!auth1) {
      router.replace('/account/login')
    }
  }
})
