import { emailValidation } from '../adapters/validations/email-validation'

type Params = {
  name: string,
  email: string,
  password: string
  passwordConfirmation: string
}

type Errors = string[]

export const signUpValidation = ({ name, email, password, passwordConfirmation }: Params): Errors => {
  const errors: string[] = []
  if (name.length < 3) errors.push('Nome muito pequeno.')
  if (name.length > 30) errors.push('Nome muito grande.')
  if (!emailValidation(email)) errors.push('Email inválido.')
  if (password.length < 6) errors.push('Senha muito pequena.')
  if (password.length > 30) errors.push('Senha muito grande.')
  if (passwordConfirmation.length < 6) errors.push('Senha muito pequena.')
  if (passwordConfirmation.length > 30) errors.push('Senha muito grande.')
  if (passwordConfirmation !== password) errors.push('Senha de confirmação está diferente da senha.')
  return errors
}
