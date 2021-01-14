import {useDispatch} from 'react-redux'

import {
  Container, 
  Title, 
  Description
} from './styles'

import * as actions from '../../../../store/modules/todo-item-move/actions' 
import { TodoAreaID } from '../todo-list'

export type TodoData = {
  id?: string
  todoAreaID: TodoAreaID
  title: string
  description: string
}

export type OnClickComponent = () => void

type TodoItemProps = {
  todoData: TodoData
  onClick: OnClickComponent
}

export default function TodoItem({todoData, onClick}: TodoItemProps) {
  const dispatch = useDispatch()

  return (
    <Container
      draggable
      onDragStart={e =>  dispatch(actions.setNewTodoItem(todoData))}
      onDragEnd={e => dispatch(actions.setNullTodoItem())}
      onClick={onClick}
    >
      <Title>{todoData.title}</Title>
      <Description>{todoData.description}</Description>
    </Container>
  )
}
