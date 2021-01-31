export const fetchGetJson = async (url: string, params?: any, token?: string) => {
  const config = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'cache-control': 'no-cache',
      'x-access-token': token
    }
  }
  if (params) {
    const urlInstance = new URL(url)
    Object.keys(params).map(key => urlInstance.searchParams.append(key, params[key]))
    return fetch(urlInstance.toString(), config)
  }
  return fetch(url, config)
}
