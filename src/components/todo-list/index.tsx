import { useCallback, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { ReducersType } from '../../store/configs/root-reducer'
import * as actions from '../../store/modules/todo-lists/actions'
import { ModalFormTodo } from '../modal-form-todo'
import TodoItem, { TodoData }  from '../todo-item'
import {
  Container, 
  Button,

} from './styles'
import {v4 as uuid} from 'uuid'
import { capitalizeFirstLetter } from '../../helpers/capitalize-first-letter'

export type TodoAreaID = 'todo' | 'doing' | 'done'

type TodoListProps = {
  todoItems: TodoData[]
  todoAreaID: TodoAreaID
}

export default function TodoList({todoItems, todoAreaID}: TodoListProps) {
  const dispatch = useDispatch()
  const todoItemMove = useSelector<ReducersType, TodoData>(state => state.todoItemMove)

  const [isOpenInsertModal, setIsOpenInsertModal] = useState(false)

  const handleOnDrop = useCallback(() => {
    dispatch(
      actions.removeOneItemByTodoAreaID({ 
        todoAreaID: todoItemMove.todoAreaID, todoItemID: todoItemMove.id 
      })
    )
    dispatch(
      actions.updateOneTodoItemByTodoAreaId({ 
        todoItemMove, todoAreaIDToInsert: todoAreaID 
      })
    )
  },[dispatch, todoAreaID, todoItemMove])

  const handleButtonInsert = () => {
    setIsOpenInsertModal(!isOpenInsertModal)
  }

  const onClickOutSideModal = (): void => {
    setIsOpenInsertModal(!isOpenInsertModal)
  }

  const handleOnClickButtonFinish = useCallback((id: string | null, title: string, description: string) => {
    if(id) {
      actions.insertOneTodoItem({ 
        todoItem: {
          id,
          todoAreaID,
          title,
          description
        }
      })
    } 
    
  }, [])


  return (
    <Container
      onDragOver={e => e.preventDefault()}
      onDrop={e => handleOnDrop()}
    >
      { 
        todoItems.map(todoData => 
          <TodoItem
            key={todoData.id}
            todoData={todoData}
          />
        ) 
      }
      <Button onClick={e => handleButtonInsert()}>Insert {capitalizeFirstLetter(todoAreaID)}</Button>
      {/* <ButtonEdit onClick={e => handleButtonEdit()} /> */}
      {/* <ButtonDelete onClick={e => handleButtonDelete()} /> */}
      
      <ModalFormTodo 
        isOpen={isOpenInsertModal} 
        onClickOutSide={onClickOutSideModal}
        todoAreaID={todoAreaID}
        textButtonFinish='Insert'
        onClickButtonFinish={handleOnClickButtonFinish}
      />
    </Container>
  )
}
