export const fetchGetJson = async (url: string, token?: string) => {
  const config = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'cache-control': 'no-cache',
      'x-access-token': token
    }
  }
  return fetch(url, config)
}
