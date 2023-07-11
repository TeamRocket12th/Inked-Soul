export const useAccountStore = defineStore('account', () => {
  const runtimeConfig = useRuntimeConfig()
  const APIBASE = runtimeConfig.public.APIBASE
  const router = useRouter()

  const authToken = useCookie('token')
  const authCookie = useCookie('data')
  const cookie = useCookie('token')
  const showTxt = ref(false)
  const identity = ref('user')
  const email = ref('nancy@gmail.com')
  const password = ref('A1234567')
  const confirmPassword = ref('A1234567')
  const guid = ref('')
  const tel = ref()
  const name = ref()
  const Id = ref(0)

  const artistInfoData = reactive({
    Id: authToken.value ? authCookie.value.Id : '',
    Account: authToken.value ? authCookie.value.Email : '',
    Password: '',
    Salt: '',
    Photo: authToken.value ? authCookie.value.Photo : '',
    Realname: '',
    Nickname: authToken.value ? authCookie.value.Nickname : '',
    StudioName: '',
    Registration: '',
    Phone: '',
    Tel: '',
    Role: authToken.value ? authCookie.value.Role : '',
    Style: '',
    StartTime: '',
    EndTime: '',
    City: '',
    Address: '',
    ClosedDays: '',
    DayOff: '',
    Experience: 0,
    Intro: '',
    IsVerified: 0,
    MemberShip: authToken.value ? authCookie.value.MemberShip : 0,
    Style: '',
    Guid: '',
    Follower: 0,
    TimeFrame: '',
    PasswordTime: ''
  })

  // if (authToken.value) {
  //   artistInfoData.Nickname = authCookie.value.Nickname || ''
  //   artistInfoData.Account = authCookie.value.Email
  // }

  // 一般流程登入
  const loginFn = async () => {
    const { data, error } = await useFetch(`${APIBASE}/api/login${identity.value}`, {
      method: 'POST',
      body: {
        Account: email.value,
        Password: password.value,
        Role: identity.value
      }
    })
    if (data.value) {
      const res = data.value
      console.log('login res', res)
      if (res.Status === 200) {
        authToken.value = res.Token
        authCookie.value = res.Data
        Id.value = res.Data.Id
        let newIdentity = ''
        if (identity.value === 'user') {
          newIdentity = 'normal'
        } else if (identity.value === 'artist') {
          newIdentity = 'artist'
        }
        router.push(`/account/${newIdentity}/editinfo`) // 登入成功跳轉到首頁
      }
    } else if (error.value) {
      console.log(error.value)
      authToken.value = null
    }
  }

  // 登入
  const loginSubmit = () => {
    // 一般流程登入
    if (!guid.value) {
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
    const { data, error } = await useFetch(`${APIBASE}/api/signup${identity.value}`, {
      headers: { 'Content-type': 'application/json' },
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
        router.push('/account/login')
      }
    } else if (error.value) {
      console.log(error.value)
    }
  }
  // 取得一般用戶資料
  const getUserInfo = async () => {
    try {
      const { data } = await useFetch(`${APIBASE}/api/userinfo`, {
        headers: { 'Content-type': 'application/json' },
        method: 'GET'
      })
      console.log('get', data)
      // 補上email、tel等變數重新賦值，以便畫面渲染新值
    } catch (error) {
      console.log('get', error)
    }
  }

  // 修改用戶個人資料
  const editInfo = async () => {
    console.log(Id.value)
    const { data, error } = await useFetch(`${APIBASE}/api/edituserinfo`, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${cookie.value.token}`
      },
      method: 'POST',
      body: {
        Id: Id.value,
        Nickname: name.value,
        Tel: tel.value
      }
    })
    // 待補：呼叫getUserInfo()
    // console.log(data)
  }

  // 取得刺青師個人資料
  const getArtistInfo = async () => {
    try {
      const { data, error } = await useFetch(`${APIBASE}/api/artistinfo`, {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${authToken.value}`
        },
        method: 'GET'
      })
      console.log('get', data)
      // 補上artistInfoData重新賦值，以便畫面渲染新值
    } catch (error) {
      console.log('get', error)
    }
  }

  // 修改刺青師個人資料
  const editArtistInfo = async () => {
    console.log(authCookie)
    try {
      const { data, error } = await useFetch(`${APIBASE}/api/editartistinfo`, {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${authToken.value}`
        },
        method: 'POST',
        body: artistInfoData
      })
      console.log('edit', data)
      // 待補呼叫getArtistInfo()
    } catch (error) {
      console.log(error)
    }
  }

  // 發送重設密碼信件
  const resetPasswordSendEmail = async () => {
    showTxt.value = true
    const { data, error } = await useFetch(`${APIBASE}/api/${identity.value}email`, {
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
        `${APIBASE}/api/${identity.value}emailpwd/?email=${email.value}&guid=${guid.value}`,
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
        token: authToken.value
      }
    })
    if (data.value) {
      console.log('驗證成功')
    } else if (error.value) {
      authToken.value = null
      router.push('/account/login')
      console.log('驗證失敗')
    }
  }

  return {
    identity,
    email,
    guid,
    password,
    tel,
    name,
    confirmPassword,
    artistInfoData,
    showTxt,
    getUserInfo,
    editArtistInfo,
    getArtistInfo,
    loginSubmit,
    signupSubmit,
    editInfo,
    resetPasswordSendEmail,
    resetPassword,
    checkAuth
  }
})
