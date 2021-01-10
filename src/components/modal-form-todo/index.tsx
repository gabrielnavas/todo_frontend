import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid'

import * as actions from '../../store/modules/todo-lists/actions'
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
  ModalBody,
  ModalTitle,
  ModalHeader
} from './styles'

export type OnClickButtonFinish =  (id: string | null, title: string, description: string) => void
export type OnClickOutSide = () => void

type ModalFormTodoProps = {
  todoAreaID: TodoAreaID
  isOpen: boolean
  textButtonFinish: string
  onClickButtonFinish: OnClickButtonFinish
  onClickOutSide: OnClickOutSide
}

const ModalFormTodo = ({
  todoAreaID, 
  textButtonFinish, 
  isOpen,
  onClickOutSide,
  onClickButtonFinish
}: ModalFormTodoProps) => {

  const dispatch = useDispatch()
  const [id, setID] = useState(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [errors, setErrors] = useState([] as string[])


  const handleSendTodoItem = useCallback( (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    event.preventDefault()
    const todoItem = {
      id: id ? id : uuid(),
      description,
      title,
      todoAreaID
    } as TodoData
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
    dispatch(actions.insertOneTodoItem({todoItem}))
    setDescription('')
    setTitle('')
    onClickButtonFinish(id, title, description)
  }, [id, description, title, onClickButtonFinish, dispatch, todoAreaID])


  return (
    <Modal 
      isOpen={isOpen}
      onClickOutSide={onClickOutSide}>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>
            <span>
              {todoAreaID.split('')[0].toLocaleUpperCase() + todoAreaID.slice(1)}
            </span>
          </ModalTitle>
          <ButtonGroup>
              <ButtonSend onClick={e => handleSendTodoItem(e)}>{
                textButtonFinish
              }</ButtonSend>
          </ButtonGroup>
        </ModalHeader>
        <ModalBody>
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
        </ModalBody>
      </ModalContainer> 
    </Modal>
  )
}

export {ModalFormTodo}