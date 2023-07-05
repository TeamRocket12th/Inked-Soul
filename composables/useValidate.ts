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
      return '電話為必填'
    }
    const regex = /^09\d{8}$/
    if (!regex.test(String(value))) {
      return '電話格式不正確'
    }
    return true
  }

  const isUnder20 = (value: string): string | true => {
    if (value) {
      const characters = value.split('')
      if (characters.length >= 20) {
        return '僅能填寫 20 個字內'
      }
    }
    return true
  }

  const isTel = (value: string): string | true => {
    const regex = /^\d{2}-\d{8}$/
    if (value) {
      if (!regex.test(String(value))) {
        return '電話格式不正確'
      }
    }
    return true
  }

  return { isPassword, isPhone, isUnder20, isTel }
}
