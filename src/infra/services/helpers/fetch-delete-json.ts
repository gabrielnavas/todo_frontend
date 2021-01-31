export const fetchDeleteJson = async (url: string, data: any, token?: string) => {
  const config = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-access-token': token
    },
    body: JSON.stringify(data)
  }
  return fetch(url, config)
}
