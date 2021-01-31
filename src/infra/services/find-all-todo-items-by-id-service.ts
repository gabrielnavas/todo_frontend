import { TodoItemModel } from 'domain/models/TodoItem'
import { FIND_ALL_TODO_ITEMS_BY_USER_ID } from './CONSTANTS'
import { fetchGetJson } from './helpers/fetch-get-json'

type Params = {
  token: string
}

type Body =TodoItemModel[][]

export type Result = {
    errors: string[]
    body?:Body
  }

export const findAllTodoItemsByIdService = async (params: Params): Promise<Result> => {
  const resp = await fetchGetJson(FIND_ALL_TODO_ITEMS_BY_USER_ID, undefined, params.token)

  if (resp.status === 400) {
    return { errors: ['Parametros incorretos.'] }
  } else if (resp.status === 401) {
    return { errors: ['Você está sem as devidas permissões'] }
  }

  const body = await resp.json()
  const bodyMap = body.map((list: any) => list.map((todo: any) => ({
    id: todo.id,
    todoAreaID: todo.idNameTodoArea,
    title: todo.title,
    description: todo.description
  }))) as Body
  console.log(bodyMap)
  return { body: bodyMap, errors: [] }
}
