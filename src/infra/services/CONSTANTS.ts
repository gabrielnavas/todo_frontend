import env from '../../configs/env'

const BACKEND_URL = env.rootPathBackendServer

const API = `${BACKEND_URL}/api`

export const SIGNUP_URL = `${API}/signup`
export const LOGIN_URL = `${API}/login`
export const INSERT_ONE_TODO_ITEM_URL = `${API}/todo`
export const FIND_ALL_TODO_ITEMS_BY_USER_ID = `${API}/todo`
export const DELETE_TODO_ITEM_URL = `${API}/todo/idTodoItem`
export const UPDATE_TODO_ITEM_URL = `${API}/todo/idTodoItem`
