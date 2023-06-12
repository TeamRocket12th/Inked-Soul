export const useAccountStore = defineStore('account', () => {
  const identity = ref('client')
  const email = ref()
  const password = ref()
  const confirmPassword = ref()

  const submit = () => {
    // console.log('Identity changed:', identity.value)
    // console.log('Email changed:', email.value)
    // console.log('Password changed:', password.value)
  }
  return { identity, email, password, confirmPassword, submit }
})
