import { SIGNUP_URL } from "./CONSTANTS"
import { fetchPostJson } from "./helpers/fetch-post-json"

type SignUpServiceParams = {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

type BodyResponse = {
  email: string
  token: string, 
  userName: string
}

export type SignUpServiceResponse = {
  errors: string[]
  body?: BodyResponse
}

export const signupService = async (params: SignUpServiceParams): Promise<SignUpServiceResponse> => {
  const resp = await fetchPostJson(SIGNUP_URL, params)
  
  if(resp.status === 400) {
    return { errors: ['Email já cadastrado, tente outro...'] }
  }
  const body = await resp.json()
  return { body, errors: [] }
}
