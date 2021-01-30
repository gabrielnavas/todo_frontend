import { useDispatch } from 'react-redux'

import {
  Container,
  Title,
  Description
} from './styles'

import * as actions from '../../../../store/modules/todo-item-move/actions'
import { TodoItemModel } from '../../../../domain/models/TodoItem'

export type OnClickComponent = () => void

type TodoItemProps = {
  todoData: TodoItemModel
  onClick: OnClickComponent
}

export default function TodoItem ({ todoData, onClick }: TodoItemProps) {
  const dispatch = useDispatch()

  return (
    <Container
      draggable
      onDragStart={e => dispatch(actions.setNewTodoItem(todoData))}
      onDragEnd={e => dispatch(actions.setNullTodoItem())}
      onClick={onClick}
    >
      <Title>{todoData.title}</Title>
      <Description>{todoData.description}</Description>
    </Container>
  )
}
