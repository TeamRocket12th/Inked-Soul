import { useAccountStore } from '~/stores/account'

export default defineNuxtRouteMiddleware((to, _from) => {
  const store = useAccountStore()
  const { checkAuth } = store

  const router = useRouter()
  const authToken = useCookie('token')
  const authCookie = useCookie('data')

  const { Role } = authCookie.value

  if (to.path.includes('normal' || 'artist')) {
    checkAuth()
    if (!authToken.value?.token) {
      router.replace('/account/login')
    }
  }

  if (to.path.includes('normal') && Role !== 'User') {
    router.replace('/account/login')
  }
  if (to.path.includes('artist') && Role !== 'artist') {
    router.replace('/account/login')
  }
})
