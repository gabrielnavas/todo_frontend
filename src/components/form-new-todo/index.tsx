import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid'

import * as actions from '../../store/modules/todo-lists/actions'
import { TodoData } from '../todo-item'
import { TodoAreaID } from '../todo-list'
import {
  Container,
  InputText,
  InputTextArea,
  ButtonArea,
  ButtonSend, 
  ErrorsContainer,
  Error,
} from './styles'

type FormNewTodoProps = {
  todoAreaID: TodoAreaID
}

const FormNewTodo = ({todoAreaID}: FormNewTodoProps) => {

  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [errors, setErrors] = useState([] as string[])

  const handleSendTodoItem = useCallback( (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    event.preventDefault()
    const todoItem = {
      id: uuid(),
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
  }, [description, title, dispatch, todoAreaID])


  return (
    <Container>
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
      <ButtonArea>
        <ButtonSend onClick={e => handleSendTodoItem(e)}>Enviar</ButtonSend>
      </ButtonArea>
    </Container>
  )
}

export {FormNewTodo}