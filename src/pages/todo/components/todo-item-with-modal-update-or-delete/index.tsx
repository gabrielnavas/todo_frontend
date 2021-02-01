
import { TodoItemModel } from 'domain/models/TodoItem'

import { useState } from 'react'
import { ModalFormTodo } from '../modal-form-todo'
import { TextButtonFinish } from '../modal-form-todo/styles'
import TodoItemComponent from '../todo-item'

type Props = {
  todoItem: TodoItemModel
  textButtonFinish: TextButtonFinish
}

export const TodoItemWithModalUpdateOrDelete = (props: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <>
      <ModalFormTodo
        isOpen={isOpenModal}
        onClickOutSide={() => setIsOpenModal(false)}
        onClickModalCloseButton={() => setIsOpenModal(false)}
        todoAreaID={props.todoItem.todoAreaID}
        todoItemToUpdateOrDelete={props.todoItem}
      />
      <TodoItemComponent
        onClick={() => setIsOpenModal(true)}
        todoData={props.todoItem}
      />
    </>
  )
}
