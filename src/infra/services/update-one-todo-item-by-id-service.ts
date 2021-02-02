import { TodoItemModel } from 'domain/models/TodoItem'
import { UPDATE_TODO_ITEM_URL } from './CONSTANTS'
import { fetchUpdateJson } from './helpers/fetch-update-json'

export type Params = {
  todoItem: TodoItemModel,
  userTokenAccess: string
}

export type Result = {
    errors: string[]
    body?: TodoItemModel
  }

export const updateOneTodoItemByIdservice = async (params: Params): Promise<Result> => {
  const token = params.userTokenAccess
  const bodyToFetch = {
    idNameTodoArea: params.todoItem.todoAreaID,
    title: params.todoItem.title,
    description: params.todoItem.description
  }
  const url = UPDATE_TODO_ITEM_URL.replace('idTodoItem', params.todoItem.id.toString())
  const resp = await fetchUpdateJson(url, bodyToFetch, token)
  if (resp.status === 400) {
    return { errors: ['Verifique seus parametros.'] }
  } else if (resp.status === 401) {
    return { errors: ['Você está sem as devidas permissões'] }
  }
  const body = await resp.json()
  return { body, errors: [] }
}
