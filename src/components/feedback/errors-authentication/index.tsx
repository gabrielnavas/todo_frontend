import {
  Container,
  Error
} from './styles'


type ErrorsAuthenticationProps = {
  errors: string[]
}

export const ErrorsAuthentication = ({errors}: ErrorsAuthenticationProps) => {
  return (
    <Container>
    {
      errors.map(
        error => <Error><strong>* </strong>{error}</Error>
      ) 
    }
    </Container>
  )
}