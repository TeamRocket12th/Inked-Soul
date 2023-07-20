export const useFollowsStore = defineStore('follows', () => {
  const runtimeConfig = useRuntimeConfig()
  const APIBASE = runtimeConfig.public.APIBASE
  const authToken = useCookie('token')
  const followStatus = ref(false)
  const allNum = ref()
  const followingData = ref()
  const checkFollow = (id) => {
    nextTick(async () => {
      const { data } = await useFetch(`${APIBASE}/api/`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${authToken.value}`
        },
        query: {
          artistid: id
        }
      })
      console.log('check follow', data.value)
      if (data.value.message === '此使用者已追蹤此刺青師') {
        followStatus.value = true
      }
    })
  }

  const follow = (id) => {
    nextTick(async () => {
      const { data } = await useFetch(`${APIBASE}/api/trackartists`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${authToken.value}`
        },
        query: {
          artistid: id
        }
      })
      console.log('folloe', data.value)
      followStatus.value = true
      alert('已追蹤此刺青師')
    })
  }
  const unFollow = (id) => {
    nextTick(async () => {
      const { data } = await useFetch(`${APIBASE}/api/canceltrackartists`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${authToken.value}`
        },
        query: {
          artistid: id
        }
      })
      console.log('unfollow', data.value)
      followStatus.value = false
      alert('已取消追蹤此刺青師')
      getFollows(1)
    })
  }

  const getFollows = (num) => {
    nextTick(async () => {
      const { data } = await useFetch(`${APIBASE}/api/gettrackallartists`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${authToken.value}`
        },
        query: {
          page: num
        }
      })
      if (data.value) {
        console.log('followData', data)
        followingData.value = data.value.Data
        allNum.value = data.value.response.TotlaNum
      }
    })
  }
  return { followingData, followStatus, checkFollow, follow, unFollow, getFollows }
})
