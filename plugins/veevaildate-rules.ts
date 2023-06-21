import { defineRule } from 'vee-validate'
import * as rules from '@vee-validate/rules'

export default defineNuxtPlugin((nuxtApp) => {
  const rulesDict: { [key: string]: any } = rules
  Object.keys(rulesDict)
    .filter((k) => k !== 'default')
    .forEach((rule) => {
      defineRule(rule, rulesDict[rule])
    })
})
