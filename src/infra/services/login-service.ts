import { LOGIN_URL } from './CONSTANTS'
import { fetchPostJson } from './helpers/fetch-post-json'

type Params = {
  email: string
  password: string
}

type BodyResponse = {
  token: string
  name: string
}

export type ResponseLoginService = {
  errors: string[]
  body?: BodyResponse
}

export const loginService = async (params: Params): Promise<ResponseLoginService> => {
  const resp = await fetchPostJson(LOGIN_URL, params)
  if (resp.status === 400) {
    return { errors: ['Email ou senha incorretos.'] }
  }
  const body = await resp.json()
  return { body, errors: [] }
}
