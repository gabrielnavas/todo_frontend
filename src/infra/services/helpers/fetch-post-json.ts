export const fetchPostJson = async (url: string, body?: any, token?: string) => {
  console.log(url)
  const config = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-access-token': token
    },
    body: body ? JSON.stringify(body) : undefined
  }
  return fetch(url, config)
}
