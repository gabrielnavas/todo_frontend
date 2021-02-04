import { createBrowserHistory } from 'history'

const historyInstance = createBrowserHistory()

export const routerHistory = {
  getInstance: () => historyInstance,

  push: (path: string) => {
    historyInstance.push(path)
  }
}
