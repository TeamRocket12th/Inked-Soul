export const useAccountStore = defineStore('account', () => {
  const identity = ref('user')
  const email = ref('nancy@gmail.com')
  const password = ref('A1234567')
  const confirmPassword = ref('A1234567')
  const tel = ref()
  const name = ref()

  const runtimeConfig = useRuntimeConfig()
  const APIBASE = runtimeConfig.public.APIBASE

  const authToken = useCookie('token')
  const authCookie = useCookie('data')

  const cookie = useCookie('token')
  const router = useRouter()
  const showTxt = ref(false)

  const guid = ref('')

  const editArtistInfoData = ref({
    realName: '',
    nickName: '',
    phone: '',
    email: '',
    experience: '',
    intro: '',
    selfStyle: [],
    studioName: '',
    license: '',
    address: '',
    tel: '',
    closeDay: [],
    startTime: '',
    closeTime: ''
  })
  // 一般流程登入
  const loginFn = async () => {
    const { data, error } = await useFetch(`${APIBASE}/login${identity.value}`, {
      method: 'POST',
      body: {
        Account: email.value,
        Password: password.value,
        Role: identity.value
      }
    })
    if (data.value) {
      const res = data.value
      if (res.Status === 200) {
        authToken.value = res.Token
        authCookie.value = res.Data

        cookie.value = {
          token: res.Token,
          data: res.Data
        }
        let newIdentity = ''
        if (identity.value === 'user') {
          newIdentity = 'normal'
          console.log(newIdentity)
        } else if (identity.value === 'artist') {
          newIdentity = 'artist'
          console.log(newIdentity)
        }
        router.push(`/account/${newIdentity}/editinfo`) // 登入成功跳轉到首頁
      }
    } else if (error.value) {
      cookie.value = null
    }
  }

  // 登入
  const loginSubmit = () => {
    // 一般流程登入
    if (!guid) {
      loginFn()
    } else {
      // 忘記密碼後登入
      resetPassword()
      setTimeout(() => {
        loginFn()
      }, 1000)
    }
  }
  // 註冊
  const signupSubmit = async () => {
    const { data, error } = await useFetch(
      `https://inkedsoul.rocket-coding.com/api/signup${identity.value}`,
      {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: {
          Account: email.value,
          Password: password.value,
          Role: identity.value
        }
      }
    )

    if (data.value) {
      const res = data.value
      if (res.Status === 200) {
        router.push('/account/login')
      }
    } else if (error.value) {
      console.log(error.value)
    }
  }
  // 修改用戶個人資料
  const editInfo = async () => {
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

  // 修改刺青師個人資料
  const editArtistInfo = async () => {
    const { data, error } = await useFetch('', {
      method: 'PUT'
      // body: editArtistInfoData
    })
  }

  // 發送重設密碼信件
  const resetPasswordSendEmail = async () => {
    showTxt.value = true
    const { data, error } = await useFetch(`${APIBASE}/${identity.value}email`, {
      method: 'POST',
      body: {
        Account: email
      }
    })
  }

  // 傳送新密碼
  const resetPassword = async () => {
    try {
      const res = await fetch(
        `${APIBASE}/${identity.value}emailpwd/?email=${email.value}&guid=${guid.value}`,
        {
          headers: { 'Content-type': 'application/json' },
          method: 'POST'
        }
      )
      console.log(res.data)
    } catch {
      const error = res.error
      console.log(error)
    }
  }
  // 驗證登入身分
  const checkAuth = async () => {
    const { data, error } = await useFetch(`http://localhost:5005/checkauth`, {
      method: 'POST',
      body: {
        token: cookie.value?.token
      }
    })
    if (data.value) {
      console.log('驗證成功')
    } else if (error.value) {
      cookie.value = null
      router.push('/account/login')
      console.log('驗證失敗')
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
    editArtistInfoData,
    showTxt,
    guid,
    loginSubmit,
    signupSubmit,
    editInfo,
    resetPasswordSendEmail,
    resetPassword,
    checkAuth
  }
})
