export const useFormatted = () => {
  const formatDate = ref(new Date())

  const formattedOutput = (date) => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')

    formatDate.value = `${year}-${month}-${day}`
    return `${year}-${month}-${day}`
  }

  return { formatDate, formattedOutput }
}

// 使用方法
// const { formatDate, formattedOutput } = useFormatted()
// watch(selectDate, (newValue) => {
//   userData.value.date = formattedOutput(newValue)
//   console.log('date', userData.value.date)
// })
