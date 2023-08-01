export const useFormatted = () => {
  const formatDate = ref(new Date())

  // new Date() -> 'yyyy-mm-dd'
  const formattedOutput = (date: string) => {
    const selectDate = new Date(date)

    const year = selectDate.getFullYear()
    const month = String(selectDate.getMonth() + 1).padStart(2, '0')
    const day = String(selectDate.getDate()).padStart(2, '0')

    return `${year}-${month}-${day}`
  }

  // 'yyyy/mm/dd' -> 'yyyy-mm-dd'
  const transformDate = (date: string) => {
    const dateParts = date.slice(0, 10).split('/')
    const year = dateParts[0]
    const month = dateParts[1]
    const day = dateParts[2]

    return `${year}-${month}-${day}`
  }

  const transformOrderStatus = (num: number, role: string): string => {
    const status: Record<number, string> = {
      0: '訂單取消',
      1: '訂單成立',
      2: '完成訂單',
      3: '評價刺青師', // 獲得評價
      4: '完成退款'
    }

    if (role === 'artist') {
      status[3] = '獲得評價'
    }
    return status[num]
  }

  const transformWeek = (week: string[]) => {
    const closeDaysMapping: Record<string, number> = {
      星期日: 1,
      星期一: 2,
      星期二: 3,
      星期三: 4,
      星期四: 5,
      星期五: 6,
      星期六: 7
    }
    return week.map((item) => {
      return closeDaysMapping[item]
    })
  }

  return { formatDate, formattedOutput, transformDate, transformOrderStatus, transformWeek }
}

// 使用方法
// const { formatDate, formattedOutput } = useFormatted()
// watch(selectDate, (newValue) => {
//   userData.value.date = formattedOutput(newValue)
//   console.log('date', userData.value.date)
// })
