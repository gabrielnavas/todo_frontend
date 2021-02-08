import { emailValidation } from '../adapters/validations/email-validation'

export type Params = {email: string}

export const recuperateAccountValidation = ({ email }: Params): string[] => {
  const errors = [] as string[]
  if (!emailValidation(email)) errors.push('Email não é válido!')
  return errors
}
