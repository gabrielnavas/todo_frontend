import { useCallback, useState, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuid } from 'uuid'

import { ReducersType } from '../../../../store/configs/root-reducer'
import * as actionsInserts from '../../../../store/modules/todo-lists/actions/inserts/insert-one-todo'
import * as actionsUpdates from '../../../../store/modules/todo-lists/actions/updates/update-one-todo-item-by-id'
import * as actionsDeletes from '../../../../store/modules/todo-lists/actions/deletes/delete-item-by-todo-item-id'
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
  const todoItemMove = useSelector<ReducersType, TodoItemModel >(state => state.todoItemMove)

  const [isOpenModalInsert, setIsOpenModalInsert] = useState(false)
  const [isOpenModalUpdate, setIsOpenModalUpdate] = useState(false)

  const handleOnDrop = useCallback(() => {
    dispatch(actionsDeletes.deleteOneItemByTodoAreaIDAndTodoItemID({
      todoAreaID: todoItemMove.todoAreaID, todoItemID: todoItemMove.todoAreaID
    }))
    dispatch(actionsUpdates.updateOneTodoItemByTodoAreaID({
      todoItemMove, todoAreaIDToInsert: todoAreaID
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
    if (isOpenModalInsert) {
      dispatch(actionsInserts.insertOneTodoItem({
        todoItem: {
          id: uuid(),
          todoAreaID: params.todoAreaID,
          title: params.title,
          description: params.description
        }
      }))
    } else {
      dispatch(actionsUpdates.updateOneTodoItemByID({
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

  const handleOnClickModalDeleteTodoItem = useCallback((params: OnClickDeleteTodoItemParams) => {
    dispatch(actionsDeletes.deleteOneItemByTodoAreaIDAndTodoItemID({ ...params }))
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
