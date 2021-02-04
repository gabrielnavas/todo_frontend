import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import {
  Container,
  TodosAreas,
  TitleHeader,
  TitleContainer
} from './styles'

import TodoArea from './components/todo-area'
import TodoList from './components/todo-list'
import { HeaderPage } from '../../components/surfaces/header-page'
import { ButtonHeaderLogout } from '../../components/inputs/button-header-logout'

import { ReducersType } from '../../store/configs/root-reducer'
import { StateTypeTodoLists } from '../../store/modules/todo-lists/reducer/state-initital'

import * as actionFindAllByIdUser from '../../store/modules/todo-lists/actions/finds/find-all'

const TodoPage = () => {
  const dispatch = useDispatch()
  const {
    done, todo, doing
  } = useSelector<ReducersType>(state => state.todoLists) as StateTypeTodoLists

  useEffect(() => {
    dispatch(actionFindAllByIdUser.request())
  }, [])

  return (
    <>
      <Container>
        <HeaderPage>
          <TitleContainer>
            <TitleHeader>Todo App</TitleHeader>
          </TitleContainer>
          <ButtonHeaderLogout>Logout</ButtonHeaderLogout>
        </HeaderPage>
        <TodosAreas>
          <TodoArea>
            <TodoList todoItems={todo} todoAreaID='todo' />
          </TodoArea>
          <TodoArea>
            <TodoList todoItems={doing} todoAreaID='doing'/>
          </TodoArea>
          <TodoArea>
            <TodoList todoItems={done} todoAreaID='done'/>
          </TodoArea>
        </TodosAreas>
      </Container>
    </>
  )
}

export { TodoPage }
