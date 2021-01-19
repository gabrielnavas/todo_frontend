import { emailValidation } from "../adapters/validations/email-validation"

type Errors = string[]

type Params = {
  email: string
  password: string
}

export const loginValidation = ({email, password}: Params): Errors => {
  const errors = [] as string[]
  if( !emailValidation(email)) errors.push('Email não é válido!')
  if( password.trim().length < 6) errors.push('Senha está muito pequena!')
  if( password.trim().length > 30) errors.push('Senha está muito grande!')
  return errors
}