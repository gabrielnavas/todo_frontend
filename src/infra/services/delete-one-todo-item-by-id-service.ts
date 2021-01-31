import { TodoItemID, TodoItemModel } from 'domain/models/TodoItem'
import { INSERT_ONE_TODO_ITEM_URL } from './CONSTANTS'
import { fetchPostJson } from './helpers/fetch-post-json'

export type Params = TodoItemID

export type Result = {
    errors: string[]
    body?: TodoItemModel
  }

export const deleteOneTodoItemByIdService = async (todoItemID: Params): Promise<Result> => {
  const resp = await fetchPostJson(INSERT_ONE_TODO_ITEM_URL, {
    idTodoItem: todoItemID
  })

  if (resp.status === 400) {
    return { errors: ['Parametros incorretos.'] }
  } else if (resp.status === 401) {
    return { errors: ['Você está sem as devidas permissões'] }
  }

  const body = await resp.json()
  return { body, errors: [] }
}
