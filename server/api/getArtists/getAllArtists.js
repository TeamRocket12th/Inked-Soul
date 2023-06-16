export default defineEventHandler(async () => {
  const data = await $fetch('http://localhost:5005/artists/all').catch((error) => error.data)
  return data
})
