import {
  Container
} from './styles'

export type FormProps = {
  children: React.ReactNode | React.ReactNode[]
}

export const Form = ({children}: FormProps) => {
  return (
    <Container>
      {children}
    </Container>
  )
}