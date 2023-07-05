// import { useAccountStore } from '~/stores/account'

export default defineEventHandler(() => {
  // const cookie = useCookie('token')
  // const orderID = event.context.params.id
  // const data = await $fetch(`http://localhost:5005/user/${orderID}`).catch((error) => error.data)
  // // , {
  //   headers: {
  //     Authorization:cookie.value
  //   }
  // }).then((res)=>{
  //   console.log(cookie.value)
  // })
  const data = {
    status: 200,
    message: '成功取得單一訂單資料',
    data: {
      artist: 'Louvenia69',
      artistImg:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1049.jpg',
      comment: '',
      commentDay: '2023-06-24',
      date: '2023-06-30',
      deposit: '2000',
      id: '6524-4818-4918',
      image: 'https://fakeimg.pl/300/?text=Design',
      name: 'Corporis nobis.',
      orderDay: '2023-06-20',
      star: 5,
      status: '已取消',
      time: '晚上'
    }
  }
  return data
})
