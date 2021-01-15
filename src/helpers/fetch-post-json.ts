export const fetchPostJson = async (url: string, data: any): Promise<Response> => {
  const config = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  return fetch(url, config)
}