export const useAccountStore = defineStore('account', () => {
  const identity = ref('normal')
  const email = ref('nancy@gmail.com')
  const password = ref('1234567890')
  const confirmPassword = ref()

  const cookie = useCookie('token')
  const router = useRouter()

  const loginSubmit = async () => {
    const { data, error } = useFetch(`http://localhost:5005/login/${identity.value}`, {
      method: 'POST',
      body: {
        email: email.value,
        password: password.value
      }
    })

    if (data.value) {
      cookie.value = {
        token: '1234'
      }
      router.replace('/account/user/editinfo') // 登入成功跳轉到首頁
      // console.log('token', data.value)
      // console.log('cookie', cookie.value.token)
    } else if (error.value) {
      cookie.value = null
      // console.log('error', error.value)
    }
  }

  const signupSubmit = () => {
    const { data, error } = useFetch(`http://localhost:5005/signup/${identity.value}`, {
      method: 'POST',
      body: {
        email: email.value,
        password: password.value
      }
    })
  }

  const resetPasswordSendEmail = () => {
    // 發送信件
  }

  const resetPassword = () => {
    // 傳送新密碼
  }

  const checkAuth = async () => {
    const { data, error } = useFetch(`http://localhost:5005/checkauth`, {
      method: 'POST',
      body: {
        token: cookie.value?.token
      }
    })
    if (data.value) {
      // console.log('checkAuth-succ', data.value)
    } else if (error.value) {
      cookie.value = null
      router.replace('/account/login')
      // console.log('checkAuth-error', error.value)
    }
  }

  return {
    identity,
    email,
    password,
    confirmPassword,
    loginSubmit,
    signupSubmit,
    resetPasswordSendEmail,
    resetPassword,
    checkAuth
  }
})
