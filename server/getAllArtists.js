export default defineEventHandler(async () => {
  const data = await $fetch('http://localhost:3001/artists/all').catch((error) => error.data)
  return data
})
