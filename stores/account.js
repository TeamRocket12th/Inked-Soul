export const useAccountStore = defineStore('account', () => {
  const runtimeConfig = useRuntimeConfig()
  const APIBASE = runtimeConfig.public.APIBASE
  const router = useRouter()

  const authToken = useCookie('token')
  const authCookie = useCookie('data')

  const showTxt = ref(false)
  const identity = ref('user')
  const email = ref('benson@gmail.com')

  const password = ref('A1234567')
  const confirmPassword = ref('A1234567')
  const guid = ref('')
  const isPending = ref(false)

  // 通用 (user|artist)
  const photo = ref('')

  const name = ref()
  const tel = ref()
  const Id = ref(1)
  const userInfoData = reactive({
    Id: Id.value,
    Nickname: '',
    Tel: ''
  })

  const inputArtistInfoData = reactive({
    Id: '',
    Account: '',
    Password: '',
    Realname: '',
    Nickname: '',
    StudioName: '',
    License: '',
    Phone: '',
    Tel: '',
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
    MemberShip: 0,
    Guid: '',
    Follower: 0,
    TimeFrame: '',
    PasswordTime: ''
  })
  const artistInfoData = reactive({
    Id: '',
    Account: '',
    Password: '',
    Realname: '',
    Nickname: '',
    StudioName: '',
    License: '',
    Phone: '',
    Tel: '',
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
    MemberShip: 0,
    Guid: '',
    Follower: 0,
    TimeFrame: '',
    PasswordTime: ''
  })

  // 一般流程登入
  const loginFn = async () => {
    isPending.value = true
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
      if (res.Status === 200) {
        authToken.value = res.Token
        authCookie.value = res.Data

        Id.value = res.Data.Id
        // photo.value = res.Data.Photo

        let newIdentity = ''
        if (identity.value === 'user') {
          newIdentity = 'normal'
        } else if (identity.value === 'artist') {
          newIdentity = 'artist'
        }
        router.push(`/account/${newIdentity}/editinfo`) // 登入成功跳轉到首頁
      }
    } else if (error.value) {
      authToken.value = null
    }
    isPending.value = false
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
        headers: { 'Content-type': 'application/json', Authorization: `Bearer ${authToken.value}` },
        method: 'GET'
      })
      userInfoData.Nickname = data.value.Data.Nickname
      userInfoData.Tel = data.value.Data.Tel
      photo.value = data.value.Data.Photo

      authCookie.value.Nickname = data.value.Data.Nickname
      authCookie.value.Photo = data.value.Data.Photo

      handleDefaultInfo()
    } catch (error) {
      console.log('get', error)
    }
  }

  // 修改用戶個人資料
  const editInfo = async () => {
    userInfoData.Id = Id.value
    userInfoData.Nickname = name.value
    userInfoData.Tel = tel.value

    try {
      const { data } = await useFetch(`${APIBASE}/api/edituserinfo`, {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${authToken.value}`
        },
        method: 'POST',
        body: userInfoData
      })
      getUserInfo()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  // 取得刺青師個人資料
  const getArtistInfo = async () => {
    try {
      const { data } = await useFetch(`${APIBASE}/api/artistinfo`, {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${authToken.value}`
        }
      })
      Object.assign(artistInfoData, data.value.Data)
      Object.keys(inputArtistInfoData).forEach((key) => {
        inputArtistInfoData[key] = ''
      })

      photo.value = data.value.Data.Photo

      authCookie.value.Nickname = data.value.Data.Nickname
      authCookie.value.Photo = data.value.Data.Photo

      handleDefaultInfo()
    } catch (error) {
      console.log('get', error)
    }
  }

  // 修改刺青師個人資料
  const editArtistInfo = async () => {
    Object.assign(artistInfoData, inputArtistInfoData)

    try {
      const { data } = await useFetch(`${APIBASE}/api/editartistinfo`, {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${authToken.value}`
        },
        method: 'POST',
        body: artistInfoData
      })
      if (data.value) {
        await getArtistInfo()
      }
      console.log('edit', data.value)
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
      // console.log('驗證成功')
    } else if (error.value) {
      authToken.value = null
      router.push('/account/login')
      console.log('驗證失敗')
    }
  }

  const handleDefaultInfo = () => {
    if (authToken.value) {
      if (
        authCookie.value.Photo === '' ||
        authCookie.value.Photo === 'null' ||
        !authCookie.value.Photo
      ) {
        const defaultPhoto =
          'https://images.unsplash.com/photo-1601921004897-b7d582836990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHNrZXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'

        photo.value = defaultPhoto
        authCookie.value.Photo = defaultPhoto
      }
      if (
        authCookie.value.Nickname === '' ||
        authCookie.value.Nickname === 'null' ||
        !authCookie.value.Nickname
      ) {
        const defaultNickname = 'xxx'

        userInfoData.Nickname = defaultNickname
        artistInfoData.Nickname = defaultNickname
        authCookie.value.Nickname = defaultNickname
      }
    } else {
      return ''
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
    photo,
    userInfoData,
    artistInfoData,
    inputArtistInfoData,
    showTxt,
    isPending,
    getUserInfo,
    editArtistInfo,
    getArtistInfo,
    loginSubmit,
    signupSubmit,
    editInfo,
    resetPasswordSendEmail,
    resetPassword,
    checkAuth,
    handleDefaultInfo
  }
})
