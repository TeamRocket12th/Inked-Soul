export default defineEventHandler(async () => {
  const data = await $fetch('http://localhost:3001/design/all').catch((error) => error.data)
  return data
})
