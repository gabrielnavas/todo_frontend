import { authenticationEmailValidation } from "./authentication-email-validation"
import { authenticationPasswordValidation } from "./authentication-password-validation"

type Errors = string[]

type LoginValidationParams = {
  email: string
  password: string
}

export const loginValidation = ({email, password}: LoginValidationParams): Errors => {
  const errors = [] as string[]
  const emailError = authenticationEmailValidation(email)
  const passwordErrors = authenticationPasswordValidation(password)
  if(emailError) errors.push(emailError)
  if(passwordErrors.length > 0) errors.push(...passwordErrors)
  return errors
}