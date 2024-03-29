export default defineNuxtRouteMiddleware((to, _from) => {
  const router = useRouter()

  const authToken = useCookie('token')
  const authCookie = useCookie('data')
  const { Role } = authCookie.value ? authCookie.value : ''

  if (to.path.includes('normal' || 'artist')) {
    if (!authToken.value) {
      router.replace('/account/login')
    }
  }

  const isLogin = () => {
    if (!authToken.value) {
      return false
    } else {
      if (to.path.includes('/account/normal') && Role.toLowerCase() !== 'user') {
        router.replace('/account/login')
      }
      if (to.path.includes('/account/artist') && Role.toLowerCase() !== 'artist') {
        router.replace('/account/login')
      }
    }
  }

  isLogin()
})
