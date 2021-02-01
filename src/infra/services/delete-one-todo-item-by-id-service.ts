import { TodoItemID } from 'domain/models/TodoItem'
import { DELETE_TODO_ITEM_URL } from './CONSTANTS'
import { fetchDeleteJson } from './helpers/fetch-delete-json'

export type Params = {
  todoItemID: TodoItemID
  userTokenAccess: string
}

export type Result = {
    errors: string[]
  }

export const deleteOneTodoItemByIdService = async (params: Params): Promise<Result> => {
  const paramsBody = {
    idTodoItem: params.todoItemID
  }
  const token = params.userTokenAccess
  const resp = await fetchDeleteJson(DELETE_TODO_ITEM_URL, paramsBody, token)

  if (resp.status === 400) {
    return { errors: ['Parametros incorretos.'] }
  } else if (resp.status === 401) {
    return { errors: ['Você está sem as devidas permissões'] }
  }

  return { errors: [] }
}
