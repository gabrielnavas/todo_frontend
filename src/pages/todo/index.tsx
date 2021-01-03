import {useSelector} from 'react-redux'

import { Container, TodosAreas } from './styles'

import TodoArea from '../../components/todo-area'
import TodoList from '../../components/todo-list'
import HeaderPage from '../../components/header-page'

import { ReducersType } from '../../store/configs/root-reducer'
import {StateType as StateTypeTodoList} from '../../store/modules/todo-lists/reducer'

const TodoPage = () => {

  const {
    done, todo, doing
  } = useSelector<ReducersType>(state => state.todoLists) as StateTypeTodoList

  return (
    <>
      <Container>
        <HeaderPage>Todo App</HeaderPage>
        <TodosAreas>
          <TodoArea
            title='Todo'>
            <TodoList todoItems={todo} todoAreaID='todo' />
          </TodoArea>
          <TodoArea
            title='ToDoing'>
            <TodoList todoItems={doing} todoAreaID='doing'/>
          </TodoArea>
          <TodoArea
            title='Done'>
            <TodoList todoItems={done} todoAreaID='done'/>
          </TodoArea>
        </TodosAreas>
      </Container>
    </>
  )
}

export {TodoPage}