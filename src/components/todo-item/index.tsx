import {useDispatch} from 'react-redux'

import {
  Container, 
  Title, 
  Description
} from './styles'

import * as actions from '../../store/modules/todo-item-move/actions' 

export type TodoData = {
  id: string
  title: string
  description: string
}

type TodoItemProps = {
  todoData: TodoData
}

export default function TodoItem({todoData}: TodoItemProps) {
  const dispatch = useDispatch()

  return (
    <Container
      draggable
      onDragStart={e =>  dispatch(actions.todoOnDragStart(todoData))}
      onDragEnd={e => dispatch(actions.todoOnDragEnd())}
    >
      <Title>{todoData.title}</Title>
      <Description>{todoData.description}</Description>
    </Container>
  )
}
