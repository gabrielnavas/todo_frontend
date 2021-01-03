import {
  Container, 
  Title, 
  Description
} from './styles'

export type TodoData = {
  id: string
  title: string
  description: string
}

type TodoItemProps = {
  todoData: TodoData
  onDragStart?: (todoItem: TodoData) => void
  onDragEnd?: () => void
}
export default function TodoItem({todoData, onDragStart, onDragEnd}: TodoItemProps) {
  
  return (
    <Container
      draggable
      onDragStart={e => onDragStart(todoData)}
      onDragEnd={e => onDragEnd()}
    >
      <Title>{todoData.title}</Title>
      <Description>{todoData.description}</Description>
    </Container>
  )
}
