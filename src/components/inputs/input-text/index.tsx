import {
  ChangeEvent,
  ReactElement
} from 'react'

import {
  Container,
  Input
} from './styles'

export type InputTextProps = {
  Icon?: ReactElement
  type?: 'email' | 'text' | 'password'
  value?: string | number
  placeholder?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const InputText = (props: InputTextProps) => {
  return (
    <Container>
      {props.Icon}
      <Input
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </Container>
  )
}

export { InputText }
