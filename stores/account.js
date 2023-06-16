export const useAccountStore = defineStore('account', () => {
  const identity = ref('client')
  const email = ref()
  const password = ref()
  const confirmPassword = ref()
  const submit = async () => {
    // 登入
    const userData={
      user:{
        email:email.value,
        passwd:password.value
      }
    }

    const{data,error}=await useFetch('http://localhost:5005/login/normal',{
      method: 'post',
      body:userData
    })

    if(data.value.status===200){
      await navigateTo('/')
    }
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
    submit,
    resetPasswordSendEmail,
    resetPassword
  }
})
