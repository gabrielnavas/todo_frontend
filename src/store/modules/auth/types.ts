export type PayloadLoginSuccess = {
  name: string
  email: string
  token: string
}

export type PayloadLoginRequest = {
  email: string
  password: string
}

export type PayloadLoginFailure = {
  errors: string[]
}