export default defineEventHandler(async () => {
  const data = await $fetch('http://localhost:5005/user').catch((error) => error.data)
  console.log(data)
  return data
})
