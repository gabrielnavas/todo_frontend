import {
  Container,
} from './styles'

type ButtonGroupAuthenticationProps = {
  children: React.ReactNode[] | React.ReactNode
}

export const ButtonGroupAuthentication = ({children}: ButtonGroupAuthenticationProps) => {
  return (
    <Container>
      {children}
    </Container>
  )
}