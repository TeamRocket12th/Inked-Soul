export default defineEventHandler(async () => {
  const data = await $fetch('https://fakestoreapi.com/products').catch((error) => error.data)
  return data
})
