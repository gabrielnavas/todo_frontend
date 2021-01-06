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
  const [errors, setErrors] = useState<string[]>([])

  const handleSendTodoItem = useCallback( (todoItem: TodoData) => {
    if( !title.trim()) setErrors([...errors, 'Título não pode ser vazio!'])
    if( title.trim().length < 3) setErrors([...errors, 'Título está muito pequeno!'])
    if( title.trim().length > 30) setErrors([...errors, 'Título está muito grande!'])
    if( !description.trim()) setErrors([...errors, 'Descrição não pode ser vazia!'])
    if( description.trim().length > 255) setErrors([...errors, 'Descrição está muito grande!'])
    if(errors.length > 0) return

    dispatch(actions.insertOneTodoItem({todoItem}))
    setDescription('')
    setTitle('')
  }, [description, errors, title])


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
      <ButtonSend onClick={e => { e.preventDefault(); handleSendTodoItem({
        id: uuid(),
        description,
        title,
        todoAreaID
      })}}>Enviar</ButtonSend>
    </Container>
  )
}

export {FormNewTodo}