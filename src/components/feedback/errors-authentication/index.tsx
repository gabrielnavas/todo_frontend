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
      errors.length > 0 && errors.map(
        error => <Error key={error}><strong>* </strong>{error}</Error>
      ) 
    }
    </Container>
  )
}