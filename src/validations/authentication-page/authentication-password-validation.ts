export const authenticationPasswordValidation = (password: string): string[] => {
  const errors: string[] = []
  if( password.trim().length < 6) errors.push('Senha está muito pequena!')
  if( password.trim().length > 30) errors.push('Senha está muito grande!')
  return errors
}