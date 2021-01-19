export type PayloadLoginRequest = {
  email: string
  password: string
}

export type PayloadLoginSuccess = {
  name: string
  email: string
  token: string
}

export type PayloadLoginFailure = {
  errors: string[]
}

export type PayloadSignUpRequest = {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

export type PayloadSignUpSuccess = PayloadLoginSuccess

export type PayloadSignUpFailure = PayloadLoginFailure

