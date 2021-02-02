export const fetchUpdateJson = async (url: string, body?: any, token?: string) => {
  const config = {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-access-token': token
    },
    body: body ? JSON.stringify(body) : undefined
  }
  return fetch(url, config)
}
