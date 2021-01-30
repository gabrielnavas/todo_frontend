import { TodoItemModel } from 'domain/models/TodoItem'
import { FIND_ALL_TODO_ITEMS_BY_USER_ID } from './CONSTANTS'
import { fetchGetJson } from './helpers/fetch-get-json'

export namespace FindAllTodoItemsByIdService {
  type Params = {
    userID: number
  }

  export type Result = {
    errors: string[]
    body?: {
        todo: TodoItemModel[]
        doing: TodoItemModel[]
        done: TodoItemModel[]
    }
  }

  export const service = async (params: Params): Promise<Result> => {
    const resp = await fetchGetJson(FIND_ALL_TODO_ITEMS_BY_USER_ID, {
      userId: params.userID
    })

    if (resp.status === 400) {
      return { errors: ['Parametros incorretos.'] }
    } else if (resp.status === 401) {
      return { errors: ['Você está sem as devidas permissões'] }
    }

    const body = await resp.json()
    return { body, errors: [] }
  }
}
