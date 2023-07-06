export default defineEventHandler(() => {
  // const data = await $fetch('http://localhost:5005/user/allOrder').catch((error) => error.data)
  const data = [
    {
      Id: '0',
      Image: 'https://fakeimg.pl/300/?text=Design',
      Name: 'Possimus quam.',
      Artist: 'Laisha.Herman85',
      OrderDay: '2023-06-20',
      Date: '2023-06-30',
      Time: '晚上',
      Deposit: '2000',
      Status: '已確認'
    },
    {
      Id: '1',
      Image: 'https://fakeimg.pl/300/?text=Design',
      Name: 'Perferendis reprehenderit.',
      Artist: 'Lola79',
      OrderDay: '2023-06-20',
      Date: '2023-06-30',
      Time: '晚上',
      Deposit: '2000',
      Status: '訂單成立'
    },
    {
      Id: '2',
      Image: 'https://fakeimg.pl/300/?text=Design',
      Name: 'Sunt voluptas.',
      Artist: 'Queen.Kuhn44',
      OrderDay: '2023-06-20',
      Date: '2023-06-30',
      Time: '晚上',
      Deposit: '2000',
      Status: '已確認'
    },
    {
      Id: '3',
      Image: 'https://fakeimg.pl/300/?text=Design',
      Name: 'Aliquid repudiandae.',
      Artist: 'Elizabeth_Howell',
      OrderDay: '2023-06-20',
      Date: '2023-06-30',
      Time: '晚上',
      Deposit: '2000',
      Status: '已取消'
    },
    {
      Id: '4',
      Image: 'https://fakeimg.pl/300/?text=Design',
      Name: 'Totam deleniti.',
      Artist: 'Eric17',
      OrderDay: '2023-06-20',
      Date: '2023-06-30',
      Time: '晚上',
      Deposit: '2000',
      Status: '訂單成立'
    }
  ]
  return data
})
