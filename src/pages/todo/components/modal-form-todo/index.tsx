import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { capitalizeFirstLetter } from '../../../../helpers/capitalize-first-letter'

import { Modal } from '../../../../components/utils/modal'
import { InputText } from '../../../../components/inputs/input-text'
import { Form } from '../form'
import { ButtonGroup } from '../button-group'
import {
  ModalCloseButton,
  OnClickModalCloseButton
} from '../../../../components/inputs/modal-close-button'

import { TodoAreaID, TodoItemModel } from '../../../../domain/models/TodoItem'

import {
  InputTextArea,
  ButtonHeader,
  ErrorsContainer,
  Error,
  ModalContainer,
  ModalMain,
  ModalTitle,
  ModalHeader
} from './styles'

import { ReducersType } from 'store/configs/root-reducer'

import * as actionsInsert from '../../../../store/modules/todo-lists/actions/inserts/insert-one-todo-item'
import * as actionsUpdates from '../../../../store/modules/todo-lists/actions/updates/update-one-todo-item-by-id'
import * as actionsDeletes from '../../../../store/modules/todo-lists/actions/deletes/delete-one-todo-item-by-id'
import { insertNewTodoItemValidatiton } from '../../../../validations/insert-new-todo-item-validation'

type ModalFormTodoProps = {
  todoAreaID: TodoAreaID
  isOpen: boolean
  onClickOutSide: () => void
  onClickModalCloseButton: OnClickModalCloseButton
  todoItemToUpdateOrDelete?: TodoItemModel
}

const ModalFormTodo = (props: ModalFormTodoProps) => {
  const dispatch = useDispatch()
  const { errors: errorsRequest } = useSelector((state: ReducersType) => state.todoLists)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [errorsForm, setErrorsForm] = useState<string[]>([])

  useEffect(() => {
    if (props.todoItemToUpdateOrDelete) {
      setDescription(props.todoItemToUpdateOrDelete.description)
      setTitle(props.todoItemToUpdateOrDelete.title)
      console.log(props.todoItemToUpdateOrDelete)
    }
  }, [props.todoItemToUpdateOrDelete])

  const handleOnClickUpdateButton = useCallback(() => {
    const todoItemUpdated = {
      id: props.todoItemToUpdateOrDelete.id,
      todoAreaID: props.todoItemToUpdateOrDelete.todoAreaID,
      description,
      title
    } as TodoItemModel
    dispatch(actionsUpdates.request({
      oldTodoItem: todoItemUpdated,
      todoItem: todoItemUpdated
    }))
  }, [title, description])

  const handleOnClickDeleteButton = useCallback(() => {
    const params = {
      todoAreaID: props.todoAreaID,
      todoItemID: props.todoItemToUpdateOrDelete.id
    } as actionsDeletes.ParamsRequest
    dispatch(actionsDeletes.request(params))
  }, [title, description])

  const handleOnClickInsertButton = useCallback(() => {
    const errors = insertNewTodoItemValidatiton({ title, description })
    if (errors.length > 0) {
      setErrorsForm(errors)
      return
    }
    const params = {
      title,
      description,
      todoAreaID: props.todoAreaID
    } as actionsInsert.ParamsRequest
    dispatch(actionsInsert.request(params))
  }, [title, description])

  const renderButtonsUpdateAndDelete = () =>
    <>
      <ButtonHeader onClick={e => handleOnClickUpdateButton()}>
        Update
      </ButtonHeader>
      <ButtonHeader onClick={e => handleOnClickDeleteButton()}>
        Delete
      </ButtonHeader>
    </>

  const renderButtonInsert = () =>
    <ButtonHeader onClick={e => handleOnClickInsertButton()}>
      Insert
    </ButtonHeader>

  return (
    <Modal
      isOpen={props.isOpen}
      onClickOutSide={props.onClickOutSide}>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>
            <span>
              { capitalizeFirstLetter(props.todoAreaID) }
            </span>
          </ModalTitle>
          <ButtonGroup>
              {
                props.todoItemToUpdateOrDelete
                  ? renderButtonsUpdateAndDelete()
                  : renderButtonInsert()
              }
              <ModalCloseButton onClick={props.onClickModalCloseButton}/>
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
              errorsRequest.length > 0 &&
              errorsRequest.map((error, index) => <Error key={index}>{error}</Error>)
            }
            {
              errorsForm.length > 0 && errorsForm.length > 0 &&
                 errorsForm.map((error, index) => <Error key={index}>{error}</Error>)
            }
            </ErrorsContainer>
          </Form>
        </ModalMain>
      </ModalContainer>
    </Modal>
  )
}

export { ModalFormTodo }
