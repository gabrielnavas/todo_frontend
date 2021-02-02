export const fetchDeleteJson = async (url: string, token?: string) => {
  const config = {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-access-token': token
    }
  }
  return fetch(url, config)
}
