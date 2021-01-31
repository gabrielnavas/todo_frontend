//  UpdateOneTodoItemService

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
  const bodyParams = {
    idTodoItem: params.todoItem.id,
    idNameTodoArea: params.todoItem.todoAreaID,
    title: params.todoItem.title,
    description: params.todoItem.description
  }
  const resp = await fetchUpdateJson(UPDATE_TODO_ITEM_URL, bodyParams, token)

  if (resp.status === 400) {
    return { errors: ['Verifique seus parametros.'] }
  } else if (resp.status === 401) {
    return { errors: ['Você está sem permissões'] }
  }

  const body = await resp.json()
  return { body, errors: [] }
}
