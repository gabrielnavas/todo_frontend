import {
  Container
} from './styles'

type ButtonAuthenticationProps = {
  children: string
  disabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const ButtonAuthentication = ({children, disabled, onClick}: ButtonAuthenticationProps) => {
  return (
    <Container 
      disabled={disabled}
      onClick={onClick ? onClick : null}>
      {children}
    </Container>
  )
}