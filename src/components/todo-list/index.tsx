import React, { useCallback, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { v4 as uuid }from 'uuid'

import { ReducersType } from '../../store/configs/root-reducer'
import * as actions from '../../store/modules/todo-lists/actions'
import { ModalFormTodo, OnClickButtonParams } from '../modal-form-todo'
import TodoItem, { TodoData }  from '../todo-item'
import {
  Container, 
  Button,

} from './styles'
import { capitalizeFirstLetter } from '../../helpers/capitalize-first-letter'

export type TodoAreaID = 'todo' | 'doing' | 'done'

type TodoListProps = {
  todoItems: TodoData[]
  todoAreaID: TodoAreaID
}

export default function TodoList({todoItems, todoAreaID}: TodoListProps) {
  const dispatch = useDispatch()
  const todoItemMove = useSelector<ReducersType, TodoData>(state => state.todoItemMove)

  const [isOpenModalInsert, setIsOpenModalInsert] = useState(false)
  const [isOpenModalUpdate, setIsOpenModalUpdate] = useState(false)

  const handleOnDrop = useCallback(() => {
    dispatch(actions.removeOneItemByTodoAreaID({ 
      todoAreaID: todoItemMove.todoAreaID, todoItemID: todoItemMove.id 
    }))
    dispatch(actions.updateOneTodoItemByTodoAreaID({ 
      todoItemMove, todoAreaIDToInsert: todoAreaID 
    }))
  },[dispatch, todoAreaID, todoItemMove])

  const handleButtonInsert = () => {
    setIsOpenModalInsert(true)
  }

  const handleOnClickTodoItemComponent = () => {
    setIsOpenModalUpdate(true)
  }

  const onClickOutSideModalInsert = (): void => {
    setIsOpenModalInsert(false)
  }

  const onClickOutSideModalUpdate = (): void => {
    setIsOpenModalUpdate(false)
  }

  const handleOnClickButtonFinish = useCallback((params: OnClickButtonParams) => {
    if(isOpenModalInsert) {
      dispatch(actions.insertOneTodoItem({ 
        todoItem: {
          id: uuid(),
          todoAreaID: params.todoAreaID,
          title: params.title,
          description: params.description
        }
      }))
    } else {
      dispatch(actions.updateOneTodoItemByID({ 
        todoItem: {
          id: params.id,
          todoAreaID: params.todoAreaID,
          title: params.title,
          description: params.description
        },
        oldTodoItemID: params.oldTodoItemID
      }))
      setIsOpenModalUpdate(false)
    }
  }, [dispatch, isOpenModalInsert])

  return (
    <Container
      onDragOver={e => e.preventDefault()}
      onDrop={e => handleOnDrop()}
    >
      <Button onClick={e => handleButtonInsert()}>
        Insert {capitalizeFirstLetter(todoAreaID)}
      </Button>
      { 
        todoItems.map( (todoData, index) => {
          return (
            <React.Fragment key={uuid()}>
              <ModalFormTodo 
                key={uuid()}
                isOpen={isOpenModalUpdate} 
                onClickOutSide={onClickOutSideModalUpdate}
                onClickButtonFinish={handleOnClickButtonFinish}
                textButtonFinish='Update'
                todoAreaID={todoAreaID}
                todoItemUpdate={todoData}
              />
              <TodoItem
                key={uuid()}
                onClick={handleOnClickTodoItemComponent}
                todoData={todoData}
              />
            </React.Fragment>
          )
        }
         
        ) 
      }
      {/* <ButtonDelete onClick={e => handleButtonDelete()} /> */}
      <ModalFormTodo 
        isOpen={isOpenModalInsert} 
        onClickOutSide={onClickOutSideModalInsert}
        onClickButtonFinish={handleOnClickButtonFinish}
        todoAreaID={todoAreaID}
        textButtonFinish='Insert'
      />
    </Container>
  )
}
