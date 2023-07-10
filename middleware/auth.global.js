import { useAccountStore } from '~/stores/account'

export default defineNuxtRouteMiddleware((to, _from) => {
  const store = useAccountStore()
  const { checkAuth } = store

  const router = useRouter()

  const authToken = useCookie('token')
  const authCookie = useCookie('data')
  const { Role } = authCookie.value ? authCookie.value : ''

  if (to.path.includes('normal' || 'artist')) {
    checkAuth()
    if (!authToken.value) {
      console.log('沒有 token 的問題')
      router.replace('/account/login')
    }
  }

  const isLogin = () => {
    if (!authToken.value) {
      return
    } else {
      if (to.path.includes('/account/normal') && Role !== 'User') {
        router.replace('/account/login')
      }
      if (to.path.includes('/account/artist') && Role !== 'Artist') {
        router.replace('/account/login')
      }
    }
  }

  isLogin()
})
