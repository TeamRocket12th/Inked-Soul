export default defineEventHandler(() => {
  // const data = await $fetch('http://localhost:5005/user/allOrder').catch((error) => error.data)
  const data = [
    {
      id: '0',
      image: 'https://fakeimg.pl/300/?text=Design',
      name: 'Possimus quam.',
      artist: 'Laisha.Herman85',
      orderDay: '2023-06-20',
      date: '2023-06-30',
      time: '晚上',
      deposit: '2000',
      status: '已確認'
    },
    {
      id: '1',
      image: 'https://fakeimg.pl/300/?text=Design',
      name: 'Perferendis reprehenderit.',
      artist: 'Lola79',
      orderDay: '2023-06-20',
      date: '2023-06-30',
      time: '晚上',
      deposit: '2000',
      status: '訂單成立'
    },
    {
      id: '2',
      image: 'https://fakeimg.pl/300/?text=Design',
      name: 'Sunt voluptas.',
      artist: 'Queen.Kuhn44',
      orderDay: '2023-06-20',
      date: '2023-06-30',
      time: '晚上',
      deposit: '2000',
      status: '已確認'
    },
    {
      id: '3',
      image: 'https://fakeimg.pl/300/?text=Design',
      name: 'Aliquid repudiandae.',
      artist: 'Elizabeth_Howell',
      orderDay: '2023-06-20',
      date: '2023-06-30',
      time: '晚上',
      deposit: '2000',
      status: '已取消'
    },
    {
      id: '4',
      image: 'https://fakeimg.pl/300/?text=Design',
      name: 'Totam deleniti.',
      artist: 'Eric17',
      orderDay: '2023-06-20',
      date: '2023-06-30',
      time: '晚上',
      deposit: '2000',
      status: '訂單成立'
    }
  ]
  return data
})
