import { TodoData } from '../../../components/todo-item';
import { TodoAreaID } from '../../../components/todo-list';
import * as types from '../../configs/actions-reducer-types';
import { 
  PayloadInsertOneTodo, 
  PayloadOnDropType, 
  PayloadRemoveItemByTodoAreaID 
} from './types';

type ActionType = {
  type: string, 
  payload?: any
}

export type StateType = {
  todo: TodoData[]
  doing: TodoData[]
  done: TodoData[]
}

const inititalState: StateType = {
  todo: [],
  doing: [],
  done: []
}

const reducer = (state: StateType = inititalState, action: ActionType) => {
  
  switch (action.type) {
    case types.TODOS_LISTS__UPDATE_TODO_ITEM_BY_TODO_AREA_ID: {
      const updateTodoAreaID = ({todoItemMove, todoAreaIDToInsert}: PayloadOnDropType) => {
        return { ...todoItemMove, todoAreaID: todoAreaIDToInsert } as TodoData
      }
      const addNewTodoItem = (todoAreaID: TodoAreaID, newState: StateType, newTodoItem: TodoData) => {
        if(todoAreaID === 'done') newState.done.push(newTodoItem)
        else if(todoAreaID === 'doing') newState.doing.push(newTodoItem)
        else if(todoAreaID === 'todo') newState.todo.push(newTodoItem)
        return newState
      }
      const payload = action.payload as PayloadOnDropType
      const {todoAreaIDToInsert, todoItemMove} =  payload
      const newState = {...state}  
      const newTodoItem = updateTodoAreaID({todoItemMove, todoAreaIDToInsert})
      return addNewTodoItem(todoAreaIDToInsert, newState, newTodoItem)
    }

    case types.TODOS_LISTS__REMOVE_ONE_TODO_ITEM_BY_TODO_AREA_ID: {
      const {todoAreaID, todoItemID} = action.payload as PayloadRemoveItemByTodoAreaID
      const newState = { ...state }
      const findAndRemove = (todoList: TodoData[], todoItemID: string) => {
        const index = todoList.findIndex(todo => todo.id === todoItemID)
        if(index >= 0) todoList.splice(index, 1)
      }
      const removeByTodoAreaID = (newState: StateType, todoAreaID: TodoAreaID, todoItemID: string) => {
        if(todoAreaID === 'todo') findAndRemove(newState.todo, todoItemID)
        else if(todoAreaID === 'doing') findAndRemove(newState.doing, todoItemID) 
        else if(todoAreaID === 'done') findAndRemove(newState.done, todoItemID)
        return newState
      }
      return removeByTodoAreaID(newState, todoAreaID, todoItemID)
    }

    case types.TODOS_LISTS__INSERT_ONE_TODO_ITEM: {
      const addNewTodoItem = (todoAreaID: TodoAreaID, newState: StateType, todoItem: TodoData) => {
        if(todoAreaID === 'done') newState.done.push(todoItem)
        else if(todoAreaID === 'doing') newState.doing.push(todoItem)
        else if(todoAreaID === 'todo') newState.todo.push(todoItem)
        return newState
      }
      const payload = action.payload as PayloadInsertOneTodo
      const {todoItem} =  payload
      let newState = {...state}
      newState = addNewTodoItem(todoItem.todoAreaID, newState, todoItem)
      return newState
    }

    default: {
      return state;
    }
  }
}
  
export default reducer

