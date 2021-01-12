import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid'
import { capitalizeFirstLetter } from '../../helpers/capitalize-first-letter'

import { Modal } from '../modal'
import { TodoData } from '../todo-item'
import { TodoAreaID } from '../todo-list'
import {
  Form,
  InputText,
  InputTextArea,
  ButtonGroup,
  ButtonSend, 
  ErrorsContainer,
  Error,
  ModalContainer,
  ModalMain,
  ModalTitle,
  ModalHeader
} from './styles'

export type OnClickButtonParams = { 
  id: string | null,
  title: string
  description: string
  todoAreaID: TodoAreaID 
  oldTodoItemID: TodoAreaID | null
}
export type OnClickButtonFinish =  (onClickButtonparams: OnClickButtonParams) => void
export type OnClickOutSide = () => void

type ModalFormTodoProps = {
  todoAreaID: TodoAreaID
  isOpen: boolean
  textButtonFinish: string
  todoItemUpdate?: TodoData
  onClickButtonFinish: OnClickButtonFinish
  onClickOutSide: OnClickOutSide
}

const ModalFormTodo = ({
  todoAreaID, 
  textButtonFinish, 
  isOpen,
  todoItemUpdate,
  onClickOutSide,
  onClickButtonFinish
}: ModalFormTodoProps) => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [errors, setErrors] = useState([] as string[])

  useEffect(() => {
    if(todoItemUpdate) {
      setDescription(todoItemUpdate.description)
      setTitle(todoItemUpdate.title)
    }
  }, [todoItemUpdate])


  const handleSendTodoItem = useCallback( (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    event.preventDefault()
    const errorsForm = [] as string[]
    if( !title.trim()) {
      errorsForm.push('Título não pode ser vazio!')
    }
    if( title.trim().length < 3) {
      errorsForm.push('Título está muito pequeno!')
    }
    if( title.trim().length > 30) {
      errorsForm.push('Título está muito grande!')
    }
    if( !description.trim()) {
      errorsForm.push('Descrição não pode ser vazia!')
    }
    if( description.trim().length > 255) {
      errorsForm.push('Descrição está muito grande!')
    }
    if(errorsForm.length > 0) {
      setErrors(errorsForm)
      return
    }
    if(todoItemUpdate) {
      onClickButtonFinish({id: todoItemUpdate.id, title, description, todoAreaID, oldTodoItemID: todoAreaID})
    }
    else onClickButtonFinish({id: null, title, description, todoAreaID, oldTodoItemID: null})
    setDescription('')
    setTitle('')
  }, [todoItemUpdate, description, title, onClickButtonFinish, todoAreaID])


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
              <ButtonSend onClick={e => handleSendTodoItem(e)}>{
                textButtonFinish
              }</ButtonSend>
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
                errors.length > 0 && errors.map( (error, index) => <Error key={index}>{error}</Error>)
              }
            </ErrorsContainer>
          </Form>
        </ModalMain>
      </ModalContainer> 
    </Modal>
  )
}

export {ModalFormTodo}