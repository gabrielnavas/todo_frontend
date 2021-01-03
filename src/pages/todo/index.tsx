import {useState} from 'react'
import { Container, TodosAreas } from './styles'

import TodoArea from '../../components/todo-area'
import TodoList from '../../components/todo-list'
import { TodoData } from '../../components/todo-item'
import HeaderPage from '../../components/header-page'

import {v4 as uuid} from 'uuid'

const todosTemp: TodoData[] = [
  { 
    id: uuid(), 
    title: 'fazer coco', 
    description: 'fazer coco ate morrer todos os dias'
  },
  { 
    id: uuid(), 
    title: 'fazer coco', 
    description: `fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias`
  },
  { 
    id: uuid(), 
    title: 'fazer coco', 
    description: 'fazer coco ate morrer todos os dias'
  },
  { 
    id: uuid(), 
    title: 'fazer coco', 
    description: `fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias`
  },
  { 
    id: uuid(), 
    title: 'fazer coco', 
    description: `fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias`
  },
  { 
    id: uuid(), 
    title: 'fazer coco', 
    description: `fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias`
  },
  { 
    id: uuid(), 
    title: 'fazer coco', 
    description: `fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias`
  },
]

const TodoPage = () => {

  const [todos, setTodos] = useState<TodoData[]>(todosTemp)
  const [doings, setDoings] = useState<TodoData[]>(todosTemp.reverse())
  const [dones, setDones] = useState<TodoData[]>(todosTemp)

  const [todoItemMove, setTodoItemMove] = useState<TodoData>(null)

  const onDragStart = (todoItem: TodoData): void => {
    setTodoItemMove(todoItem)
    console.log(todoItem)
  }

  const onDragEnd = (): void => {
    setTodoItemMove(null)
    console.log(todoItemMove)
  }


  return (
    <>
      <Container>
        <HeaderPage>Todo App</HeaderPage>
        <TodosAreas>
          <TodoArea
            title='Todo'>
            <TodoList 
              todoItems={todos} 
              onDragStart={onDragStart}
              onDragEnd={onDragEnd}
            />
          </TodoArea>
          
          <TodoArea
            title='ToDoing'>
            <TodoList 
              todoItems={doings}
              onDragStart={onDragStart}
            />
          </TodoArea>

          <TodoArea
            title='Done'>
            <TodoList 
              todoItems={dones}
              onDragStart={onDragStart}
            />
          </TodoArea>
        </TodosAreas>
      </Container>
    </>
  )
}

export {TodoPage}