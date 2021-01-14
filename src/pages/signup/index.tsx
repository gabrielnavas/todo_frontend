import { useCallback, useState } from 'react'

import { InputText } from '../../components/inputs/input-text'

import {
  Container, 
  Icon,
  Phrase,
  LeftSide,
  RightSide,
  Button,
  ButtonGroup,
  Form,
  InputGroup,
  TitleRightSide
} from './styles'

export const SignUpPage = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const handleOnCLickButtonLoginPage = useCallback(() => {

  }, [])

  const handleOnCLickButtonCreateAccount = useCallback(() => {

  }, [])

  return (
    <Container>
      <LeftSide>
        <Icon />
        <Phrase>Organize your day with <strong>Todo App</strong></Phrase>
      </LeftSide>
      <RightSide>
        <TitleRightSide>Create your account</TitleRightSide>
        <Form>
          <InputGroup>
            <InputText 
              type='text'
              onChange={e => setName(e.target.value)}
              placeholder='Your name'
              value={name}
            />
            <InputText 
              type='email'
              onChange={e => setEmail(e.target.value)}
              placeholder='Your email'
              value={email}
            />
            <InputText 
              type='password'
              onChange={e => setPassword(e.target.value)}
              placeholder='Your password'
              value={password}
            />
            <InputText 
              type='text'
              onChange={e => setPasswordConfirmation(e.target.value)}
              placeholder='Your password confirmation'
              value={passwordConfirmation}
            />
          </InputGroup>
          <ButtonGroup>
            <Button
              onClick={e => handleOnCLickButtonLoginPage()}
            >Login page</Button>
            <Button
              onClick={e => handleOnCLickButtonCreateAccount()}
            >Create</Button>
          </ButtonGroup>

        </Form>
      </RightSide>
    </Container>
  )
}