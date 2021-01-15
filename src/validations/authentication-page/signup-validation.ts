import { authenticationEmailValidation } from "./authentication-email-validation"
import { authenticationPasswordValidation } from "./authentication-password-validation"

type Errors = string[]

type SignUpValidationParams = {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}


const signUpValidation = ({ name, email, password, passwordConfirmation }: SignUpValidationParams): Errors => {
  const errors = [] as string[]
  const emailError = authenticationEmailValidation(email)
  const passwordErrors = authenticationPasswordValidation(password)
  
  if( emailError) errors.push(emailError)
  if( passwordErrors.length > 0) errors.push(...passwordErrors)
  if( !name.trim()) errors.push('Nome não pode ser vazio!')
  if( name.trim().length < 3) errors.push('Nome está muito pequeno!')
  if( name.trim().length > 30) errors.push('Nome está muito grande!')
  if( passwordConfirmation.trim().length < 6) errors.push('Senha de confirmação está muito pequena!')
  if( passwordConfirmation.trim().length > 30) errors.push('Senha de confirmação está muito grande!')
  if( passwordConfirmation.trim() !== password.trim()) errors.push('Senha é diferente da senha de confirmação!')
  return errors
}

export {signUpValidation}