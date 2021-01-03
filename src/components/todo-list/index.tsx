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
  const todoItemMove = useSelector<ReducersType>(state => state.todoItemMove) as TodoData

  return (
    <Container
      onDragOver={e => e.preventDefault()}
      onDrop={e => dispatch(actions.onDrop({ todoItemMove, todoAreaID }))}
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
