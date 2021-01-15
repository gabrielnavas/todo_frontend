import { emailValidation } from "../../adapters/validations/email-validation"

export const authenticationEmailValidation = (email: string): string => {
  if(!emailValidation(email)) return'Email não está válido!'
  return null
}