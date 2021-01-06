import { useCallback } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { ReducersType } from '../../store/configs/root-reducer'
import * as actions from '../../store/modules/todo-lists/actions'
import TodoItem, { TodoData }  from '../todo-item'
import {Container} from './styles'

export type TodoAreaID = 'todo' | 'doing' | 'done'

type TodoListProps = {
  todoItems: TodoData[]
  todoAreaID: TodoAreaID
}

export default function TodoList({todoItems, todoAreaID}: TodoListProps) {
  const dispatch = useDispatch()
  const todoItemMove = useSelector<ReducersType, TodoData>(state => state.todoItemMove)

  const handleOnDrop = useCallback(() => {
    dispatch(
      actions.removeOneItemByTodoAreaID({ 
        todoAreaID: todoItemMove.todoAreaID, todoItemID: todoItemMove.id 
      })
    )
    dispatch(
      actions.updateOneTodoItemByTodoAreaId({ 
        todoItemMove, todoAreaIDToInsert: todoAreaID 
      })
    )
  },[dispatch, todoAreaID, todoItemMove])

  return (
    <Container
      onDragOver={e => e.preventDefault()}
      onDrop={e => handleOnDrop()}
    >
      { 
        todoItems.map(todoData => 
          <TodoItem
            key={todoData.id} 
            todoData={todoData}
          />
        ) 
      }
    </Container>
  )
}
