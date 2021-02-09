import { RECUPERETE_USER_ACCOUNT_URL } from './CONSTANTS'
import { fetchPostJson } from './helpers/fetch-post-json'

export type Params = {
  email: string
}

export const recuperateUserAccountService = async (params: Params) => {
  const resp = await fetchPostJson(RECUPERETE_USER_ACCOUNT_URL, params)
  if (resp.status === 400) {
    return { errors: ['Parametros incorretos.'] }
  }
  return { errors: [] as string[] }
}
