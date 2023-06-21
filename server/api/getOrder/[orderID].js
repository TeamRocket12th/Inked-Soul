// import { useAccountStore } from '~/stores/account'

export default defineEventHandler(async (event) => {
  // const cookie = useCookie('token')
  const orderID = event.context.params.id
  const data = await $fetch(
    `http://localhost:5005/user/${orderID}`).catch((error) => error.data)
    // // , {
    //   headers: {
    //     Authorization:cookie.value
    //   }
    // }).then((res)=>{
    //   console.log(cookie.value)
    // })
  
  return data
})
