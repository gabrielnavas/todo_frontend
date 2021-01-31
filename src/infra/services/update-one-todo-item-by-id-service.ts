//  UpdateOneTodoItemService

import { TodoItemModel } from 'domain/models/TodoItem'
import { INSERT_ONE_TODO_ITEM_URL } from './CONSTANTS'
import { fetchPostJson } from './helpers/fetch-post-json'

type Params = TodoItemModel

export type Result = {
    errors: string[]
    body?: TodoItemModel
  }

export const updateOneTodoItemByIdservice = async (params: Params): Promise<Result> => {
  const resp = await fetchPostJson(INSERT_ONE_TODO_ITEM_URL, {
    idTodoItem: params.id,
    idNameTodoArea: params.todoAreaID,
    title: params.title,
    description: params.description
  })

  if (resp.status === 400) {
    return { errors: ['Verifique seus parametros.'] }
  } else if (resp.status === 401) {
    return { errors: ['Você está sem permissões'] }
  }

  const body = await resp.json()
  return { body, errors: [] }
}
