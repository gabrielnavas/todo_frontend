import { LOGIN_URL } from "./CONSTANTS"
import { fetchPostJson } from "../helpers/fetch-post-json"

type LoginServiceParams = {
  email: string
  password: string
}

type BodyResponse = {
  token: string
  name: string
  email: string
}

type LoginServiceResponse = {
  errors: string[]
  body?: BodyResponse
}

export const loginService = async (params: LoginServiceParams): Promise<LoginServiceResponse> => {
  // const resp = await fetchPostJson(LOGIN_URL, params)
  // if(resp.status === 500) {
  //   return { errors: ['Serviço indisponível, tente novamente mais tarde.'] }
  // }
  // if(resp.status === 400) {
  //   return { errors: ['Email ou senha incorretos.'] }
  // }
  // const user = (await resp.json()).body
  // return { body: user, errors: [] }
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ body: {
          email: 'gab@email',
          name: 'gabriel',
          token: 'JSIDSAPID8()ASYF89sayf890A@#@$@U$(*Us'
        }, 
        errors: [] 
      })
    }, 2000)
  })
}
