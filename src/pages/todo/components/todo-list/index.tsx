import { useCallback, useState, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  Container,
  Button,
  InsertNewTodoItemIconButton
} from './styles'

import { ReducersType } from '../../../../store/configs/root-reducer'
import * as actionsUpdates from '../../../../store/modules/todo-lists/actions/updates/update-one-todo-item-by-id'
import { ModalFormTodo } from '../modal-form-todo'
import { capitalizeFirstLetter } from '../../../../helpers/capitalize-first-letter'
import { TodoItemModel, TodoAreaID } from 'domain/models/TodoItem'
import { TodoItemWithModalUpdateOrDelete } from '../todo-item-with-modal-update-or-delete'

type TodoListProps = {
  todoItems: TodoItemModel []
  todoAreaID: TodoAreaID
}

export default function TodoList ({ todoItems, todoAreaID }: TodoListProps) {
  const dispatch = useDispatch()
  const todoItemMove = useSelector((state: ReducersType) => state.todoItemMove)

  const [isOpenModalInsert, setIsOpenModalInsert] = useState(false)

  const handleOnDrop = useCallback(() => {
    const todoAreaIDNow = todoAreaID
    const oldTodoItem = todoItemMove
    const newTodoItem = {
      ...todoItemMove,
      todoAreaID: todoAreaIDNow
    }
    dispatch(actionsUpdates.request({
      oldTodoItem: oldTodoItem,
      todoItem: newTodoItem
    }))
  }, [dispatch, todoAreaID, todoItemMove])

  return (
    <Container
      onDragOver={e => e.preventDefault()}
      onDrop={e => handleOnDrop()}>
      <Button onClick={e => setIsOpenModalInsert(true)}>
        <InsertNewTodoItemIconButton />
        Insert {capitalizeFirstLetter(todoAreaID)}
      </Button>
      {
        todoItems.map((todoItem) =>
          <Fragment key={todoItem.id.toString()}>
            <TodoItemWithModalUpdateOrDelete
                textButtonFinish='Update'
                todoItem={todoItem}
            />
          </Fragment>
        )
      }
      <ModalFormTodo
        isOpen={isOpenModalInsert}
        setIsOpen={setIsOpenModalInsert}
        todoAreaID={todoAreaID}
        onClickOutSide={() => setIsOpenModalInsert(false)}
      />
    </Container>
  )
}
