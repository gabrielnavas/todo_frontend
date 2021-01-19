import { LOGIN_URL } from "./CONSTANTS"
import { fetchPostJson } from "./helpers/fetch-post-json"

type Params = {
  email: string
  password: string
}

type BodyResponse = {
  token: string
  name: string
}

export type Response = {
  errors?: string[]
  body?: BodyResponse
}

export const loginService = async (params: Params): Promise<Response> => {
  const resp = await fetchPostJson(LOGIN_URL, params)
  // if(resp.status === 500) {
  //   return { errors: ['Serviço indisponível, tente novamente mais tarde. 500'] }
  // }
  if(resp.status === 400) {
    return { errors: ['Email ou senha incorretos.'] }
  }
  const user = (await resp.json()).body
  return { body: user, errors: [] }
}