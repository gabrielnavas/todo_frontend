import { TodoItemModel } from 'domain/models/TodoItem'
import { INSERT_ONE_TODO_ITEM_URL } from './CONSTANTS'
import { fetchPostJson } from './helpers/fetch-post-json'

export type Params = {
  todoItem: Omit<TodoItemModel, 'id'>,
  userTokenAccess: string
}

type Body = TodoItemModel

export type Result = {
    errors: string[]
    body?: Body
  }

export const insertOneTodoItemService = async (params: Params): Promise<Result> => {
  const paramsBody = {
    ...(params.todoItem),
    idNameTodoArea: params.todoItem.todoAreaID
  }
  const resp = await fetchPostJson(INSERT_ONE_TODO_ITEM_URL, paramsBody, params.userTokenAccess)
  if (resp.status === 400) {
    return { errors: ['Email ou senha incorretos.'] }
  } else if (resp.status === 401) {
    return { errors: ['Não autorizado realizar o insert.'] }
  }
  const body = await resp.json()
  const newBody = {
    title: body.title,
    description: body.description,
    todoAreaID: body.idNameTodoArea,
    id: body.id
  } as Body
  return { body: newBody, errors: [] }
}
