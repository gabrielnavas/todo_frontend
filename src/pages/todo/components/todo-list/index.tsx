import { useCallback, useState, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuid } from 'uuid'

import { ReducersType } from '../../../../store/configs/root-reducer'
import * as actionsInsert from '../../../../store/modules/todo-lists/actions/inserts/insert-one-todo-item'
import * as actionsUpdates from '../../../../store/modules/todo-lists/actions/updates/update-one-todo-item-by-id'
import * as actionsDeletes from '../../../../store/modules/todo-lists/actions/deletes/delete-one-todo-item-by-id'
import { ModalFormTodo, OnClickButtonParams, OnClickDeleteTodoItemParams } from '../modal-form-todo'
import TodoItem from '../todo-item'
import {
  Container,
  Button

} from './styles'
import { capitalizeFirstLetter } from '../../../../helpers/capitalize-first-letter'
import { TodoItemModel, TodoAreaID } from 'domain/models/TodoItem'

type TodoListProps = {
  todoItems: TodoItemModel []
  todoAreaID: TodoAreaID
}

export default function TodoList ({ todoItems, todoAreaID }: TodoListProps) {
  const dispatch = useDispatch()
  const todoItemMove = useSelector<ReducersType, TodoItemModel>(state => state.todoItemMove)

  const [isOpenModalInsert, setIsOpenModalInsert] = useState(false)
  const [isOpenModalUpdate, setIsOpenModalUpdate] = useState(false)

  const handleOnDrop = useCallback(() => {
    dispatch(actionsDeletes.request({
      todoAreaID: todoItemMove.todoAreaID, todoItemID: todoItemMove.id
    }))
    dispatch(actionsUpdates.request({
      oldTodoItem: todoItemMove, todoItem: todoItemMove
    }))
  }, [dispatch, todoAreaID, todoItemMove])

  const handleOnClickModalCloseButton = () => {
    setIsOpenModalInsert(false)
    setIsOpenModalUpdate(false)
  }

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
    if (params.id) {
      dispatch(actionsUpdates.request({
        todoItem: {
          id: params.id,
          todoAreaID: params.todoAreaID,
          title: params.title,
          description: params.description
        },
        oldTodoItem: {
          id: params.id,
          todoAreaID: params.todoAreaID,
          title: params.title,
          description: params.description
        }
      }))
      return
    }
    dispatch(actionsInsert.request({
      todoAreaID: params.todoAreaID,
      title: params.title,
      description: params.description
    }))
    setIsOpenModalUpdate(false)
  }, [dispatch, isOpenModalInsert])

  const handleOnClickModalDeleteTodoItem = useCallback((params: OnClickDeleteTodoItemParams) => {
    dispatch(actionsDeletes.request({
      todoAreaID: params.todoAreaID,
      todoItemID: params.todoItemID
    }))
  }, [dispatch])

  return (
    <Container
      onDragOver={e => e.preventDefault()}
      onDrop={e => handleOnDrop()}>
      <Button onClick={e => handleButtonInsert()}>
        Insert {capitalizeFirstLetter(todoAreaID)}
      </Button>
      {
        todoItems.map((todoData, index) => {
          return (
            <Fragment key={uuid()}>
              <ModalFormTodo
                key={uuid()}
                isOpen={isOpenModalUpdate}
                onClickOutSide={onClickOutSideModalUpdate}
                onClickButtonFinish={handleOnClickButtonFinish}
                onClickModalCloseButton={handleOnClickModalCloseButton}
                onClickDeleteTodoItem={handleOnClickModalDeleteTodoItem}
                textButtonFinish='Update'
                todoAreaID={todoAreaID}
                todoItemUpdate={todoData}
              />
              <TodoItem
                key={uuid()}
                onClick={handleOnClickTodoItemComponent}
                todoData={todoData}
              />
            </Fragment>
          )
        })
      }
      <ModalFormTodo
        isOpen={isOpenModalInsert}
        onClickOutSide={onClickOutSideModalInsert}
        onClickButtonFinish={handleOnClickButtonFinish}
        onClickModalCloseButton={handleOnClickModalCloseButton}
        todoAreaID={todoAreaID}
        textButtonFinish='Insert'
      />
    </Container>
  )
}
