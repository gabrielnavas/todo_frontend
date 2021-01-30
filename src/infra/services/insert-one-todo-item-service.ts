import { INSERT_ONE_TODO_ITEM_URL } from './CONSTANTS'
import { fetchPostJson } from './helpers/fetch-post-json'

export namespace InsertOneTodoItemService {

  type TodoItem = {
    id: number,
    todoAreaID: string
    title: string
    description: string
  }

  type Params = Omit<TodoItem, 'id'>

  export type Result = {
    errors: string[]
    body?: TodoItem
  }

  export const service = async (params: Params): Promise<Result> => {
    const resp = await fetchPostJson(INSERT_ONE_TODO_ITEM_URL, params)

    if (resp.status === 400) {
      return { errors: ['Email ou senha incorretos.'] }
    } else if (resp.status === 401) {
      return { errors: ['Não autorizado realizar o insert.'] }
    }

    const body = await resp.json()
    return { body, errors: [] }
  }
}
