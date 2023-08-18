export default defineEventHandler(async (event) => {
  const id = event.context.params.id
  const data = await $fetch(`http://localhost:5005/artists/${id}`).catch((error) => error.data)
  return { id, data }
})
