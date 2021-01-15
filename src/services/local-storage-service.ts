export const localStorageService = ({
  set: async (key: string, value: string): Promise<void> => {
    localStorage.setItem(key, value)
  }
})

export const TOKEN = 'token'