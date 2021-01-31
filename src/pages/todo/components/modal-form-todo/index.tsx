import { useCallback, useEffect, useState, MouseEvent } from 'react'
import { capitalizeFirstLetter } from '../../../../helpers/capitalize-first-letter'
import { insertNewTodoItemValidatiton } from '../../../../validations/insert-new-todo-item-validation'

import { Modal } from '../../../../components/utils/modal'
import { InputText } from '../../../../components/inputs/input-text'
import { Form } from '../form'
import { ButtonGroup } from '../button-group'
import {
  ModalCloseButton,
  OnClickModalCloseButton
} from '../../../../components/inputs/modal-close-button'

import { TodoAreaID, TodoItemID, TodoItemModel } from '../../../../domain/models/TodoItem'

import {
  InputTextArea,
  ButtonHeader,
  ErrorsContainer,
  Error,
  ModalContainer,
  ModalMain,
  ModalTitle,
  ModalHeader,
  TextButtonFinish
} from './styles'

export type OnClickButtonParams = {
  id?: number,
  title: string
  description: string
  todoAreaID: TodoAreaID
  oldTodoItemID: TodoAreaID | null
}
export type OnClickDeleteTodoItemParams = {
  todoItemID: TodoItemID,
  todoAreaID: TodoAreaID
}
export type OnClickDeleteTodoItem = (params: OnClickDeleteTodoItemParams) => void
export type OnClickButtonFinish = (params: OnClickButtonParams) => void
export type OnClickOutSide = () => void

type ModalFormTodoProps = {
  todoAreaID: TodoAreaID
  isOpen: boolean
  textButtonFinish: TextButtonFinish
  todoItemUpdate?: TodoItemModel
  onClickButtonFinish: OnClickButtonFinish
  onClickDeleteTodoItem?: OnClickDeleteTodoItem
  onClickOutSide: OnClickOutSide
  onClickModalCloseButton: OnClickModalCloseButton
}

const ModalFormTodo = ({
  todoAreaID,
  textButtonFinish,
  isOpen,
  todoItemUpdate,
  onClickOutSide,
  onClickButtonFinish,
  onClickDeleteTodoItem,
  onClickModalCloseButton
}: ModalFormTodoProps) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [errors, setErrors] = useState([] as string[])

  useEffect(() => {
    if (todoItemUpdate) {
      setDescription(todoItemUpdate.description)
      setTitle(todoItemUpdate.title)
    }
  }, [todoItemUpdate])

  const handleInsertOrUpdateTodoItem = useCallback(
    (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void => {
      const errorsForm = insertNewTodoItemValidatiton({ title, description })
      if (errorsForm.length > 0) return setErrors(errorsForm) as void
      onClickButtonFinish({
        id: todoItemUpdate ? todoItemUpdate.id : null,
        title,
        description,
        todoAreaID,
        oldTodoItemID: todoItemUpdate ? todoAreaID : null
      })
      setDescription('')
      setTitle('')
    }, [todoItemUpdate, description, title, onClickButtonFinish, todoAreaID])

  const handleDeleteTodoItem = useCallback(
    (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void => {
      onClickDeleteTodoItem({ todoAreaID, todoItemID: todoItemUpdate.id })
    }, [onClickDeleteTodoItem, todoItemUpdate, todoAreaID])

  return (
    <Modal
      isOpen={isOpen}
      onClickOutSide={onClickOutSide}>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>
            <span>
              { capitalizeFirstLetter(todoAreaID) }
            </span>
          </ModalTitle>
          <ButtonGroup>
              <ButtonHeader
                onClick={e => handleInsertOrUpdateTodoItem(e)}>
              { textButtonFinish }
              </ButtonHeader>
              {
                todoItemUpdate &&
                  <ButtonHeader
                    onClick={e => handleDeleteTodoItem(e)}>
                    Delete
                  </ButtonHeader>
              }
              <ModalCloseButton onClick={onClickModalCloseButton}/>
          </ButtonGroup>
        </ModalHeader>
        <ModalMain>
          <Form>
            <InputText
              value={title}
              placeholder='Título até 30 caracteres...'
              onChange={e => setTitle(e.target.value)}
            />
            <InputTextArea
              value={description}
              placeholder='Descrição até 255 caracteres...'
              onChange={e => setDescription(e.target.value)}
            />
            <ErrorsContainer>
            {
              errors.length > 0 && errors.map((error, index) => <Error key={index}>{error}</Error>)
            }
            </ErrorsContainer>
          </Form>
        </ModalMain>
      </ModalContainer>
    </Modal>
  )
}

export { ModalFormTodo }
