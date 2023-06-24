export const useValidate = () => {
  const isPassword = (value: string | number): string | true => {
    if (!value) {
      return '密碼為必填'
    }
    const regex = /^(?=.*[A-Z]).{8,}$/
    if (!regex.test(String(value))) {
      return '密碼至少 8 位數包含一個大寫英文字母'
    }
    return true
  }

  const isPhone = (value: string): string | true => {
    if (!value) {
      return '手機號碼為必填'
    }
    const regex = /^09\d{10}$/
    if (!regex.test(String(value))) {
      return '手機號碼格式不正確'
    }
    return true
  }

  return { isPassword, isPhone }
}
