export const useFollowsStore = defineStore('follows', () => {
  const runtimeConfig = useRuntimeConfig()
  const APIBASE = runtimeConfig.public.APIBASE
  const authToken = useCookie('token')

  const allNum = ref()
  const followingData = ref()

  // 追蹤狀態
  const followStatus = ref()

  // 追蹤
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
      console.log('follow', data.value)
      // alert('已追蹤此刺青師')
    })
  }
  // 取消追蹤
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
      // alert('已取消追蹤此刺青師')
      getFollows(1)
    })
  }
  // 用戶後台取得已追蹤列表
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
      if (data.value?.Data) {
        followingData.value = data.value.Data
        allNum.value = data.value.response.TotalNum
      }
    })
  }
  return { followingData, followStatus, allNum, follow, unFollow, getFollows }
})
