export default defineEventHandler(async (event) => {
  const id = event.context.params.id
  const data = await $fetch(`http://localhost:3001/artists/design/${id}`).catch(
    (error) => error.data
  )
  return { id, data }
})
