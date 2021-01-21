import { useSelector } from 'react-redux'

import { Container, TodosAreas } from './styles'

import TodoArea from './components/todo-area'
import TodoList from './components/todo-list'
import { HeaderPage } from '../../components/surfaces/header-page'
import { ButtonHeaderLogout } from '../../components/inputs/button-header-logout'

import { ReducersType } from '../../store/configs/root-reducer'
import { StateTypeTodoLists } from '../../store/modules/todo-lists/reducer'

const TodoPage = () => {
  const {
    done, todo, doing
  } = useSelector<ReducersType>(state => state.todoLists) as StateTypeTodoLists

  return (
    <>
      <Container>
        <HeaderPage>
          <span>Todo App</span>
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
