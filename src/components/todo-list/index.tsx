import TodoItem, { TodoData }  from '../todo-item'
import {Container} from './styles'

type TodoListProps = {
  todoItems: TodoData[]
  onDragStart?: (todoItem: TodoData) => void
  onDragEnd?: () => void
}

export default function TodoList({todoItems, onDragStart, onDragEnd}: TodoListProps) {
  return (
    <Container>
      { 
        todoItems.map(todoData => 
          <TodoItem
            key={todoData.id} 
            todoData={todoData}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd} 
          />
        ) 
      }
    </Container>
  )
}
