export const useAccountStore = defineStore('account', () => {
  const identity = ref('client')
  const email = ref()
  const password = ref()
  const confirmPassword = ref()

  const loginSubmit = async () => {
    const { data, error } = useFetch(`http://localhost:3001/login/${identity.value}`, {
      method: 'POST',
      body: {
        email: email.value,
        password: password.value
      }
    })
    if (data.value.status === 200) {
      await navigateTo('/')
    }
  }

  const signupSubmit = () => {
    const { data, error } = useFetch(`http://localhost:3001/signup/${identity.value}`, {
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
  return {
    identity,
    email,
    password,
    confirmPassword,
    loginSubmit,
    signupSubmit,
    resetPasswordSendEmail,
    resetPassword
  }
})
