export const useAccountStore = defineStore('account', () => {
  const runtimeConfig = useRuntimeConfig()
  const APIBASE = runtimeConfig.public.APIBASE
  const router = useRouter()

  const authToken = useCookie('token')
  const authCookie = useCookie('data')
  const cookie = useCookie('token')

  const identity = ref('user')
  const email = ref('nancy@gmail.com')
  const password = ref('A1234567')
  const confirmPassword = ref('A1234567')
  const tel = ref()
  const name = ref()

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

  // 少 Phone、 License(isVerified)
  const artistInfoData = reactive({
    Id: 0,
    Account: 'user@example.com',
    Password: '',
    Salt: '',
    Photo: '',
    Realname: '',
    Nickname: '',
    StudioName: '',
    Tel: '',
    Role: '',
    Style: '',
    StartTime: '',
    EndTime: '',
    City: '',
    Address: '',
    ClosedDays: '',
    DayOff: '',
    Experience: 0,
    Intro: '123',
    IsVerified: 0,
    MemberShip: 0,
    registration: '',
    Guid: '',
    Follower: 0,
    TimeFrame: 'string',
    PasswordTime: ''
  })

  const loginSubmit = async () => {
    const { data, error } = await useFetch(`${APIBASE}/api/login${identity.value}`, {
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

  // 修改刺青師個人資料
  const editArtistInfo = async () => {
    try {
      const { data, error } = await useFetch(`${APIBASE}/api/editartistinfo`, {
        headers: { 'Content-type': 'application/json' },
        method: 'POST',
        body: artistInfoData
      })
      console.log('edit', data)
    } catch (error) {
      console.log(error)
    }
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
    artistInfoData,
    editArtistInfo,
    loginSubmit,
    signupSubmit,
    editInfo,
    resetPasswordSendEmail,
    resetPassword,
    checkAuth
  }
})
