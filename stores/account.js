export const useAccountStore = defineStore('account', () => {
  const identity = ref('normal')
  const email = ref('nancy@gmail.com')
  const password = ref('A1234567')
  const confirmPassword = ref('A1234567')
  const tel = ref()
  const name = ref()
  const cookie = useCookie('token')
  const router = useRouter()

  const loginSubmit = async () => {
    const { data, error } = await useFetch(`http://localhost:5005/login/${identity.value}`, {
      method: 'POST',
      body: {
        Email: email.value,
        Password: password.value
      }
    })
    if (data.value) {
      cookie.value = {
        token: '1234'
      }
      router.push(`/account/${identity.value}/editinfo`) // 登入成功跳轉到首頁
      // console.log('token', data.value)
      // console.log('cookie', cookie.value.token)
    } else if (error.value) {
      cookie.value = null
      // console.log('error', error.value)
    }
  }

  const signupSubmit = async () => {
    const { data, error } = await useFetch(`http://localhost:5005/signup/${identity.value}`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: {
        Email: email.value,
        Password: password.value,
        ConfirmPassword: confirmPassword.value
      }
    })

    if (data.value) {
      const res = data.value
      if (res.Status === 200) {
        router.push('/account/login')
      }
    } else if (error.value) {
      console.log(error.value)
    }
  }
  const editInfo = async () => {
    // 修改個人資料
    const { data, error } = await useFetch('http://localhost:5005/user', {
      method: 'PUT',
      body: {
        name: name.value,
        tel: tel.value,
        email: email.value
      }
    })
    // console.log(data)
  }

  const resetPasswordSendEmail = () => {
    // 發送信件
  }

  const resetPassword = () => {
    // 傳送新密碼
  }

  const checkAuth = async () => {
    const { data, error } = await useFetch(`http://localhost:5005/checkauth`, {
      method: 'POST',
      body: {
        token: cookie.value?.token
      }
    })
    if (data.value) {
      // console.log('checkAuth-succ', data.value)
    } else if (error.value) {
      cookie.value = null
      router.push('/account/login')
      // console.log('checkAuth-error', error.value)
    }
  }

  return {
    identity,
    cookie,
    email,
    password,
    tel,
    name,
    confirmPassword,
    loginSubmit,
    signupSubmit,
    editInfo,
    resetPasswordSendEmail,
    resetPassword,
    checkAuth
  }
})
