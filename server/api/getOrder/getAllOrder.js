export default defineEventHandler(async () => {
  const data = await $fetch('http://localhost:5005/user/allOrder').catch((error) => error.data)

  return data
})
