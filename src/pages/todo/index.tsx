import {useSelector} from 'react-redux'
import {v4 as uuid} from 'uuid'

import { Container, TodosAreas } from './styles'

import TodoArea from '../../components/todo-area'
import TodoList from '../../components/todo-list'
import HeaderPage from '../../components/header-page'

import { ReducersType } from '../../store/configs/root-reducer'
import {StateType as StateTypeTodoList} from '../../store/modules/todo-lists/reducer'
import { TodoData } from '../../components/todo-item'
import { FormNewTodo } from '../../components/form-new-todo'

const TodoPage = () => {

  const {
    done, todo, doing
  } = useSelector<ReducersType>(state => state.todoLists) as StateTypeTodoList

  return (
    <>
      <Container>
        <HeaderPage>Todo App</HeaderPage>
        <TodosAreas>
          <TodoArea id='todo'>
            <FormNewTodo todoAreaID='todo' />
            <TodoList todoItems={todo} todoAreaID='todo' />
          </TodoArea>

          <TodoArea id='doing'>
            <FormNewTodo todoAreaID='todo' />
            <TodoList todoItems={doing} todoAreaID='doing'/>
          </TodoArea>
          
          <TodoArea id='done'>
            <FormNewTodo todoAreaID='todo' />
            <TodoList todoItems={done} todoAreaID='done'/>
          </TodoArea>
        </TodosAreas>
      </Container>
    </>
  )
}

export {TodoPage}


const makeDataTemp = (): TodoData[] => [
  { 
    id: uuid(), 
    todoAreaID: 'doing',
    title: 'fazer coco', 
    description: 'fazer coco ate morrer todos os dias'
  },
  { 
    id: uuid(), 
    todoAreaID: 'done',
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
    todoAreaID: 'todo',
    title: 'fazer coco', 
    description: 'fazer coco ate morrer todos os dias'
  },
  { 
    id: uuid(), 
    todoAreaID: 'doing',
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
    todoAreaID: 'todo',
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
    todoAreaID: 'done',
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
    todoAreaID: 'doing',
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