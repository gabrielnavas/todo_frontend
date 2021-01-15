import {
  Container,
} from './styles'

type FormAuthenticationProps = {
  children: React.ReactNode[] | React.ReactNode 
}

export const FormAuthentication = ({children}: FormAuthenticationProps) => {
  return (
    <Container>{children}</Container>
  )
}